import { useContext, useEffect, useState } from "react"
import {esp, eng} from "../../data/works"
import Loader from "../../components/Loader/Loader"
import Work from "./Work"
import LanguageContext from "../../context/languageContext"
import "./works.css"

const Works = () => {
  const [loading, setLoading] = useState(true)
  const [visible, setVisible] = useState(0)
  const [currentId, setCurrentId] = useState(0)
  const [currentw, setCurrentw] = useState(esp[0].url)
  const [windowSize, setWindowSize] = useState(window.innerWidth)  
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


  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth) 
    }
    window.addEventListener("resize", handleResize);
    handleResize();  
    return () => window.removeEventListener("resize", handleResize);
  }, [])

  const setcurrent = (x) => {     
    setCurrentw(esp[x].url)
    setCurrentId(x)
           
  }   
  
  return (
    
    <main className="divContainer" id="works" style={{opacity: `${visible}`}}>
      <img className="workImg" src="/images/eos.png" alt="preload" style={{display: "none"}}/>                    
      <img className="workImg" src="/images/leCadre.png" alt="preload" style={{display: "none"}}/>                    
      <img className="workImg" src="/images/woodworth.png" alt="preload" style={{display: "none"}}/>                    
      <img className="workImg" src="/images/picante.png" alt="preload" style={{display: "none"}} onLoad={handleLoad}/> 
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
                      <Work work={el} setCurrent={setcurrent} key={i} id={i} currentId={currentId}/>                    
                      )
                    })} 
                </>
              : 
                <>
                  {eng.map ((el, i) => {
                    return (
                      <Work work={el} setCurrent={setcurrent} key={i} id={i} currentId={currentId}/>                    
                      )
                    })} 
                </>
            }
          </div>
          { windowSize > 767 && <a href={`${esp[currentId].web}`} target="_blank" rel="noreferrer" className="workImgContainer"><img className="workImg" src={currentw} alt="workImg"/></a>}
        </>
      }                
    </main>
    
  )
}

export default Works