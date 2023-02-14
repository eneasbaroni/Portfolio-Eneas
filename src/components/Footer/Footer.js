import { useContext, useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import LanguageContext from "../../context/languageContext"
import useScreenSize from '../../hooks/useScreenSize'
import "./footer.css"
import MobileFooter from "./MobileFooter"

const Footer = () => {  
  const [development, setDevelopment] = useState(false)
  const {handleLanguage} = useContext (LanguageContext)
  const windowSize = useScreenSize()
  

  let location = useLocation();

  useEffect(() => {   
    if (location.pathname === "/contact") {
      setDevelopment(true)
    }else {
      setDevelopment(false)
    }    
  }, [location])


  
  return (
    <footer className="footer">

      {windowSize.width > 576
        ?
          <>
            <div className="navbarContainer">
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
            <div className="langContainer">
              <div className="languageSelector" onClick={() => handleLanguage("eng")}>EN</div>
              <div className="languageSelector">/</div>
              <div className="languageSelector"onClick={() => handleLanguage("esp")}>ES</div>
            </div>
          </>      
        :
          <MobileFooter/>
      }
      

    </footer>
  )
}

export default Footer
