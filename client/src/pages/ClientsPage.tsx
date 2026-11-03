import type { Client } from "../types";
import { ClientList } from "../components/ClientList";
import { NewClientForm } from "../components/NewClientForm";
import type { CreateClientData } from "../types";
interface ClientsPageProps{
clients: Client[];
onDeleteClient: (id: number) => void;
onCreateClient: (newC:CreateClientData) => void;
isLoading: boolean;
}
export const ClientsPage=({clients, onDeleteClient,onCreateClient,isLoading}:ClientsPageProps)=>{if (isLoading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="text-xl text-white animate-bounce">
          Carregando clientes...
        </div>
      </div>
    );}
     return (
              <div className="flex justify-around w-97/100">
                <ClientList clients={clients} onDeleteClient={onDeleteClient}/>
                <NewClientForm clients={clients} onCreateClient={onCreateClient} />
              </div>
          )
}