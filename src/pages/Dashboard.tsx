
import "../App.css";
import { Header } from "../components/Header.tsx";
import { CardList } from "../components/CardList.tsx";
import type { ServiceOrder, ServiceOrderStatus } from "../types/serviceOrders.ts";
import type { Client } from "../types/client.ts";

interface DashboardProps{
    orders: ServiceOrder[];
    clients: Client[];
    onChangeStatus: (id: number, value: ServiceOrderStatus) => void;
    onDeleteOrder: (id: number) => void;

}
export function Dashboard({orders,clients,onChangeStatus,onDeleteOrder}:DashboardProps){
    return (
              <CardList orders={orders} onChangeStatus={onChangeStatus} clients={clients} onDeleteOrder={onDeleteOrder} />
      )
}