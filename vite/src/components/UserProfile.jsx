import { memo, useContext } from "react"
import { translation } from "../config/translation";
import { LanguageContext } from "../provider/LanguageContext";

const UserProfile = () => {
  const {language} = useContext(LanguageContext)
  return(
    <div>
      <p>{translation[language].profile}</p>
      <p>{translation[language].selectLanguage}: {translation[language].language}</p>
    </div>
  )
}
export default memo(UserProfile)