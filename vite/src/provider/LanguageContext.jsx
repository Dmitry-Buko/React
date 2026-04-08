import { createContext, memo, useCallback, useMemo, useState } from "react";

export const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  console.log("LanguageProvider render");

  const [language, setLanguage] = useState("en");

  console.log(language);

  let toggleLanguage = useCallback(() => {
    setLanguage((prevLang) => {
      const languages = ["en", "ru", "de", "es"];
      let currentIndex = languages.indexOf(prevLang);
      let nextIndex = (currentIndex + 1) % languages.length;
      return languages[nextIndex];
    });
  }, []);

  const value = useMemo(
    () => ({
      language,
      toggleLanguage,
    }),
    [language, toggleLanguage],
  );
  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
export default memo(LanguageProvider);
