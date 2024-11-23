
import './App.css';
import Header from './Components/Header';
import Aboutme from './Components/Aboutme';
import Skill from './Components/Skill';
import Services from './Components/Services';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Portfilo from './Components/Portfilo';
import Review from './Components/Review';
import Scrolleablefun from './Components/Scrollablefun';

function App() {
  return (
    <div className="App">

     <Header/>
     <Hero/>
     <Aboutme/>

     <Skill/>
     <Services/>
     <Portfilo/>
     <Review/>
     <Contact/>
     <Footer/>
    <Scrolleablefun/>
    </div>
  );
}

export default App;
