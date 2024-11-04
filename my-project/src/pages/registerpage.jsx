import { useForm } from "react-hook-form"
import { registerRequest } from "../api/registerRequest.js"

function Registerpage() {

    const { register, handleSubmit } = useForm()

    return (   
            <div className=" flex flex-row justify-center my-40">
                <div className="bg-zinc-800 max-w-md rounded-md p-6">

                    <h1 className="text-white text-center">FORMULARIO</h1>

                    <form onSubmit= {handleSubmit((values) => {registerRequest(values)} )}>

                        <input type="text"
                        {...register("username", { required: true })}
                        className="w-full bg-zinc-700 text-white px-5 py-2 my-3 rounded-md"
                        placeholder="Username" />

                        <input type="email"
                        {...register("email", { required: true })}
                        className="w-full bg-zinc-700 text-white px-5 py-2 my-3 rounded-md"
                        placeholder="Email" />

                        <input type="password"
                        {...register("password", { required: true })}
                        className="w-full bg-zinc-700 text-white px-5 py-2 my-3 rounded-md"
                        placeholder="Password" />

                        <div className="flex justify-center mt-3">
                            <button type="submit" className="flex-auto bg-zinc-900 p-2 rounded-md text-white  hover:bg-slate-800">Enviar</button>
                        </div>
                        
                    </form>
                </div>
            </div>
    )
}

export default Registerpage