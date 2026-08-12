    import "../App.css";
    export function Header() {
        return (
            <header className="flex justify-start items-center bg-linear-90 from-[#0a181b] via-[#133036] to-[#0a181b] border-b border-[#3a5d65]  p-4">
            <img src="/src/assets/logo.png" alt="Logo" className="w-5 h-8.55 mr-4 ml-2"/>
            <h1 className="text-2xl text-transparent bg-clip-text bg-linear-90 from-[#42C0DF] to-[#9dd5e2] font-bold">iRepair</h1>
            </header>
        )
        }