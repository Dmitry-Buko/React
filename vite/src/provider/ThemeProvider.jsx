import { createContext, useContext, useEffect, useMemo, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  console.log('ThemeProvider render');
  
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
  }, [theme]);

  const handleClick = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  const value = useMemo(
    () => ({
      theme,
      handleClick,
    }),
    [theme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined)
    console.error("useTheme используется вне провайдера");
  return context;
};
