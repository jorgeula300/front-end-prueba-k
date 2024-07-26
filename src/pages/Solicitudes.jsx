import { useParams } from 'react-router-dom'
import React, { useEffect } from 'react'
import { useData, useFetchData } from '../UseProvider'
import SolicitudesForm from '../components/SolicitudesForm'

const Solicitudes = () => {
    const { id } = useParams()
    const fetchData = useData()
    const fetch = useFetchData()
    const url = `http://localhost:8080/applications?employeeId=${id ? id : 0}`
    useEffect(
        () => {
            fetch(url)
        },
        []
    )

    console.log(fetchData)

    return (
        <div className=' fles'>
            <SolicitudesForm id={id} />
            <div className=' w-full grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-2 place-items-center mx-2'>
                {
                    fetchData?.map((item) => (
                        <div key={item.id} className='w-full border shadow-md p-2 rounded-lg space-y-1'>
                            <header className=' flex justify-center items-center w-full border-b-2 bg-slate-600 text-white text-3xl rounded-lg py-2'>
                                <i className='bx bx-book'></i>
                            </header>
                            <div className='flex flex-col'>
                                <div className=' flex justify-between items-center'>
                                    <h2 className=' text-lg font-bold'>codigo:</h2>
                                    <span className=' font-semibold'>{item.code}</span>
                                </div>
                                <div className=' w-full px-1 min-h-[50px] overflow-hidden flex flex-col justify-center text-wrap'>
                                    <h2 className=' text-lg font-bold text-center'>Descripcion</h2>
                                    <p className=' text-sm text-balance'>{item.description}</p>
                                </div>
                                <div>
                                    <h2 className='font-bold text-center text-lg font'>Resumen</h2>
                                    <p className=' text-sm'>{item.summary}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default Solicitudes