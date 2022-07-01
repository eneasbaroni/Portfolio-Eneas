import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"

const AppContainer = (props) => {
  const [color, setColor] = useState("")

  let location = useLocation();    

  useEffect(() => {        
    if (location.pathname === "/works") {
      setColor("#f8f8f8")
    }else{
      setColor("#191919")
    }    
  }, [location])



  return (
    <div className="App px-md-5 px-3" style={{ backgroundColor:`${color}`}}>
      {props.children}
    </div>
  )
}

export default AppContainer