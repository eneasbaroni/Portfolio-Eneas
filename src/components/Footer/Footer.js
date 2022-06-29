import { useContext, useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import LanguageContext from "../../context/languageContext"
import "./footer.css"

const Footer = () => {
  const [color, setColor] = useState("")
  const {handleLanguage} = useContext (LanguageContext)

  let location = useLocation();
  
  useEffect(() => {    
    console.log(location)
    if (location.pathname === "/works") {
      setColor("#191919")
    }else{
      setColor("#f2eadf")
    }    
  }, [location])


  
  return (
    <div className="footer row px-md-5 px-3 mb-4 row">
      <div className="col-12 px-1 row">
        <div className="navbarContainer col-3 row justify-content-between">
          <a className="navItem" href="https://www.instagram.com/mr_eneas/" target="_blank" rel="noreferrer" style={{ color:`${color}`}}>INSTAGRAM</a>
          <a className="navItem" href="https://github.com/eneasbaroni" target="_blank" rel="noreferrer" style={{ color:`${color}`}}>GITHUB</a>
          <a className="navItem" href="https://www.linkedin.com/in/eneasbaroni" target="_blank" rel="noreferrer" style={{ color:`${color}`}}>LINKEDIN</a>
        </div>
        <div className="col-8"></div>
        <div className="col-1 row justify-content-end">
          <div className="languageSelector" onClick={() => handleLanguage("eng")} style={{ color:`${color}`}}>EN</div>
          <div className="languageSelector" style={{ color:`${color}`}}>/</div>
          <div className="languageSelector"onClick={() => handleLanguage("esp")} style={{ color:`${color}`}}>ES</div>
        </div>
      </div>

    </div>
  )
}

export default Footer