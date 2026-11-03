import "../App.css";
import type { ServiceOrder, ServiceOrderStatus } from "../types/serviceOrders";
import type { Client } from "../types";
import { OrderCardDash } from "./OrderCardDash"; 
interface CardListProps {
  orders: ServiceOrder[];
  clients: Client[];
  onChangeStatus: (id: number, value: ServiceOrderStatus) => void;
}
export const CardListDash=({ orders, onChangeStatus}: CardListProps) =>{return(
<div className=" ml-10 w-95/100 h-220">
    <h1 className="m-8 text-3xl text-white text-center">Ordens de serviço</h1>
    <div className=" p-3 gap-3 m-3 flex flex-wrap justify-start rounded-xl bg-[#12282d]/70 border border-[#3a5d65] w-full min-h-100 max-h-200 overflow-y-auto">{orders.map((currentOrder) =>{
        return (
        <OrderCardDash key={currentOrder.id} order={currentOrder} name={currentOrder.client.name} onChangeStatus={onChangeStatus}/>
    )})}
    </div>
</div>
)
}