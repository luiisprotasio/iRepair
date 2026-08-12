    import "../App.css";
    import { Link } from 'react-router';
    import { Menu } from "./Menu";
    export const Header=() =>{
        return (
            <header className="flex justify-between items-center bg-linear-90 from-[#0a181b] via-[#133036] to-[#0a181b] border-b border-[#3a5d65]  p-4">
            <div className="flex justify-start"><img src="/src/assets/logo.png" alt="Logo" className="w-5 h-8.55 mr-4 ml-2"/>
            <h1 className="text-2xl text-transparent bg-clip-text bg-linear-90 from-[#42C0DF] to-[#9dd5e2] font-bold">iRepair</h1>
            </div>
            <nav className="flex gap-7 text-white text-lg    m-2 ">
                <Menu />
                <Link className="hover:text-blue-300"to="/">Dashboard</Link>
                <Link className="hover:text-blue-300" to="/clients">Clientes</Link>
                <Link className="hover:text-blue-300" to="/service-orders">Ordens de Serviço</Link>
               
            </nav>
            </header>
        )
        }