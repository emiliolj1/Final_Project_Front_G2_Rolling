import { Navigate, Routes, Route } from "react-router-dom";
import Admin from '../layout/admin';
import Galeria from '../layout/admin';
import Home from "../pages/Home";



const PrivateRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navigate to={'/home'}/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route exact path='/contacto' element={<Navigate to={<Contacto/>}/>}/>
        <Route exact path='/nosotros' element={<Navigate to={<Nosotros/>}/>}/>
        <Route exact path='/galeria' element={<Navigate to={<Galeria/>}/>}/>
        <Route exact path='/productos' element={<Navigate to={<Productos/>}/>}/>
        <Route exact path='/alquiler' element={<Navigate to={<Alquiler/>}/>}/>
        <Route exact path='/admin' element={<Navigate to={<Admin/>}/>}/>

        <Route path='*' element={<Navigate to='/'/>}/>
      </Routes>
    </>
  )
}

export default PrivateRoutes