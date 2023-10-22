"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      className={`w-8 h-8 bg-[#050505] dark:bg-[#FAFAFA] rounded-[16px]`}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    ></button>
  );
};
