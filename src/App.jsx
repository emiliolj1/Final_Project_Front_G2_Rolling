import "bootstrap/dist/css/bootstrap.min.css";
import './components/styles/navbar.css';
import './components/styles/card.css';
import NavBar from './components/layout/NavBar';
import Footer from "./components/layout/Footer";
import Error404 from "./components/pages/Error404";
import Sobrenosotros from "./components/pages/Sobrenosotros";
import Home from "./components/pages/Home";


function App() {
  
  return (
    <>
      <NavBar/>
      <Sobrenosotros/>
      <Footer/>
    </>
  )
}

export default App
