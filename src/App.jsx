import "bootstrap/dist/css/bootstrap.min.css";
import './components/styles/navbar.css';
import './components/styles/card.css';
import NavBar from './components/layout/NavBar';
import Footer from "./components/layout/Footer";
import Home from './components/pages/Home'

function App() {
  
  return (
    <>
      <NavBar/>
        <Home/>
      <Footer/>
    </>
  )
}

export default App
