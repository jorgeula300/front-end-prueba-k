import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useRegisterAuth } from '../../UseProvider'

const Register = () => {
    const registerFetch = useRegisterAuth()
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [equalPassword, setEqualPassword] = useState(true)
    const onSubmit = (data) => {
        const url = "http://localhost:8080/users"
        // las contraseñas deben de ser iguales
        if (data.password === data.confirmPassword) {
            delete data.confirmPassword
            registerFetch(url, data)
            setEqualPassword(true)
        }
        else {
            setEqualPassword(false)
        }

    }
    console.log(errors)
    return (
        <div className='fixed top-[13%] left-0 w-full min-h-[100vh] z-50 bg-[#0003] backdrop-blur-[2px] flex justify-center items-start lg:pt-4 pt-1 px-2'>
            <form className="w-full max-w-[400px] bg-white rounded-xl flex flex-col p-5 items-center [&>div]:flex [&>div]:flex-col [&>div]:w-full  [&>div]:gap-2 [&>div>label]:text-black [&>div>input]:px-2 [&>div>input]:rounded-xl [&>div>input]:border [&>div>input]:border-black  [&>div>select]:px-2 [&>div>select]:rounded-xl [&>div>select]:border [&>div>select]:border-black [&>div>label]:text-lg [&>div>label]:font-semibold [&>button]:border [&>button]:px-2 [&>button]:py-1 [&>button]:rounded-xl [&>button]:bg-black [&>button]:text-white [&>button]:mt-2 [&>button]:cursor-pointer [&>div>label>span]:text-red-600 " onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="">Nombre <span>*</span></label>
                    {errors.firstName && <span className=' px-2 py-1 bg-red-600 shadow border rounded-lg text-white font-medium'>Campo requerido</span>}
                    <input type="text" {...register("firstName", { required: true })} />
                </div>
                <div>
                    <label htmlFor="">Apellido <span>*</span></label>
                    {errors.lastName && <span className=' px-2 py-1 bg-red-600 shadow border rounded-lg text-white font-medium'>Campo requerido</span>}
                    <input type="text" {...register("lastName", { required: true })} />
                </div>
                <div>
                    <label htmlFor="">Correo <span>*</span></label>
                    {errors.email && <span className=' px-2 py-1 bg-red-600 shadow border rounded-lg text-white font-medium'>Campo requerido</span>}
                    <input type="email" {...register("email", { required: true })} placeholder='anonimo@tucorreo.com' />
                </div>
                <div>
                    <label htmlFor="">Contraseña <span>*</span></label>
                    {errors.password && <span className=' px-2 py-1 bg-red-600 shadow border rounded-lg text-white font-medium'>Campo requerido</span>}
                    <input type="password" {...register("password", { required: true })} placeholder='********' />
                </div>
                <div>
                    <label htmlFor="">Confirmar Contraseña <span>*</span></label>
                    {!equalPassword && <span className=' px-2 py-1 bg-red-600 shadow border rounded-lg text-white font-medium'>Las contraseñas no coinciden</span>}
                    <input type="password" {...register("confirmPassword", { required: true })} placeholder='********' />
                </div>
                <div>
                    <label htmlFor="">Telefono <span>*</span></label>
                    {errors.phone && <span className=' px-2 py-1 bg-red-600 shadow border rounded-lg text-white font-medium'>Campo requerido</span>}
                    <input type="tel" {...register("phone", { required: true })} placeholder='+57' />
                </div>
                <div>
                    <label htmlFor="">Genero <span>*</span></label>
                    {errors.gender && <span className=' px-2 py-1 bg-red-600 shadow border rounded-lg text-white font-medium'>Campo requerido</span>}
                    <select name="Genero" id="" {...register("gender", { required: true })} >
                        <option value="">Genero</option>
                        <option value="male">Masculino</option>
                        <option value="female">Femenino</option>
                        <option value="other">Otro</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="">Direccion <span>*</span></label>
                    {errors.address && <span className=' px-2 py-1 bg-red-600 shadow border rounded-lg text-white font-medium'>Campo requerido</span>}
                    <input type="text" {...register("address", { required: true })} placeholder='Carrera 0 #0-0' />
                </div>

                <button className='hover:bg-[#0003] hover:text-black font-medium'>Registrar</button>
            </form>

        </div>
    )
}

export default Register