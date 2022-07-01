import { useEffect, useState } from "react"
import {esp} from "../../data/works"
import Work from "./Work"
import "./works.css"

const Works = () => {
  const [visible, setVisible] = useState(0)
  const [currentId, setCurrentId] = useState(0)
  const [currentw, setCurrentw] = useState(esp[0].url)
  const [windowSize, setWindowSize] = useState(window.innerWidth)
  

  useEffect(() => {
    setTimeout(() => {
      setVisible(1)      
    }, 1);   
  }, [])

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
    
    <div className="divContainer col-12 m-auto row align-items-center justify-content-start" style={{opacity: `${visible}`}}>
      <div className="col-12 col-md-6 worksContainer" >
        {esp.map ((el, i) => {
          return (
            <Work work={el} setCurrent={setcurrent} key={i} id={i} currentId={currentId}/>                    
            )
          })}  
      </div>
      { windowSize > 768 && <img className="col-6 workImg" src={currentw} alt="workImg"/>}
    </div>
    
  )
}

export default Works