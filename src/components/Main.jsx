import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useData, useFetchData, useModalAggEmployee, useSearchData } from '../UseProvider'
import Filter from './Filter'

const Main = () => {
    const navigation = useNavigate()
    const fetch = useFetchData()
    const data = useData()
    const modal = useModalAggEmployee()
    const searchdata = useSearchData()
    let search = searchdata;
    let filterData = '';
    useEffect(() => {
        const url = `http://localhost:8080/employees?name=${search}&date_of_admission=${filterData}`
        fetch(url)
    }, [search, modal])
    console.log(data)

    const handleSolicitudes = (id) => {
        navigation(`/solicitudes/${id}`)
    }
    return (
        <section className=' flex justify-center '>
            <Filter />
            <div className=' w-full px-2 grid grid-cols-4 gap-3'>
                {
                    data?.map((item) => (
                        <div key={item.id} className='border shadow-md p-2 rounded-lg space-y-1'>
                            <header className=' flex justify-center items-center w-full border-b-2'>
                                <i className='bx bxs-user-circle text-6xl'></i>
                            </header>
                            <h2 className=' text-center font-semibold'>{item.name}</h2>
                            <div>
                                <h2 className='font-semibold text-center'>salary</h2>
                                <h2 className=' text-center'>{item.salary}</h2>
                            </div>
                            <div>
                                <h2 className='font-semibold text-center'>Fecha de ingreso</h2>
                                <h2 className='text-center'>{item.date_of_admission}</h2>
                            </div>

                            <div className=' flex justify-center items-center'>
                                <button onClick={() => handleSolicitudes(item.id)} className=' border px-3 py-1 rounded-lg bg-green-600 text-white font-bold'>Solicitudes</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Main