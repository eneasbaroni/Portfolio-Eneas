

const Work = ({work, setCurrent, id, currentId}) => {


  return (
    <>
      {currentId === id 
        ?
          <>
            <div className="work">
              <h1 className="activeWork mt-2 h1" id={id} onClick={(e) =>setCurrent(id)}>{work.title.toUpperCase()}</h1>
              <p className="activeWork workType">{work.type}</p>
              <p className="activeWork workDescription">{work.description}</p>              
              <a className="activeWork workLink" href={`${work.web}`} target="_blank" rel="noreferrer">Visita el Proyecto →</a>
            </div>
          </>
        :
          <>
            <div className="work">
              <h1 className="mt-2 h1" id={id} onClick={(e) =>setCurrent(id)}>{work.title.toUpperCase()}</h1>
              <p className="workType">{work.type}</p>
              <p className="workDescription">{work.description}</p>
              <a className="workLink" href={`${work.web}`} target="_blank" rel="noreferrer">Visita el Proyecto →</a>              
            </div>
          </>
      }
    </>
    
  )
}

export default Work