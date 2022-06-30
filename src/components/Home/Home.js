import { useContext, useEffect, useState } from "react"
import LanguageContext from "../../context/languageContext"
import "./home.css"

const Home = () => {

  const {language} = useContext (LanguageContext)
  const [lang, setLang] = useState()

  useEffect(() => {
    setLang(language)    
  }, [language])


  return (
    <div className="divContainer col-12 m-auto row align-items-center justify-content-center justify-content-sm-end"  id="home"> 
      {/* <div className="col-7"></div>    */}  
      <div className="col-12 col-sm-7 col-lg-5  row text-center text-sm-start ">
        {lang === "esp"
        ?
          <>          
            <h1 className='h1 mb-4'>Desarrollador Web y diseñador gráfico de Córdoba, Argentina</h1>
            <p className="mainText">Hola! Mi nombre es Eneas.</p>
            <p className="mainText">Soy desarrollador Web y Arquitecto.</p>
            <p className="mainText">Actualmente me encuentro trabajando como freelance</p>   
          </>
        :
          <>          
            <h1 className='h1 mb-4'>Web Developer and Graphic Designer based in Córdoba, Argentina</h1>
            <p className="mainText">Hi! I am Eneas.</p>
            <p className="mainText">I am a Web Developer and Architect.</p>
            <p className="mainText">Currently working as a freelance</p>   
          </>
      }
      </div>
      {/* <div className="col-6">
        <img className="homeBG col-12" src="/images/home_bg.png" alt="homeBG"/>
      </div> */}
    </div>
  )
}

export default Home