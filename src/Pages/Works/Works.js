import { useContext, useEffect, useState } from "react"
import {esp, eng} from "../../data/works"
import Loader from "../../components/Loader/Loader"
import Work from "./Work"
import LanguageContext from "../../context/languageContext"
import "./works.css"

const Works = () => {
  const [loading, setLoading] = useState(true)
  const [visible, setVisible] = useState(0)    
  const [lang, setLang] = useState()

  const {language} = useContext (LanguageContext)
  

  useEffect(() => {
    setTimeout(() => {
      setVisible(1)      
    }, 1);   
  }, [])

  useEffect(() => {
    setLang(language)    
  }, [language])

  const handleLoad = () => {
    setLoading(false);    
  } 
  
  return (
    
    <main className="divContainer" id="works" style={{opacity: `${visible}`}}>
      <img className="workImg" src="/images/eos-2.png" alt="preload" style={{display: "none"}}/>                    
      <img className="workImg" src="/images/leCadre-2.png" alt="preload" style={{display: "none"}}/>                    
      <img className="workImg" src="/images/woodworth-2.png" alt="preload" style={{display: "none"}}/>                    
      <img className="workImg" src="/images/dart-2.png" alt="preload" style={{display: "none"}}/>                    
      <img className="workImg" src="/images/picante-2.png" alt="preload" style={{display: "none"}} onLoad={handleLoad}/> 
      {loading 
      ?
       <Loader/>
      :
        <>
          <div className="worksContainer">
            {lang === "esp"
              ?
                <>
                  {esp.map ((el, i) => {
                    return (
                      <Work work={el} key={i} id={i}/>                    
                      )
                    })} 
                </>
              : 
                <>
                  {eng.map ((el, i) => {
                    return (
                      <Work work={el} key={i} id={i}/>                    
                      )
                    })} 
                </>
            }
          </div>
        </>
      }                
    </main>
    
  )
}

export default Works