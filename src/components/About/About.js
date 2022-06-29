import { useContext, useEffect, useState } from "react"
import LanguageContext from "../../context/languageContext"
import me from "../../assets/aboutImg.png"
import "./about.css"

const About = () => {
  const [visible, setVisible] = useState(0)
  const {language} = useContext (LanguageContext)
  const [lang, setLang] = useState()

  useEffect(() => {
    setTimeout(() => {
      setVisible(1)      
    }, 1);   
  }, [])
  

  useEffect(() => {
    setLang(language)    
  }, [language])

  return (
    <div className="divContainer col-12 row align-items-center justify-content-center" style={{opacity: `${visible}`}}>
      <img className="col-4 selfie" src={`${me}`} alt="selfie"/>
      
      <div className="col-4 about">
        {lang === "esp" 
          ?
            <>
              <p>Soy Arquitecto, recibido de la UNC, y poseo estudios en diseño grafico</p>
              <p>Hace aproximadamente un año me adentre al mundo del desarrollo web. Actualmente estoy certificado como Desarrollador FrontEnd y me encuentro estudiante Desarrollo BackEnd.</p>
              <p>Ademas de la Arquitectura y el Desarrollo Web, soy un apasionado del arte, tal así, que mi hobby de ratos libres es la pintura.</p>
              <p>Soy flexible, comprometido y altamente motivado. Dedicado, con gran imaginación, creatividad y de rápido aprendizaje.</p>
            </>
          :
            <>
              <p>I am an Architect, graduated from the UNC, and I have studies in graphic design.</p>
              <p>About a year ago I entered in the world of web development. I am currently certified as a FrontEnd Developer and I am studying BackEnd Development.</p>
              <p>Aside of Architecture and Web Development, I am passionate about art, so much so, that my spare time hobby is painting.</p>
              <p>I am flexible, dedicated and self-motivated. With great imagination, creativity and easy learning.</p>
            </>
        }    
      </div>
    </div>
  )
}

export default About