import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import About from './components/About';
import Works from './components/Works';
import Contact from './components/Contact';
import FooterSticky from './components/FooterSticky';
function App() {
  return (
    <Router>
      
      <Header/>
      <Routes>
      <Route exact path = '/' 
        element = {  <><Home/>  <FooterSticky/> </>   }/>
      <Route exact path = '/home' 
        element = {  <><Home/>  <FooterSticky/> </>   }/>
      <Route exact path = '/about' 
        element = {<About/>}/>
      <Route exact path = '/works' 
        element = {<Works/>}/>
      <Route exact path = '/contact' 
        element = {  <><Contact/>  <FooterSticky/> </>   }/>
      </Routes>
      
    </Router>
  );
}

export default App;
