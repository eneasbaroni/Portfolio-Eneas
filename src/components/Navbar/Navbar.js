import { useContext, useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import LanguageContext from "../../context/languageContext"
import "./navbar.css"

const Navbar = () => {
  const {language} = useContext (LanguageContext)
  const [lang, setLang] = useState()

  useEffect(() => {
    setLang(language)    
  }, [language])

  if (lang === "esp") {
    return (
      <> 
      <div className="row">
        <div className="col-9"></div>      
        <div className="navbarContainer col-3 row justify-content-between">
          <NavLink to="/"  className="navItem">INICIO</NavLink>
          <NavLink to="/about"  className="navItem">SOBRE MI</NavLink>
          <NavLink to="/works"  className="navItem">TRABAJOS</NavLink>
          <NavLink to="/contact"  className="navItem">CONTACTO</NavLink>
        </div>
      </div>
    </>
    )
  } else {
    return (
      <> 
      <div className="row">
        <div className="col-9"></div>      
        <div className="navbarContainer col-3 row justify-content-between">
          <NavLink to="/"  className="navItem">HOME</NavLink>
          <NavLink to="/about"  className="navItem">ABOUT</NavLink>
          <NavLink to="/works"  className="navItem">WORKS</NavLink>
          <NavLink to="/contact"  className="navItem">CONTACT</NavLink>
        </div>
      </div>
    </>
    )
  }  
  
}

export default Navbar