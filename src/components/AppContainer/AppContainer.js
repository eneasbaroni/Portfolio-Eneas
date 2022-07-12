import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"

const AppContainer = (props) => {
  const [color, setColor] = useState("")

  let location = useLocation();    

  useEffect(() => {        
    if (location.pathname === "/works") {
      setColor("var(--main-color)")
    }else{
      setColor("var(--main-bg)")
    }    
  }, [location])



  return (
    <div className="App px-md-5 px-3" id="app" style={{ backgroundColor:`${color}`}}>
      {props.children}
    </div>
  )
}

export default AppContainer