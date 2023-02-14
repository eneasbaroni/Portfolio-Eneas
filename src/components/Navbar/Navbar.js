import { useContext, useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import LanguageContext from "../../context/languageContext"
import useScreenSize from '../../hooks/useScreenSize'
import menu from "../../assets/menu.svg"
import "./navbar.css"
import MobileMenu from "./MobileMenu"

const menuLight = {  
  filter: "invert(99%) sepia(1%) saturate(0%) hue-rotate(18deg) brightness(106%) contrast(101%)"
}

const Navbar = () => {  
  const windowSize = useScreenSize()  
  const [navbarOpen, setNavbarOpen] = useState(false)
  const {language} = useContext (LanguageContext)
  const [lang, setLang] = useState()   
  
  useEffect(() => {
    setLang(language)    
  }, [language])

  const handleClose = () => {
    setNavbarOpen(false)
  }

  return (

    <header>
      <div className="header">
        

        <NavLink to="/"  className="linkHome">Eneas Baroni ®</NavLink>

        {windowSize.width > 576 
          ?
            lang === "esp"
            ? 
              <div className="navbarContainer">              
                <NavLink to="/"  className="navItem">INICIO</NavLink>
                <NavLink to="/about"  className="navItem">SOBRE MI</NavLink>
                <NavLink to="/works"  className="navItem">TRABAJOS</NavLink>
                <NavLink to="/contact"  className="navItem">CONTACTO</NavLink>
              </div>
            :
              <div className="navbarContainer">               
                <NavLink to="/"  className="navItem" >HOME</NavLink>
                <NavLink to="/about"  className="navItem">ABOUT</NavLink>
                <NavLink to="/works"  className="navItem">WORKS</NavLink>
                <NavLink to="/contact"  className="navItem">CONTACT</NavLink>
              </div>
          : <></>
        }
        
        {windowSize.width < 576 &&  
          <>         
            <div className="menu">
              <img className="menuIcon" width={25} src={menu} alt="menu" style={menuLight} onClick={() => setNavbarOpen(!navbarOpen)}/>        
            </div> 
            {navbarOpen && <MobileMenu handleClose={handleClose}/>}
          </> 
        }        
        
      </div>
    </header>

    )    
}

export default Navbar
