import { useForm } from "react-hook-form"
import { useModalAggEmployee, usePostData, useSetModalAggEmployee } from "../UseProvider"

const EmplooyeForm = () => {
    const modalEmployeeData = useModalAggEmployee()
    const setModalEmployeeData = useSetModalAggEmployee()
    const fetchPost = usePostData()
    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = (data) => {
        let url = "http://localhost:8080/employees"
        fetchPost(url, data)
        setModalEmployeeData(!modalEmployeeData)
    }
    return (
        <div className={` ${modalEmployeeData ? 'fixed top-[13%] left-0 w-full min-h-[100vh] z-50 bg-[#0003] backdrop-blur-[2px] flex justify-center items-center px-2' : 'hidden'}`}>

            <form className="flex flex-col space-y-5 bg-white p-5 rounded-lg " onSubmit={handleSubmit(onSubmit)}>

                <div className="flex flex-col">

                    <label className=" text-lg font-semibold" htmlFor="">Nombre completo</label>
                    {errors.name?.type === "required" && <p className=" bg-red-600 px-2 rounded-lg py-1 text-white font-semibold ">Este campo es requerido</p>}
                    {errors.name?.type === "minLength" && <p className=" bg-red-600 px-2 rounded-lg py-1 text-white font-semibold ">Debe tener al menos 3 caracteres</p>}
                    {errors.name?.type === "maxLength" && <p className=" bg-red-600 px-2 rounded-lg py-1 text-white font-semibold  ">Debe tener menos de 20 caracteres</p>}
                    <input className=" border rounded-md px-2" type="text" {...register("name", {
                        required: true,
                        minLength: 3,
                        maxLength: 20
                    })} />
                </div>
                <div className="flex flex-col">
                    <label className=" text-lg font-semibold" htmlFor="">Salario </label>
                    {errors.salary?.type === "required" && <p className=" bg-red-600 px-2 rounded-lg py-1 text-white font-semibold ">Este campo es requerido</p>}
                    <input className=" border rounded-md px-2" type="Number" {...register("salary", {
                        required: true,
                    })} />
                </div>
                <div className="flex flex-col">
                    <label className=" text-lg font-semibold" htmlFor="">Fecha de ingreso</label>
                    {errors.date?.type === "required" && <p className=" bg-red-600 px-2 rounded-lg py-1 text-white font-semibold ">Este campo es requerido</p>}
                    <input className=" border rounded-md px-2" type="date" {...register("date_of_admission", {
                        required: true,
                    })} />
                </div>

                <button className=" px-2 py-1 border shadow bg-black hover:bg-[#0003] hover:text-black font-medium text-white rounded-lg">Agregar empleado</button>

            </form>
        </div>
    )
}

export default EmplooyeForm