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

  console.log(lang)

  return (
    <div className="divContainer aboutContainer col-12 row" style={{opacity: `${visible}`}}>
      <div className="col-12 row">
        <h1 className="h1 col-4 aling-self-start mb-3">PASSIONATE CREATIVE DEVELOPER</h1>
      </div>
      <div className="col-12 row justify-content-center">
        <img className=" col-12 col-lg-4 selfie" src={`${me}`} alt="selfie"/>
      </div>
      <div className="col-12 row justify-content-center justify-content-md-end">
        <div className="col-12 col-md-4 text-end text-md-start row aboutText justify-content-center mt-3 mt-md-0">
          <h2>ARQUITECTO</h2>
          <p>Soy Arquitecto, recibido de la UNC. Tengo pasión por la arquitectura minimalista y brutalista. Un gran amor al hormigon y el metal</p>        
        </div>
        <div className="col-12 col-md-4 text-end text-md-start row aboutText justify-content-center mt-3 mt-md-0">
          <h2>DISEÑADOR</h2>
          <p>Desde chico fui un curioso del arte, y poder llevar eso hacia el diseño fue el camino que marco mi vida. En los años de facultad hice diferentes cursos de diseño gráfico que me permitieron adentrarme en la resolucion de problemas mediante el diseño</p>                       
        </div>
        <div className="col-12 col-md-4 text-end text-md-start row aboutText justify-content-center mt-3 mt-md-0">
          <h2>DESARROLLADOR</h2>
          <p>De la union del arte, diseño, y la capacidad de poder crear cosas desde cero es que nace esta nueva faceta como desarrolador web. Donde me permito conjugar todas las experiencias y aptitudes adquiridas</p>
        </div>
      </div>
      
      
      {/* <div className="col-12 col-lg-4 about">
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
      </div> */}
    </div>
  )
}

export default About
