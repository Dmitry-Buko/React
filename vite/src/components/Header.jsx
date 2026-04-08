import { memo, useContext } from "react";
import { translation } from "../config/translation";
import { LanguageContext } from "../provider/LanguageContext";

const Header = () => {
  const {language} = useContext(LanguageContext)
  return (
    <div>
      <h1>{translation[language].welcome}</h1>
      <p>{translation[language].text}</p>
    </div>
  );
};
export default memo(Header)