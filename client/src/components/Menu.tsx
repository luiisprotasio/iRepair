import { Link } from "react-router"
import { useAuth } from "../contexts/AuthContext"
export const Menu=()=>{
    const {user}=useAuth()
    return (
         <details className="relative ">
            <summary>Perfil</summary>
            <div className=" p-1 absolute border-[#3a5d65] bg-[#3a5d65]/30 border-2 rounded-2xl">
                <menu className="flex flex-col items-center">
                    <h1 className="mb-2">Conectado como: <br/> {user?.email}</h1>
                     <Link className="rounded-xl border-2 pl-2 pr-2 hover:text-red-700" to="/logout">Sair</Link>
                </menu>
            </div>
        </details>
    )
}