import { useForm } from "react-hook-form"
import { loginRequest } from "../api/Request.js"


//Nose si funciona correctamente
function LoginPage() {
    const { register, handleSubmit } = useForm()

    return (
        <div className="flex flex-row justify-center my-40">
            <div className="bg-zinc-800 max-w-md rounded-md p-6">
            <h1 className="text-white text-center font-medium ">LOGIN</h1>

                <form onSubmit={handleSubmit((values) => {loginRequest(values)})}>
                    <input type="email"
                        {...register("email", { required: true })}
                        className="w-full bg-zinc-700 text-white px-5 py-2 my-3 rounded-md"
                        placeholder="Email" />

                    <input type="password"
                        {...register("password", { required: true })}
                        className="w-full bg-zinc-700 text-white px-5 py-2 my-3 rounded-md"
                        placeholder="Password" />

                    <div className="flex justify-center mt-3">
                        <button type="submit" className="flex-auto bg-zinc-900 p-2 rounded-md text-white hover:bg-slate-800">
                            Iniciar Sesión
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginPage
