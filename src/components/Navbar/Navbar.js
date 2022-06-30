import { useContext, useEffect, useState } from "react"
import { NavLink, useLocation } from "react-router-dom"
import LanguageContext from "../../context/languageContext"
import "./navbar.css"

const Navbar = () => {  
  const {language} = useContext (LanguageContext)
  const [lang, setLang] = useState()  
  const [color, setColor] = useState("")


  let location = useLocation();    

  useEffect(() => {    
    console.log(location)
    if (location.pathname === "/works") {
      setColor("#191919")
    }else{
      setColor("#f2eadf")
    }    
  }, [location])
  

  useEffect(() => {
    setLang(language)    
  }, [language])

  return (

    <>
      <div className="header row">
        <div className="col-12 px-2 row justify-content-between" style={{ border:`1px solid ${color}`}}>

        <NavLink to="/"  className="col-12 col-sm-4 linkHome text-center text-sm-start " style={{ color:`${color}`}}>Eneas Baroni®</NavLink>              
        <div className="navbarContainer col-12 col-sm-8 row align-items-center justify-content-center justify-content-sm-end">
          {lang === "esp"
            ? 
              <>
                {/* <NavLink to="/"  className="navItem">INICIO</NavLink> */}
                <NavLink to="/about"  className="navItem" style={{ color:`${color}`}}>SOBRE MI</NavLink>
                <NavLink to="/works"  className="navItem" style={{ color:`${color}`}}>TRABAJOS</NavLink>
                <NavLink to="/contact"  className="navItem" style={{ color:`${color}`}}>CONTACTO</NavLink>
              </>
            :
              <>
                {/* <NavLink to="/"  className="navItem">HOME</NavLink> */}
                <NavLink to="/about"  className="navItem" style={{ color:`${color}`}}>ABOUT</NavLink>
                <NavLink to="/works"  className="navItem" style={{ color:`${color}`}}>WORKS</NavLink>
                <NavLink to="/contact"  className="navItem" style={{ color:`${color}`}}>CONTACT</NavLink>
              </>
          }            
        </div>
        </div>
      </div>
    </>

    )    
}

export default Navbar