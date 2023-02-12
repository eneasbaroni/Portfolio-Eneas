import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"

const AppContainer = (props) => {
  const [color, setColor] = useState("")

  let location = useLocation();    

  useEffect(() => {        
    if (location.pathname === "/works" || location.pathname === "/" ) {
      setColor("var(--main-bg)")
    }else{
      setColor("#090083")
    }    
  }, [location]) 



  return (
    <div className="App px-md-5 px-3" id="app" style={{ backgroundColor:`${color}`}}>
      {props.children}
    </div>
  )
}

export default AppContainer
