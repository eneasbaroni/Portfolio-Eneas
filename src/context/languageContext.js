const { createContext, useState } = require("react");

const LanguageContext = createContext()

const LanguageProvider = ({children}) => {
  const [language, setLanguage] = useState("esp")
  const handleLanguage = (lg) =>{ 
    setLanguage(lg);
    lg === "esp" && document.documentElement.setAttribute('lang', 'es')
    lg === "eng" && document.documentElement.setAttribute('lang', 'en')
  }

  const data = {language, handleLanguage}
  return <LanguageContext.Provider value={data}> {children} </LanguageContext.Provider>
}

export {LanguageProvider}
export default LanguageContext