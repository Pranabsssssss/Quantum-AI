// filepath: c:\Users\Krishna Yadav\Desktop\Chat-ai\my-app\components\ui\dark-mode-toggle.tsx
"use client";

import { useEffect, useState } from "react";

export const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const root = window.document.documentElement;
    const initialTheme = localStorage.getItem("theme") || "dark";
    setIsDarkMode(initialTheme === "dark");
    root.classList.toggle("dark", initialTheme === "dark");
  }, []);

  const toggleDarkMode = () => {
    const root = window.document.documentElement;
    const newTheme = isDarkMode ? "light" : "dark";
    root.classList.toggle("dark", !isDarkMode);
    localStorage.setItem("theme", newTheme);
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-md bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
    >
      {isDarkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
};