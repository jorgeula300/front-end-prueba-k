import { useForm } from "react-hook-form"
import { usePostData } from "../UseProvider"

const SolicitudesForm = ({ id }) => {
    const fetchPost = usePostData()
    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = data => {
        const url = `http://localhost:8080/applications`
        // convertir userid a number
        let userid = parseInt(id)
        data.employeeId = userid
        console.log(data)
        fetchPost(url, data)
    }
    return (
        <div>
            <form className="w-full max-w-[400px] bg-white rounded-xl flex flex-col p-5 items-center [&>div]:flex [&>div]:flex-col [&>div]:w-full  [&>div]:gap-2 [&>div>label]:text-black [&>div>input]:p-2 [&>div>input]:rounded-xl [&>div>input]:border [&>div>input]:border-black  [&>div>label]:text-lg [&>div>label]:font-semibold [&>button]:border [&>button]:px-2 [&>button]:py-1 [&>button]:rounded-xl [&>button]:bg-black [&>button]:text-white [&>button]:mt-2 [&>button]:cursor-pointer" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor=""> Codigo</label>
                    {errors.code && <span>This field is required</span>}
                    <input type="text" {...register("code", { required: true })} />
                </div>
                <div>
                    <label htmlFor="">Descripcion</label>
                    {errors.description && <span>This field is required</span>}
                    <input type="text" {...register("description", { required: true })} />
                </div>
                <div>
                    <label htmlFor="">Resumen</label>
                    {errors.summary && <span>This field is required</span>}
                    <input type="text" {...register("summary", {
                        required: true,
                    })}></input>
                </div>
                <button>Agregar Solicitud</button>
            </form>
        </div>
    )
}

export default SolicitudesForm