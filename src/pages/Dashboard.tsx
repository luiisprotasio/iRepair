
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
        <div className="bg-radial from-[#133036] to-[#0a181b] min-h-screen">
          <Header />
          <div className="flex justify-start">
              <CardList orders={orders} onChangeStatus={onChangeStatus} clients={clients} onDeleteOrder={onDeleteOrder} />
          </div>
        </div>
      )
}