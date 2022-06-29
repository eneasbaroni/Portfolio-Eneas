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
      <div className="header  px-md-5 px-3 mt-4 row">
        <div className="col-12 px-1 row" style={{ border:`1px solid ${color}`}}>

        <NavLink to="/"  className="col-9 linkHome " style={{ color:`${color}`}}>Eneas Baroni®</NavLink>              
        <div className="navbarContainer col-3 row align-items-center  justify-content-between">
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