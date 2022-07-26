import { useContext, useEffect, useState } from 'react'
import LanguageContext from "../../context/languageContext"
import "./contact.css"



const Contact = () => {
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
    <main className="divContainer contactContainer col-12 row text-center" id='mailme' style={{opacity: `${visible}`}}>
      <div className='col-12 projectMind row'>
      {lang === "esp"
        ? 
          <>
            <p className='mainText'>Tenés algun proyecto en mente?</p>
            <a className='mailme' href="mailto:eneasbaroni@gmail.com?Subject=Contacto%20desde%20web%20personal"><h1 className='h1'>HABLEMOS!</h1></a>          
          </>
        :  
          <>
            <p className='mainText'>Hava a project in mind?</p>
            <a className='mailme' href="mailto:eneasbaroni@gmail.com?Subject=Contacto%20desde%20web%20personal"><h1 className='h1'>LET'S TALK!</h1></a>
          </>
      }
      </div>
        <a href="#medias" className='media'><p>↓</p></a>        
        <a href="#app" className='mailmeArrow'><p>↑</p></a>        
      <div className='col-12 row'>
        <div className='medias col-12 row aling-items-center' id="medias">
          {lang === "esp"
            ? 
              <p className='mainText'>o puedes encontrame en las redes</p>
            :
              <p className='mainText'>or connect with me on socials</p>
          }
          
          <div><a className="mediaLink h1" href="https://www.instagram.com/mr_eneas/" target="_blank" rel="noreferrer">INSTAGRAM</a></div>
          <div><a className="mediaLink h1" href="https://github.com/eneasbaroni" target="_blank" rel="noreferrer">GITHUB</a></div>
          <div><a className="mediaLink h1" href="https://www.linkedin.com/in/eneasbaroni" target="_blank" rel="noreferrer">LINKEDIN</a></div>
          {lang === "esp"
            ?
              <a className="cv col-12 row" href="/docs/CV_BARONI_Eneas.pdf" target="_blank" rel="noreferrer" download>
                <p className='mainText'>CV</p>
                <p className='mainText'>=</p>
              </a>
            :
              <a className="cv col-12 row" href="/docs/Resume_BARONI_Eneas.pdf" target="_blank" rel="noreferrer" download>
                <p className='mainText'>RESUME</p>
                <p className='mainText'>=</p>
              </a>
          }
        </div>
      </div>      
    </main>
  )
}

export default Contact
