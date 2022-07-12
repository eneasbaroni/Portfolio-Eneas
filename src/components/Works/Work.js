import { useContext, useEffect, useState } from "react"
import LanguageContext from "../../context/languageContext"


const Work = ({work, setCurrent, id, currentId}) => {
  const {language} = useContext (LanguageContext)
  const [lang, setLang] = useState()

  useEffect(() => {
    setLang(language)    
  }, [language])


  return (
    <>
      {currentId === id 
        ?
          <>
            <div className="work">
              <h1 className="activeWork mt-2 h2" id={id} onClick={(e) =>setCurrent(id)}>{work.title.toUpperCase()}</h1>
              <p className="activeWork workType">{work.type}</p>
              <p className="activeWork workDescription">{work.description}</p>
              {lang === "esp"
                ?<a className="activeWork workLink" href={`${work.web}`} target="_blank" rel="noreferrer">+ Visita el Proyecto</a>
                :<a className="activeWork workLink" href={`${work.web}`} target="_blank" rel="noreferrer">+ See the Project</a>
              }
            </div>
          </>
        :
          <>
            <div className="work">
              <h1 className="mt-2 h2" id={id} onClick={(e) =>setCurrent(id)}>{work.title.toUpperCase()}</h1>
              <p className="workType">{work.type}</p>
              <p className="workDescription">{work.description}</p>
              {lang === "esp"
                ?<a className="workLink" href={`${work.web}`} target="_blank" rel="noreferrer">+ Visita el Proyecto</a>
                :<a className="workLink" href={`${work.web}`} target="_blank" rel="noreferrer">+ See the Project</a>
              }              
            </div>
          </>
      }
    </>
    
  )
}

export default Work
