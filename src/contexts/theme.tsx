import { createContext, useEffect, useState } from "react";

interface IThemeProvider {
  children: any;
}

const ThemeContext: any = createContext(null);

const ThemeProvider = ({ children }: IThemeProvider) => {
  const [themeName, setThemeName] = useState("light");

  useEffect(() => {
    const isDark = localStorage.getItem("themeName") === "dark";
    if (isDark) setThemeName("dark");
  }, []);

  const toggleTheme = () => {
    const name = themeName === "dark" ? "light" : "dark";
    localStorage.setItem("themeName", name);
    setThemeName(name);
  };

  return (
    <ThemeContext.Provider value={[{ themeName, toggleTheme }]}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
