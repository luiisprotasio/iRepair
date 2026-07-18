import { Header } from "../components/Header"
import { ClientCard } from "../components/ClientCard"
import type { Client } from "../types";
import { ClientList } from "../components/ClientList";
interface ClientsPageProps{
clients: Client[];
onDeleteClient: (id: number) => void;

}
export function ClientsPage({clients, onDeleteClient}:ClientsPageProps){
     return (
              
                <ClientList clients={clients} onDeleteClient={onDeleteClient}/>
             
          )
}