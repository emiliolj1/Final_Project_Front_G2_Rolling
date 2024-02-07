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
          <Route exact path='/aboutUs' element={<Nosotros/>}/>
          <Route exact path='/login' element={<Login setUser={setUser}/>}/>
          <Route exact path='/register' element={<Register/>}/>
          <Route path="/change" element={<ChangePassword/>}/>
          {/* <Route exact path='/contacto' element={<Contacto/>}/> */}
          <Route exact path='/galeria' element={<Galeria/>}/>
          {/* <Route exact path='/productos' element={<Productos/>}/> */}
          <Route exact path='/alquiler' element={<Navigate to='/login'/>}/>

          <Route path='*' element={<Navigate to='/'/>}/>
        </Routes>
    </>
  )
}

export default PublicRoutes