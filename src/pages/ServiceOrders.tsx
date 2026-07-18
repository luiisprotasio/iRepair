import { Header } from "../components/Header"
import type { Client, CreateServiceOrderData } from "../types"
import { CardListManager } from "../components/CardListManager"
import { NewOrderForm } from "../components/NewOrderForm"
import type { ServiceOrder, ServiceOrderStatus } from "../types"
interface ServiceOrderPageProps{
    orders: ServiceOrder[];
    clients: Client[];
    onChangeStatus: (id: number, value: ServiceOrderStatus) => void;
    onDeleteOrder: (id: number) => void;
    onAddOrder: (newOS: CreateServiceOrderData) => void;

}
export function ServiceOrders({clients,orders,onChangeStatus,onDeleteOrder,onAddOrder}:ServiceOrderPageProps){
     return (
              <div className="flex justify-around w-97/100">
                <CardListManager orders={orders} clients={clients} onChangeStatus={onChangeStatus} onDeleteOrder={onDeleteOrder}/>
                <NewOrderForm clients={clients} onAddOrder={onAddOrder}/>
              </div>
          )
}