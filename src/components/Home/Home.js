import "./home.css"

const Home = () => {
  return (
    <div className="divContainer col-12 m-auto row align-items-center justify-content-center" id="home">      
      <div className="col-6 row">
        <h1 className='h0b col-12 eneas'>ENEAS</h1>
        <h1 className='h0 col-12 baroni'>BARONI</h1>
        <p className="subtitle">Web Developer</p>  
      </div>
      {/* <div className="col-6">
        <img className="homeBG col-12" src="/images/home_bg.png" alt="homeBG"/>
      </div> */}
    </div>
  )
}

export default Home