import { Navigate, Routes, Route } from "react-router-dom"
import Login from '../layout/Login'
import Register from '../layout/Register'

const PrivateRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navigate to={'/home'}/>}/>
        <Route exact path='/login' element={<Navigate to={<Login/>}/>}/>
        <Route exact path='/register' element={<Navigate to={<Register/>}/>}/>
        <Route exact path='/contacto' element={<Navigate to={<Contacto/>}/>}/>
        <Route exact path='/nosotros' element={<Navigate to={<Nosotros/>}/>}/>
        <Route exact path='/galeria' element={<Navigate to={<Galeria/>}/>}/>
        <Route exact path='/productos' element={<Navigate to={<Productos/>}/>}/>
        <Route exact path='/alquiler' element={<Navigate to={<Alquiler/>}/>}/>
        <Route exact path='/miCuenta' element={<Navigate to={<MiCuenta/>}/>}/>
        <Route exact path='/admin' element={<Navigate to={<Admin/>}/>}/>

        <Route path='*' element={<Navigate to='/'/>}/>
      </Routes>
    </>
  )
}

export default PrivateRoutes