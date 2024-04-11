import { Navigate, Routes, Route } from "react-router-dom";
import Admin from '../layout/admin';
import Galeria from '../pages/Galeria';
import Home from "../pages/Home";
import Nosotros from "../pages/Sobrenosotros";
import Contacto from "../pages/Contacto";
import Bookin from '../layout/Bookin'
import Canchas from '../pages/Canchas'
import Reservas from "../pages/Reservas";
import Error404 from "../pages/Error404";


const PrivateRoutes = ({user}) => {

  const userResult = user;

  return (
    <>
      <Routes>
        <Route path='/' element={<Navigate to={'/home'}/>}/>
        <Route path="/home" element={<Home user={user}/>}/>
        <Route exact path='/contacto' element={<Contacto/>}/>
        <Route exact path='/aboutUs' element={<Nosotros/>}/>
        <Route exact path='/galeria' element={<Galeria/>}/>
        <Route exact path='/alquiler' element={<Bookin user={user}/>}/>
        <Route exact path='/canchas' element={<Canchas/>}/>
        <Route exact path='/error' element ={<Error404/>}/>
        <Route exact path='/misReservas' element={<Reservas user={user}/>}/>
        {
          user && userResult.userInfo.Role !== 'client'
          ?
            <Route exact path='/admin' element={<Admin user={user}/>}/>
          :
            <Route exact path='/admin' element={<Navigate to='/'/>}/>
        }
        
        <Route path='*' element={<Navigate to='/'/>}/>
      </Routes>
    </>
  )
}

export default PrivateRoutes