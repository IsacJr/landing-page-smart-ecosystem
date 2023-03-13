import { createContext, ReactNode, useState } from "react";

export const ThemeContext = createContext({
  isDarkMode: false,
  setDarkMode: (p: boolean) => {},
});

type ThemeProviderProps = {
  children: ReactNode;
};

function ThemeProvider({ children }: ThemeProviderProps) {
  const [isDarkMode, setDarkMode] = useState(false);

  return (
    <ThemeContext.Provider value={{ isDarkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
