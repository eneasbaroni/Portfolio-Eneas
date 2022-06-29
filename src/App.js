import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Works from './components/Works/Works';
import { LanguageProvider } from './context/languageContext';

import "./grid.css"

function App() {  
  return (
    <LanguageProvider>
      <div className="App px-md-5 px-3">
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/works' element={<Works/>}/>

          </Routes>
          <Footer/>
        </BrowserRouter>
      </div>
    </LanguageProvider>
    
  );
}

export default App;
