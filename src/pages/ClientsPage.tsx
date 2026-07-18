import { Header } from "../components/Header"
import { ClientCard } from "../components/ClientCard"
import type { Client } from "../types";
import { ClientList } from "../components/ClientList";
import { NewClientForm } from "../components/NewClientForm";
import type { CreateClientData } from "../types";
interface ClientsPageProps{
clients: Client[];
onDeleteClient: (id: number) => void;
onCreateClient: (newC:CreateClientData) => void;

}
export function ClientsPage({clients, onDeleteClient,onCreateClient}:ClientsPageProps){
     return (
              <div className="flex justify-around w-97/100">
                <ClientList clients={clients} onDeleteClient={onDeleteClient}/>
                <NewClientForm clients={clients} onCreateClient={onCreateClient} />
              </div>
          )
}