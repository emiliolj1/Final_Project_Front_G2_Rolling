import { Navigate, Routes, Route } from "react-router-dom"
import Login from '../layout/Login'
import Register from '../layout/Register'
import Home from "../pages/Home"
import ChangePassword from "../layout/ChangePassword"
import Galeria from "../layout/Galeria"
import Nosotros from "../pages/Sobrenosotros"




const PublicRoutes = ({setUser}) => {
  return (
    <>
        <Routes>
          <Route path='/' element={<Navigate to={'/home'}/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route exact path='/login' element={<Login setUser={setUser}/>}/>
          <Route exact path='/register' element={<Register/>}/>
          <Route path="/change" element={<ChangePassword/>}/>
          {/* <Route exact path='/contacto' element={<Navigate to={<Contacto/>}/>}/> */}
          <Route exact path='/aboutUs' element={<Navigate to={<Nosotros/>}/>}/>
          <Route exact path='/galeria' element={<Navigate to={<Galeria/>}/>}/>
          {/* <Route exact path='/productos' element={<Navigate to={<Productos/>}/>}/> */}
          <Route exact path='/alquiler' element={<Navigate to='/login'/>}/>

          <Route path='*' element={<Navigate to='/'/>}/>
        </Routes>
    </>
  )
}

export default PublicRoutes