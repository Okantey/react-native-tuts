// Import necessary functions and types from React
import { createContext, ReactNode, useState } from "react";

// Define the structure (type) of the context value
type ThemeContextType = {
  theme: string; // Holds the current theme value ("light" or "dark")
  setTheme: (theme: string) => void; // Function to update the theme
  count: number; // A numeric state (can be used for anything like tracking clicks)
  setCount: (count: number) => void; // Function to update the count
};

// Create the context with an initial undefined value (will be provided via ThemeProvider)
export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

// Create the ThemeProvider component which will wrap parts of the app that need access to this context
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  // Initialize the theme state to "light"
  const [theme, setTheme] = useState("light");

  // Initialize the count state to 0
  const [count, setCount] = useState(0);

  // Return the context provider, passing in all values so they can be used by children components
  return (
    <ThemeContext.Provider value={{ theme, setTheme, count, setCount }}>
      {children}
    </ThemeContext.Provider>
  );
};
