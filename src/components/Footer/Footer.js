import { useContext, useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import LanguageContext from "../../context/languageContext"
import "./footer.css"

const Footer = () => {  
  const [development, setDevelopment] = useState(false)
  const {handleLanguage} = useContext (LanguageContext)
  

  let location = useLocation();

  useEffect(() => {   
    if (location.pathname === "/contact") {
      setDevelopment(true)
    }else {
      setDevelopment(false)
    }    
  }, [location])


  
  return (
    <footer className="footer aling-items-center row">
      <div className="col-12 row justify-content-between aling-items-center">
        <div className="navbarContainer col-8 row aling-items-center justify-content-start">
          {development
            ?
              <p className="navItem">Design and development by Eneas Baroni</p>
            :
              <>
                <a className="navItem" href="https://www.instagram.com/mr_eneas/" target="_blank" rel="noreferrer">INSTAGRAM</a>
                <a className="navItem" href="https://github.com/eneasbaroni" target="_blank" rel="noreferrer">GITHUB</a>
                <a className="navItem" href="https://www.linkedin.com/in/eneasbaroni" target="_blank" rel="noreferrer">LINKEDIN</a>
              </>
          }
        </div>        
        <div className="col-4 mt-0 0 row justify-content-end">
          <div className="languageSelector" onClick={() => handleLanguage("eng")}>EN</div>
          <div className="languageSelector">/</div>
          <div className="languageSelector"onClick={() => handleLanguage("esp")}>ES</div>
        </div>
      </div>

    </footer>
  )
}

export default Footer
