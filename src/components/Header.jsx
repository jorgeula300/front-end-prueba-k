import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useIstLogin, useLogout, useModalAggEmployee, useSetModalAggEmployee } from '../UseProvider'


const Header = () => {
    const istLogin = useIstLogin()
    const logout = useLogout()
    const navigate = useNavigate()
    const modalEmployeeData = useModalAggEmployee()
    const setModalAggEmployee = useSetModalAggEmployee()

    const [modal, setModal] = useState(false)
    const [user, setUser] = useState({})




    useEffect(() => {
        let userToken = localStorage.getItem('userPageUsers')
        userToken = JSON.parse(userToken)
        setUser(userToken)
    }, [istLogin])

    console.log(user)

    const handleRegister = () => {
        navigate('/register')

    }

    const handelLogout = () => {
        logout()
        navigate('/login')
        setModal(!modal)
    }

    const handleModalClose = () => {
        setModal(!modal)
    }

    const handleModalEmplooye = () => {
        setModalAggEmployee(!modalEmployeeData)
        setModal(!modal)

    }
    return (
        <header className=' w-full flex justify-between items-center  px-2 py-5 relative '>
            <Link to={'/'} className='flex justify-center items-center space-x-3'>
                <i className='bx bx-library text-3xl'></i>
                <h2 className=' text-xl font-bold'>Users</h2>
            </Link>
            <div className={`${user ? "hidden" : "flex"}`}>
                <button className=' border px-2 py-1 rounded-xl shadow-md
                bg-slate-300 hover:bg-slate-400 transition-all duration-300 font-semibold' onClick={
                        handleRegister
                    }>Register</button>
            </div>
            <div onClick={handleModalClose} className={`${user ? "flex justify-center items-center border rounded-md px-2 py-1 shadow space-x-2 cursor-pointer" : "hidden"}`}>
                <i className='bx bxs-user-circle text-4xl' ></i>
                <span className=' font-bold'>{user?.firstName}</span>
            </div>

            <div className={` ${modal ? 'w-[200px]  absolute border bg-white shadow-sm z-50 right-1 top-[100%] rounded-b-xl py-2 ' : 'hidden'}`}>
                <div className='flex flex-col justify-center items-center space-y-3 pt-3'>
                    <i className='bx bxs-user-circle text-4xl' ></i>
                    <span className=' font-bold'>{user?.firstName}</span>
                    <span className=' font-bold'>{user?.role}</span>
                    {user?.role === "admin" && <button onClick={handleModalEmplooye} className=' flex justify-center items-center border shadow px-2 py-1 rounded-lg space-x-1'>
                        <h2>Agregar empleado</h2>
                        <i className='bx bx-user-plus text-2xl'></i>
                    </button>}
                    <button onClick={handelLogout} className=' border px-2 py-1 rounded-xl shadow-md'>Logout</button>
                </div>

            </div>
        </header >
    )
}

export default Header