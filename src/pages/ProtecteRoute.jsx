
import { Navigate, Outlet } from "react-router-dom"

const ProtecteRoute = () => {



    if (localStorage.getItem('tokenUser')) {
        return <Outlet />
    } else {
        return <Navigate to='/login' />
    }
}

export default ProtecteRoute