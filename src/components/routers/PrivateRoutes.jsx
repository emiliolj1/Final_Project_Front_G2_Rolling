import { Navigate, Routes, Route } from "react-router-dom";
import Admin from '../layout/admin';
import Galeria from '../pages/Galeria';
import Home from "../pages/Home";
import Nosotros from "../pages/Sobrenosotros";
import Contacto from "../pages/Contacto";




const PrivateRoutes = ({user}) => {

  const userResult = user;

  return (
    <>
      <Routes>
        <Route path='/' element={<Navigate to={'/home'}/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route exact path='/contacto' element={<Contacto/>}/>
        <Route exact path='/aboutUs' element={<Nosotros/>}/>
        <Route exact path='/galeria' element={<Galeria/>}/>
        {/* <Route exact path='/productos' element={<Productos/>}/> */}
        {/* <Route exact path='/alquiler' element={<Alquiler/>}/> */}
        {
          user && userResult.userInfo.role === 'admin'
          ?
          <Route exact path='/admin' element={<Admin/>}/>
          :
          ''
        }

        <Route path='*' element={<Navigate to='/'/>}/>
      </Routes>
    </>
  )
}

export default PrivateRoutes