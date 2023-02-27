import { useContext, useEffect, useState } from "react"
import LanguageContext from "../../context/languageContext"

const Work = ({work, id}) => {
  const {language} = useContext (LanguageContext)
  const [lang, setLang] = useState()

  useEffect(() => {
    setLang(language)    
  }, [language])

  return (

    <div className="work" style={{backgroundImage: `url(${work.url})`}}>      
      <a href={`${work.web}`} className="workLink"  target="_blank" rel="noreferrer">
          <h1 className="h2" id={id}>{work.title.toUpperCase()}</h1>
      </a>
      <div className="workInfo">
        <p className="workType">{work.type}</p>
        <p className="workDescription">{work.description}</p>
        {lang === "esp"
          ?<a className="workLink" href={`${work.web}`} target="_blank" rel="noreferrer">+ Visita el Proyecto</a>
          :<a className="workLink" href={`${work.web}`} target="_blank" rel="noreferrer">+ See the Project</a>
        }              
      </div>
    </div>   
    
  )
}

export default Work
