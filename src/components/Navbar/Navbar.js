import { useContext, useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import LanguageContext from "../../context/languageContext"
import menu from "../../assets/menu.svg"
import "./navbar.css"

const menuLight = {
  filter: "invert(99%) sepia(58%) saturate(430%) hue-rotate(306deg) brightness(101%) contrast(90%)"
}

const Navbar = () => {  
  const [windowSize, setWindowSize] = useState(window.innerWidth)
  const [navbarOpen, setNavbarOpen] = useState(false)
  const {language} = useContext (LanguageContext)
  const [lang, setLang] = useState()  

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth)  
      setNavbarOpen(false) 
    }
    window.addEventListener("resize", handleResize);
    handleResize();  
    return () => window.removeEventListener("resize", handleResize);
  }, [])

  useEffect(() => {
    setLang(language)    
  }, [language])

  return (

    <>
      <div className="header row">
        <div className="col-12 px-2 row justify-content-between">

        <NavLink to="/"  className=" col-7 col-sm-4 linkHome  text-start"  onClick={() => setNavbarOpen(false)}>Eneas Baroni ®</NavLink>
        {windowSize < 576 &&            
          <div className="menu col-5 justify-content-end text-end">
            <img className="menuIcon" width={25} src={menu} alt="menu" style={menuLight} onClick={() => setNavbarOpen(!navbarOpen)}/>        
          </div>  
        }
        {navbarOpen === false & windowSize < 576
          ? <></>
          :            
            <div className="navbarContainer col-12 col-sm-8 row align-items-center justify-content-center  justify-content-sm-end">
              {lang === "esp"
                ? 
                  <>
                    
                    {windowSize > 576 && <NavLink to="/"  className="navItem">INICIO</NavLink>}
                    <NavLink to="/about"  className="navItem"  onClick={() => setNavbarOpen(false)}>SOBRE MI</NavLink>
                    <NavLink to="/works"  className="navItem"  onClick={() => setNavbarOpen(false)}>TRABAJOS</NavLink>
                    <NavLink to="/contact"  className="navItem" onClick={() => setNavbarOpen(false)}>CONTACTO</NavLink>
                  </>
                :
                  <>
                    
                    {windowSize > 576 && <NavLink to="/"  className="navItem" >HOME</NavLink>}
                    <NavLink to="/about"  className="navItem" onClick={() => setNavbarOpen(false)}>ABOUT</NavLink>
                    <NavLink to="/works"  className="navItem" onClick={() => setNavbarOpen(false)}>WORKS</NavLink>
                    <NavLink to="/contact"  className="navItem" onClick={() => setNavbarOpen(false)}>CONTACT</NavLink>
                  </>
              }            
            </div>
        }
        </div>
      </div>
    </>

    )    
}

export default Navbar
