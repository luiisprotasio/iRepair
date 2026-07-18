import type { Client } from "../types"

interface ClientCardProps{
    client: Client;
    onDeleteClient: (id: number) => void;
}
export function ClientCard({client, onDeleteClient}:ClientCardProps){
    return(
        <div className={`m-3 flex-col justify-start rounded-3xl bg-[#497b83]/10  border-4 border-[#2d5e66] w-56 h-75 p-2`}>
            <div className={` mb-1 border-[#2d5e66] border-2 rounded-lg text-white text-sm h-18/100 overflow-x-auto overflow-y-auto`}>
                <h2>Nome:</h2>
                <h3 id="clientName">{client.name}</h3>
            </div>
             <div className={` mb-1 border-[#2d5e66] border-2 rounded-lg text-white text-sm h-18/100 overflow-x-auto overflow-y-auto`}>
                <h2>Telefone:</h2>
                <h3 id="clientPhone">{client.phone}</h3>
            </div>
             <div className={` mb-1 border-[#2d5e66] border-2 rounded-lg text-white text-sm h-18/100 overflow-x-auto overflow-y-auto`}>
                <h2>E-mail:</h2>
                <h3 id="clientName">{client.email}</h3>
            </div>
             <div className={` mb-1 border-[#2d5e66] border-2 rounded-lg text-white text-sm h-18/100 overflow-x-auto overflow-y-auto`}>
                <h2>Data de criação:</h2>
                <h3 id="clientName">{client.created_at}</h3>
            </div>
            <button onClick={() => onDeleteClient(client.id)} className="ml-1 p-1 text-center flex-col align-center text-black bg-white border border-red-950 h-7 rounded-xl hover:text-white hover:bg-red-500">Excluir</button>
        </div>

    )


}