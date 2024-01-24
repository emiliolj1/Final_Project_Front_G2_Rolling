import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom"
import Login from '../layout/Login'
import Register from '../layout/Register'

const PublicRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to={'/home'}/>}/>
          <Route exact path='/login' element={<Navigate to={<Login/>}/>}/>
          <Route exact path='/register' element={<Navigate to={<Register/>}/>}/>
          <Route exact path='/contacto' element={<Navigate to={<Contacto/>}/>}/>
          <Route exact path='/nosotros' element={<Navigate to={<Nosotros/>}/>}/>
          <Route exact path='/galeria' element={<Navigate to={<Galeria/>}/>}/>
          <Route path='/alquiler' element={<Navigate to='/login'/>} />

          <Route path='*' element={<Navigate to='/'/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default PublicRoutes