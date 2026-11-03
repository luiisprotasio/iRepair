import type { Client, CreateServiceOrderData } from "../types"
import { CardListManager } from "../components/CardListManager"
import { NewOrderForm } from "../components/NewOrderForm"
import type { ServiceOrder } from "../types"
interface ServiceOrderPageProps{
    orders: ServiceOrder[];
    clients: Client[];
    onDeleteOrder: (id: number) => void;
    onAddOrder: (newOS: CreateServiceOrderData) => void;
    isLoading: boolean;
}
export const ServiceOrders=({clients,orders,onDeleteOrder,onAddOrder,isLoading}:ServiceOrderPageProps)=>{
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="text-xl text-white animate-bounce">
          Carregando ordens de serviço...
        </div>
      </div>
    );
  }
     return (
              <div className="flex justify-around w-97/100">
                <CardListManager orders={orders} clients={clients} onDeleteOrder={onDeleteOrder}/>
                <NewOrderForm clients={clients} onAddOrder={onAddOrder}/>
              </div>
          )
}