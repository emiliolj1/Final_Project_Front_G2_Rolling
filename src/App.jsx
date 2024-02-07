import "bootstrap/dist/css/bootstrap.min.css";
import './components/styles/navbar.css';
import './components/styles/card.css';
import { useState, useEffect} from "react";
import { BrowserRouter } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import PrivateRoutes from './components/routers/PrivateRoutes'
import PublicRoutes from "./components/routers/PublicRoutes";
import NavBar from './components/layout/NavBar'
import Footer from './components/layout/Footer'





function App() {

  const [user, setUser] = useState({ token: null, userInfo: null, isLogged: false })
  const isUserLogged = localStorage.getItem('isUserLogged');

  const checkIfUserLogged = () => {
    if(isUserLogged){
      const token = localStorage.getItem('token');
      const decoded = jwtDecode(token);
      if(decoded){
        setUser({
          token: token,
          userInfo: decoded,
          isLogged: true
        })
      }
    } else {
      return
    }
  };
  

  useEffect(() => {
    checkIfUserLogged();
  }, []);
  
  return (
    <>
      {
        user.isLogged ?
        <BrowserRouter>
          <NavBar user={user} setUser={setUser}/>
            <PrivateRoutes user={user} setUser={setUser}/>
          <Footer/>
        </BrowserRouter>
        :
        <BrowserRouter>
          <NavBar user={user} setUser={setUser}/>
            <PublicRoutes setUser={setUser}/>
          <Footer/>
        </BrowserRouter>
      }
    </>
  )
}

export default App
