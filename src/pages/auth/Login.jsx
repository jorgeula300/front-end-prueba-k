
import { useForm } from "react-hook-form"
import { useAuthLogin, useIstLogin } from "../../UseProvider"

const Login = () => {
    const istLoged = useIstLogin()
    const login = useAuthLogin()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    let url = "http://localhost:8080/users/login"

    const onSubmit = (data) => {
        login(url, data)

    }
    // console.log(errors)
    return (
        <div className='fixed top-[13%] left-0 w-full min-h-[100vh] z-50 bg-[#0003] backdrop-blur-[2px] flex justify-center items-center px-2'>
            <form className="w-full max-w-[400px] bg-white rounded-xl flex flex-col p-5 items-center [&>div]:flex [&>div]:flex-col [&>div]:w-full  [&>div]:gap-2 [&>div>label]:text-black [&>div>input]:p-2 [&>div>input]:rounded-xl [&>div>input]:border [&>div>input]:border-black  [&>div>label]:text-lg [&>div>label]:font-semibold [&>button]:border [&>button]:px-2 [&>button]:py-1 [&>button]:rounded-xl [&>button]:bg-black [&>button]:text-white [&>button]:mt-2 [&>button]:cursor-pointer  " onSubmit={handleSubmit(onSubmit)}>

                <div>
                    <label htmlFor="">Correo</label>
                    {errors.email && <span className=" px-2 py-1 bg-red-600 shadow border rounded-lg text-white font-medium">This field is required</span>}
                    {errors.email && <span className={` px-2 py-1 bg-yellow-500 shadow border rounded-lg text-white font-medium ${errors.email.message ? 'block' : 'hidden'}`}>{errors.email.message}</span>}
                    <input type="email"  {...register("email", {
                        required: true
                        , pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "invalid email address"
                        },
                        maxLength: 50

                    })} placeholder="anonimo@tucorreo.com" />
                </div>

                <div>
                    <label htmlFor="">Contraseña</label>
                    {errors.password && <span className=" px-2 py-1 bg-red-600 shadow border rounded-lg text-white font-medium">This field is required</span>}
                    {errors.password && <span className={` px-2 py-1 bg-yellow-500 shadow border rounded-lg text-white font-medium ${errors.password.message ? 'block' : 'hidden'}`}>{errors.password.message}</span>}
                    <input type="password" {...register("password", {
                        required: true,
                        minLength: {
                            value: 8,
                            message: "min 8 characters"
                        }
                    })} placeholder="*******" />
                    {/* errors will return when field validation fails  */}
                </div>

                <button className="hover:bg-[#0003] hover:text-black font-medium">Ingresar</button>
            </form>
        </div>
    )
}

export default Login