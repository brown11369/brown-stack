"use client";

import { ReactNode } from "react";
import { useTheme } from "../context/ThemeContext";
import Header from "./Header";

interface ThemeWrapperProps {
  children: ReactNode;
}

export default function ThemeWrapper({ children }: ThemeWrapperProps) {
  const { isDarkMode } = useTheme();

  return (
    <div className={`page-wrapper ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <Header />
      <>{children}</>
    </div>
  );
}
