import { Navigate, Routes, Route } from "react-router-dom"
import Login from '../layout/Login'
import Register from '../layout/Register'
import Home from "../pages/Home"

const PublicRoutes = ({setUser}) => {
  return (
    <>
        <Routes>
          <Route path='/' element={<Navigate to={'/home'}/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route exact path='/login' element={<Login setUser={setUser}/>}/>
          <Route exact path='/register' element={<Register/>}/>
          {/* <Route exact path='/contacto' element={<Navigate to={<Contacto/>}/>}/>
          <Route exact path='/nosotros' element={<Navigate to={<Nosotros/>}/>}/>
          <Route exact path='/galeria' element={<Navigate to={<Galeria/>}/>}/>
          <Route exact path='/productos' element={<Navigate to={<Prodcutos/>}/>}/>
          <Route exact path='/alquiler' element={<Navigate to='/login'/>}/> */}

          <Route path='*' element={<Navigate to='/'/>}/>
        </Routes>
    </>
  )
}

export default PublicRoutes