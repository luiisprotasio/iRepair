import "../App.css";
import type { ServiceOrder } from "../types/serviceOrders";
import type { Client } from "../types";
import { OrderCardManager } from "./OrderCardManager"; 
interface CardListProps {
  orders: ServiceOrder[];
  clients: Client[];
  onDeleteOrder: (id: number) => void;
}
export const CardListManager=({ orders,onDeleteOrder}: CardListProps) =>{return(
<div className=" ml-10 w-95/100 h-220">
    <h1 className="m-8 text-3xl text-white text-center">Ordens de serviço</h1>
    <div className=" p-3 gap-3 m-3 flex flex-wrap justify-start rounded-xl bg-[#12282d]/70 border border-[#3a5d65] w-full min-h-100 max-h-200 overflow-y-auto">{orders.map((currentOrder) =>{
        return (
        <OrderCardManager key={currentOrder.id} order={currentOrder} name={currentOrder.client.name} onDeleteOrder={onDeleteOrder}/>
    )})}
    </div>
</div>
)
}