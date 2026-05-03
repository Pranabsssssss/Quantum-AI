import { google } from "@ai-sdk/google";
import { convertToCoreMessages, streamText } from "ai";

const SYSTEM_PROMPT = `You are Quantum AI.
If a user asks who you are, what you are, who made you, or asks similar identity questions, reply exactly with: I am an AI model Made By Team Quantum for Team Quantum Users`;
 
export const maxDuration = 30;

const getErrorMessage = (error: unknown) => {
  if (error instanceof Error) {
    return error.message;
  }

  if (typeof error === "string") {
    return error;
  }

  return "Chat provider error";
};
 
export async function POST(req: Request) {
  let body: unknown;

  try {
    body = await req.json();
  } catch {
    return new Response("Invalid JSON body", {
      status: 400,
    });
  }

  const messages =
    typeof body === "object" && body !== null && "messages" in body
      ? (body as { messages?: unknown }).messages
      : undefined;

  if (!Array.isArray(messages)) {
    return new Response("Request body must include a messages array", {
      status: 400,
    });
  }

  const apiKey =
    process.env.GOOGLE_GENERATIVE_AI_API_KEY ??
    process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return new Response("Missing GOOGLE_GENERATIVE_AI_API_KEY or GEMINI_API_KEY", {
      status: 500,
    });
  }

  process.env.GOOGLE_GENERATIVE_AI_API_KEY = apiKey;
  const modelId = process.env.GOOGLE_GENERATIVE_AI_MODEL ?? "gemini-flash-latest";

  try {
    const result = streamText({
      model: google(modelId),
      system: SYSTEM_PROMPT,
      messages: convertToCoreMessages(messages),
    });

    return result.toDataStreamResponse({
      getErrorMessage,
    });
  } catch (error) {
    console.error("/api/chat error", error);
    return new Response(getErrorMessage(error), {
      status: 500,
    });
  }
}