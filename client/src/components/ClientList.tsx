import type { Client } from "../types"
import { ClientCard } from "./ClientCard";

interface ClientListProps{
    clients: Client[];
    onDeleteClient: (id: number) => void;
}
export const ClientList=({clients,onDeleteClient}:ClientListProps)=>{
    return(
       <div className=" ml-10 w-95/100 h-220">
           <h1 className="m-8 text-3xl text-white text-center">Clientes</h1>
           <div className=" p-3 gap-3 m-3 flex flex-wrap justify-start rounded-xl bg-[#12282d]/70 border border-[#3a5d65] w-full min-h-100 max-h-200 overflow-y-auto">{clients.map((currentClient) =>{
               return (
               <ClientCard key={currentClient.id} client={currentClient} onDeleteClient={onDeleteClient}/>
           )})} 
           </div>
       </div>
    )
}