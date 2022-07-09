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
    <div className="divContainer aboutContainer col-12 row" style={{opacity: `${visible}`}}>
      <div className="col-12 row">
        {lang === "esp"
          ?
            <h1 className="h1 col-3 aling-self-start mb-3">APASIONADO CREATIVO RESOLUTIVO</h1>
          :
            <h1 className="h1 col-3 aling-self-start mb-3">PASSIONATE CREATIVE RESOLUTIVE</h1>
        }
      </div>
      <div className="col-12 row justify-content-center">
        <img className=" col-12 selfie" src={`${me}`} alt="selfie"/>
      </div>
      <div className="col-12 row justify-content-center justify-content-md-end">
        {lang === "esp"
            ?
              <>
                <div className="col-12 row text-end text-md-start row aboutText my-1">
                  <h2 className="h1 col-12 col-md-6">ARQUITECTO</h2>                  
                  <p className="col-12 col-md-6 text-end">Soy Arquitecto, recibido de la UNC. Tengo pasión por la arquitectura minimalista y brutalista. Un gran amor al hormigon y el metal</p>        
                </div>
                <div className="col-12 row text-end text-md-start row aboutText my-1">
                  <h2 className="h1 col-12 col-md-6">DISEÑADOR</h2>                 
                  <p className="col-12 col-md-6 text-end">Desde chico fui un curioso del arte y poder llevar eso hacia el diseño fue el camino que marco mi vida. En los años de facultad hice diferentes cursos de diseño gráfico que me permitieron adentrarme en la resolucion de problemas mediante el diseño</p>                       
                </div>
                <div className="col-12 row text-end text-md-start row aboutText my-1">
                  <h2 className="h1 col-12 col-md-6">DESARROLLADOR</h2>                  
                  <p className="col-12 col-md-6 text-end">De la union del arte, diseño y la capacidad de poder crear cosas desde cero es que nace esta nueva faceta como desarrolador web. Donde me permito conjugar todas las experiencias y aptitudes adquiridas</p>
                </div>
              </>
            :
              <>
                <div className="col-12 row text-end text-md-start row aboutText my-1">
                  <h2 className="h1 col-12 col-md-6">ARCHITECT</h2>
                  <p className="col-12 col-md-6 text-end">I am an architect, graduated from UNC. I have a passion for minimalist and brutalist architecture. A strong love for concrete and metal</p>        
                </div>
                <div className="col-12 row text-end text-md-start row aboutText my-1">
                  <h2 className="h1 col-12 col-md-6">DESIGNER</h2>
                  <p className="col-12 col-md-6 text-end">Since I was child, I have curious about art and being able to mix that with design was a way of life. In University I studied graphic design, that allowed me to go deep into the problem solving with design</p>                       
                </div>
                <div className="col-12 row text-end text-md-start row aboutText my-1">
                  <h2 className="h1 col-12 col-md-6">DEVELOPER</h2>
                  <p className="col-12 col-md-6 text-end">From the union of art, design and the ability to create things from scratch was born this new facet as a web developer. Where I let myself combine all the experiences and skills acquired</p>
                </div>
              </>
          }
      </div>
    </div>
  )
}

export default About

