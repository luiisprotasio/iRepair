import { Link } from "react-router";

interface LoginFormProps {
onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
onEmailChange: (email: string) => void;
onPasswordChange: (password: string) => void;
email: string;
password: string;
error: string|null;
loading: boolean;
}
export const LoginForm = ({ onSubmit, onEmailChange, onPasswordChange, email, password, error, loading }: LoginFormProps) => {
    return (
        <div className="flex-col justify-center align-center border-2 border-[#3a5d65] rounded-3xl  w-100 h-100">
            <div className="p-3 flex justify-start rounded-4xl w-38"><img src="/src/assets/logo.png" alt="Logo" className="w-5 h-8.55 mr-4 ml-2"/>
            <h1 className="text-2xl text-transparent bg-clip-text bg-linear-90 from-[#42C0DF] to-[#9dd5e2] font-bold">iRepair</h1>
            </div>
             <h1 className="text-3xl text-transparent bg-clip-text bg-linear-90 from-[#42C0DF] to-[#9dd5e2] font-bold text-center">Login</h1>
           
            <form onSubmit={onSubmit} className='flex flex-col items-center justify-center'>
            <input className="m-4 p-2 border border-[#3a5d65] bg-[#19373e] rounded-md text-white w-7/10" type="email" value={email} onChange={e => onEmailChange(e.target.value)} placeholder="Email" required/>
            <input className="m-4 p-2 border border-[#3a5d65] bg-[#19373e] rounded-md text-white w-7/10" type="password" value={password} onChange={e => onPasswordChange(e.target.value)} placeholder="Password" required/>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <div className="flex justify-center">
                <button className="m-4 p-2 bg-[#19373e] border border-[#3a5d65] text-white rounded-md hover:bg-white hover:text-black" type="submit" disabled={loading}>
                {loading ? 'Entrando...' : 'Entrar'}
                </button>
            </div> 
            <Link className="text-[#9dd5e2] hover:text-white" to="/register">
                Não tem uma conta? Cadastre-se
            </Link>
            </form>
           
        </div>
    )
}