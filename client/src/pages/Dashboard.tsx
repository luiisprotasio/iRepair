
import "../App.css";
import { CardListDash } from "../components/CardListDash.tsx";
import type { ServiceOrder, ServiceOrderStatus } from "../types/serviceOrders.ts";
import type { Client } from "../types/client.ts";

interface DashboardProps{
    orders: ServiceOrder[];
    clients: Client[];
    onChangeStatus: (id: number, value: ServiceOrderStatus) => void;
    isLoading: boolean;
}
export const Dashboard=({orders,clients,onChangeStatus,isLoading}:DashboardProps)=>{
    if (isLoading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="text-xl text-white animate-bounce">
          Carregando dashboard...
        </div>
      </div>
    );}
    return (
              <CardListDash orders={orders} onChangeStatus={onChangeStatus} clients={clients} />
      )
}