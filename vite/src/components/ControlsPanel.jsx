import { memo, useContext } from "react";
import {translation} from '../config/translation'
import {LanguageContext} from "../provider/LanguageContext";
import {ThemeContext} from "../provider/ThemeContext";


const ControlsPanel = memo(()=>{
  const {language, toggleLanguage} = useContext(LanguageContext)
  const {toggleTheme} = useContext(ThemeContext)
  return(
    <div className="ControlsPanel">
      <button onClick={toggleLanguage}>
        {translation[language].btnLanguage}
      </button>
      <button onClick={toggleTheme}>
        {translation[language].btnTheme}
      </button>
    </div>
  )
})

export default ControlsPanel