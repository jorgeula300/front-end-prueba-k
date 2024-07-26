import { Route } from 'react-router-dom'
import { Routes } from "react-router-dom"
import Header from "./components/Header"
import HomeUser from './pages/HomeUser'
import Solicitudes from './pages/Solicitudes'
import ProtecteRoute from './pages/ProtecteRoute'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import EmplooyeForm from './components/EmplooyeForm'



function App() {


  return (
    <div className=" w-full ">
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<ProtecteRoute />}>
          <Route path="/" element={<HomeUser />} />
          <Route path="/solicitudes/:id" element={<Solicitudes />} />
          <Route path="/agg/emplooye" element={<EmplooyeForm />} />
        </Route>
        <Route path="*" element={<h2> Esta pagina no existe </h2>} />
      </Routes>
    </div>
  )
}

export default App
