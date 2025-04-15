
import React, { createContext, useState, useContext, useEffect } from "react";

type Theme = "light" | "dark" | "system";

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
}

interface ThemeProviderState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  isDarkMode: boolean;
}

const ThemeContext = createContext<ThemeProviderState | undefined>(undefined);

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "vite-ui-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  );
  
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  // Function to determine if the current theme is dark
  const calculateIsDarkMode = (currentTheme: Theme): boolean => {
    if (currentTheme === "dark") return true;
    if (currentTheme === "light") return false;
    // For system theme, check user's system preference
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  };

  useEffect(() => {
    const root = window.document.documentElement;
    
    root.classList.remove("light", "dark");
    
    let resolvedTheme: "light" | "dark";
    
    if (theme === "system") {
      resolvedTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    } else {
      resolvedTheme = theme as "light" | "dark";
    }
    
    root.classList.add(resolvedTheme);
    setIsDarkMode(resolvedTheme === "dark");
    
    // Update meta theme-color for browser UI
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute(
        "content",
        resolvedTheme === "dark" ? "#121212" : "#ffffff"
      );
    } else {
      const meta = document.createElement('meta');
      meta.name = 'theme-color';
      meta.content = resolvedTheme === "dark" ? "#121212" : "#ffffff";
      document.head.appendChild(meta);
    }
  }, [theme]);

  // Listen for system theme changes
  useEffect(() => {
    if (theme !== "system") return;
    
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    
    const handleChange = () => {
      document.documentElement.classList.remove("light", "dark");
      document.documentElement.classList.add(
        mediaQuery.matches ? "dark" : "light"
      );
      setIsDarkMode(mediaQuery.matches);
    };
    
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [theme]);

  const value = {
    theme,
    setTheme: (newTheme: Theme) => {
      localStorage.setItem(storageKey, newTheme);
      setTheme(newTheme);
    },
    isDarkMode,
  };

  return (
    <ThemeContext.Provider value={value} {...props}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = (): ThemeProviderState => {
  const context = useContext(ThemeContext);
  
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  
  return context;
};
