import type { FC } from "react";
import { useAssistantRuntime } from "@assistant-ui/react";
import {
  ThreadListItemPrimitive,
  ThreadListPrimitive,
} from "@assistant-ui/react";
import { ArchiveIcon, PlusIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { TooltipIconButton } from "@/components/assistant-ui/tooltip-icon-button";

export const ThreadList: FC = () => {
  return (
    <ThreadListPrimitive.Root className="flex flex-col items-stretch gap-1.5">
      <ThreadListNew />
      <ThreadListItems />
    </ThreadListPrimitive.Root>
  );
};

const ThreadListNew: FC = () => {
  const runtime = useAssistantRuntime({ optional: true });

  const handleNew = async () => {
    try {
      if (!runtime) return;
      await runtime.threads.switchToNewThread();
    } catch (e) {
      console.error("Unable to create new thread", e);
    }
  };

  return (
    <Button
      onClick={handleNew}
      className="data-[active]:bg-muted hover:bg-muted/80 flex items-center justify-start gap-2 rounded-md px-2 py-1.5 text-sm font-medium transition-colors"
      variant="ghost"
    >
      <PlusIcon className="size-4" />
      New Chat
    </Button>
  );
};

const ThreadListItems: FC = () => {
  return <ThreadListPrimitive.Items components={{ ThreadListItem }} />;
};

const ThreadListItem: FC = () => {
  return (
    <ThreadListItemPrimitive.Root className="data-[active]:bg-muted hover:bg-muted/50 group flex items-center gap-1 rounded-md transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring px-2 py-1.5">
      <ThreadListItemPrimitive.Trigger className="flex-grow min-w-0 text-start">
        <ThreadListItemTitle />
      </ThreadListItemPrimitive.Trigger>
      <ThreadListItemArchive />
    </ThreadListItemPrimitive.Root>
  );
};

const ThreadListItemTitle: FC = () => {
  return (
    <p className="text-xs text-foreground truncate">
      <ThreadListItemPrimitive.Title fallback="New Chat" />
    </p>
  );
};

const ThreadListItemArchive: FC = () => {
  return (
    <ThreadListItemPrimitive.Archive asChild>
      <TooltipIconButton
        className="opacity-0 group-hover:opacity-100 transition-opacity hover:text-primary text-muted-foreground size-3 p-0 flex-shrink-0"
        variant="ghost"
        tooltip="Archive thread"
      >
        <ArchiveIcon />
      </TooltipIconButton>
    </ThreadListItemPrimitive.Archive>
  );
};
