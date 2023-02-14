import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import LanguageContext from '../../context/languageContext'

const MobileMenu = ({handleClose}) => {
  const [topPosition, setTopPosition] = useState("-100%")
  const {language} = useContext (LanguageContext)
  const [lang, setLang] = useState() 

  useEffect(() => {
    setLang(language)    
  }, [language])

  useEffect(() => {
    setTimeout(() => {
      setTopPosition("0")
    }, 100)
    
  }, [])

  const setCloseMobileMenu = () => {
    setTopPosition("-100%")
    setTimeout(() => {
      handleClose()
    }, 500)
  }


  return (
    <>
      {lang === "esp"
        ? 
          <div className="mobileNavbar" style={{top: topPosition}}> 
            <div className='mobileHeader'>
              <h3>Eneas Baroni ®</h3> 
              <h3 onClick={setCloseMobileMenu}>X</h3>       
            </div>
            <div className='mobileLinks'>
              <NavLink to="/"  className="navItem" onClick={setCloseMobileMenu}>Inicio</NavLink>
              <NavLink to="/about"  className="navItem"  onClick={setCloseMobileMenu}>Sobre mi</NavLink>
              <NavLink to="/works"  className="navItem"  onClick={setCloseMobileMenu}>Trabajos</NavLink>
              <NavLink to="/contact"  className="navItem" onClick={setCloseMobileMenu}>Contacto</NavLink>
            </div>     
          </div>
        :
          <div className="mobileNavbar" style={{top: topPosition}}> 
            <div className='mobileHeader'>
              <h3>Eneas Baroni ®</h3> 
              <h3 onClick={setCloseMobileMenu}>X</h3>       
            </div>
            <div className='mobileLinks'>
              <h3 onClick={setCloseMobileMenu}>X</h3>                 
              <NavLink to="/"  className="navItem" onClick={setCloseMobileMenu} >HOME</NavLink>
              <NavLink to="/about"  className="navItem" onClick={setCloseMobileMenu}>ABOUT</NavLink>
              <NavLink to="/works"  className="navItem" onClick={setCloseMobileMenu}>WORKS</NavLink>
              <NavLink to="/contact"  className="navItem" onClick={setCloseMobileMenu}>CONTACT</NavLink>
            </div>   
          </div>
      }
    </>
  )
}

export default MobileMenu