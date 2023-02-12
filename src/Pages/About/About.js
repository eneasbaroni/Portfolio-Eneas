import { useContext, useEffect, useState } from "react"
import LanguageContext from "../../context/languageContext"
import me from "../../assets/portfolio.png"
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
    <main className="divContainer aboutContainer" style={{opacity: `${visible}`}}>      
      <div className="titleContainer">
        {lang === "esp"
          ?
            <h1 className="h2">APASIONADO CREATIVO RESOLUTIVO</h1>
          :
            <h1 className="h2">PASSIONATE CREATIVE RESOLUTIVE</h1>
        }
      </div>

      <div className="imgContainer">
        <img className="selfie" src={`${me}`} alt="selfie"/>
      </div>
      
      <div className="infoContainer">
        {lang === "esp"
            ?
              <>
                <div className="aboutText">
                  <h2 className="h2">ARQUITECTO</h2>                  
                  <div><p>Soy Arquitecto, recibido de la UNC. Tengo pasión por la arquitectura minimalista y brutalista. Un gran amor al hormigon y el metal</p></div>
                </div>
                <div className="aboutText">
                  <h2 className="h2">DISEÑADOR</h2>                 
                  <div><p>Desde chico fui un curioso del arte y poder llevar eso hacia el diseño fue el camino que marco mi vida. En los años de facultad hice diferentes cursos de diseño gráfico que me permitieron adentrarme en la resolucion de problemas mediante el diseño</p></div>                       
                </div>
                <div className="aboutText">
                  <h2 className="h2">DESARROLLADOR</h2>                  
                  <div><p>De la union del arte, diseño y la capacidad de poder crear cosas desde cero es que nace esta nueva faceta como desarrolador web. Donde me permito conjugar todas las experiencias y aptitudes adquiridas</p></div>
                </div>
              </>
            :
              <>
                <div className="aboutText">
                  <h2 className="h2">ARCHITECT</h2>
                  <div><p>I am an architect, graduated from UNC. I have a passion for minimalist and brutalist architecture. A strong love for concrete and metal</p></div>        
                </div>
                <div className="aboutText">
                  <h2 className="h2">DESIGNER</h2>
                  <div><p>Since I was child, I have curious about art and being able to mix that with design was a way of life. In University I studied graphic design, that allowed me to go deep into the problem solving with design</p></div>                       
                </div>
                <div className="aboutText">
                  <h2 className="h2">DEVELOPER</h2>
                  <div><p>From the union of art, design and the ability to create things from scratch was born this new facet as a web developer. Where I let myself combine all the experiences and skills acquired</p></div>
                </div>
              </>
          }
      </div>
    </main>
  )
}

export default About

