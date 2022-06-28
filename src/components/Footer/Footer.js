import { useContext } from "react"
import LanguageContext from "../../context/languageContext"
import "./footer.css"

const Footer = () => {

  const {handleLanguage} = useContext (LanguageContext)

  
  return (
    <div className="row">
      <div className="navbarContainer col-3 row justify-content-between">
        <a className="navItem" href="https://www.instagram.com/mr_eneas/" target="_blank" rel="noreferrer">INSTAGRAM</a>
        <a className="navItem" href="https://github.com/eneasbaroni" target="_blank" rel="noreferrer">GITHUB</a>
        <a className="navItem" href="https://www.linkedin.com/in/eneasbaroni" target="_blank" rel="noreferrer">LINKEDIN</a>
      </div>
      <div className="col-8"></div>
      <div className="col-1 row justify-content-end">
        <div className="languageSelector" onClick={() => handleLanguage("eng")}>EN</div>
        <div className="languageSelector">/</div>
        <div className="languageSelector"onClick={() => handleLanguage("esp")}>ES</div>
      </div>

    </div>
  )
}

export default Footer