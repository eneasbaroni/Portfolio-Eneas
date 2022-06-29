

const Work = ({work, setCurrent, id, currentId}) => {


  return (
    <>
      {currentId === id 
        ?
          <>
            <div>
              <h1 className="activeWork h1 mt-2 workTitle" id={id} onClick={(e) =>setCurrent(id)}>{work.title}</h1>
              <p className="activeWork workType">{work.type}</p>
              <p className="activeWork workDescription">{work.description}</p>
              <p className="activeWork workLink">Visita el Proyecto →</p>
            </div>
          </>
        :
          <>
            <div >
              <h1 className="h1 mt-2 workTitle" id={id} onClick={(e) =>setCurrent(id)}>{work.title}</h1>
              <p className="workType">{work.type}</p>
              <p className="workDescription">{work.description}</p>
              <p className="workLink">Visita el Proyecto →</p>
            </div>
          </>
      }
    </>
    
  )
}

export default Work