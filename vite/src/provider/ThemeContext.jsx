import { createContext, memo, useCallback, useEffect, useState } from "react";

export const ThemeContext = createContext();

const ThemeProvider = memo(({ children }) => {
  console.log("ThemeProvider render");
  
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }, []);
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
});

export default ThemeProvider;
