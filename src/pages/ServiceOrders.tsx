import type { Client, CreateServiceOrderData } from "../types"
import { CardListManager } from "../components/CardListManager"
import { NewOrderForm } from "../components/NewOrderForm"
import type { ServiceOrder } from "../types"
interface ServiceOrderPageProps{
    orders: ServiceOrder[];
    clients: Client[];
    onDeleteOrder: (id: number) => void;
    onAddOrder: (newOS: CreateServiceOrderData) => void;

}
export const ServiceOrders=({clients,orders,onDeleteOrder,onAddOrder}:ServiceOrderPageProps)=>{
     return (
              <div className="flex justify-around w-97/100">
                <CardListManager orders={orders} clients={clients} onDeleteOrder={onDeleteOrder}/>
                <NewOrderForm clients={clients} onAddOrder={onAddOrder}/>
              </div>
          )
}