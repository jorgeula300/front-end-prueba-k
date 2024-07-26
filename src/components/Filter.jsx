import React from 'react'
import { useForm } from 'react-hook-form'
import { useFilter } from '../UseProvider'

const Filter = () => {
    const filterData = useFilter()
    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = data => console.log(data)
    return (
        <div className={`w-full max-w-[300px] space-y-5 border shadow rounded-md  fixed  py-2 ${filterData ? ' block' : ' hidden '}`}>
            <h2 className=' text-center font-semibold text-xl'>Filtro de datos</h2>
            <form className='flex flex-col space-y-5 justify-center items-center'
                onSubmit={
                    handleSubmit(onSubmit)
                }
            >
                <div className=' flex flex-col gap-4 items-center'>
                    <label className='font-semibold' htmlFor="date_of_admission">Fecha de ingreso</label>
                    <input id='date_of_admission' type="date" className='border rounded-md px-2 py-1' {...register("date_of_admission")} />
                </div>

                <div>
                    <div className=' flex flex-col gap-4 items-center'>
                        <label className='font-semibold' htmlFor="salary">Salario</label>
                        <input id='salary' type="number" className='border rounded-md px-2 py-1' {...register("salary")} placeholder=' salary' />
                    </div>
                </div>
                <button className=' border px-3 py-1 rounded-lg bg-green-600 text-white font-bold'>Filtrar</button>
            </form>
        </div>
    )
}

export default Filter