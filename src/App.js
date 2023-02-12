import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import AppContainer from './components/AppContainer/AppContainer';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Works from './components/Works/Works';
import { LanguageProvider } from './context/languageContext';

import "./grid.css"

function App() {  
  return (
    <LanguageProvider>
      <BrowserRouter>
        <AppContainer>      
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/works' element={<Works/>}/>
            <Route path='/contact' element={<Contact/>}/>
          </Routes>
          <Footer/>
        </AppContainer>
      </BrowserRouter>      
    </LanguageProvider>
    
  );
}

export default App;
