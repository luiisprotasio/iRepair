
import "../App.css";
import { CardListDash } from "../components/CardListDash.tsx";
import type { ServiceOrder, ServiceOrderStatus } from "../types/serviceOrders.ts";
import type { Client } from "../types/client.ts";

interface DashboardProps{
    orders: ServiceOrder[];
    clients: Client[];
    onChangeStatus: (id: number, value: ServiceOrderStatus) => void;

}
export const Dashboard=({orders,clients,onChangeStatus}:DashboardProps)=>{
    return (
              <CardListDash orders={orders} onChangeStatus={onChangeStatus} clients={clients} />
      )
}