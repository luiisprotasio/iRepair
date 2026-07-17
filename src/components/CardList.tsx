import "../App.css";
import type { ServiceOrder, ServiceOrderStatus } from "../types/serviceOrders";
import type { Client } from "../types";
import { OrderCard } from "./OrderCard"; 
interface CardListProps {
  orders: ServiceOrder[];
  clients: Client[];
  onChangeStatus: (id: number, value: ServiceOrderStatus) => void;
  onDeleteOrder: (id: number) => void;
}
export function CardList({ orders, clients, onChangeStatus ,onDeleteOrder}: CardListProps) {return(
<div className=" ml-10 w-95/100 h-220">
    <h1 className="m-8 text-3xl text-white text-center">Ordens de serviço</h1>
    <div className=" p-3 gap-3 m-3 flex flex-wrap justify-start rounded-xl bg-[#12282d]/70 border border-[#3a5d65] w-full min-h-100 max-h-200 overflow-y-auto">{orders.map((currentOrder) =>{
        const clienteDoCard = clients.find(c => c.id === currentOrder.client_id); 
        const name = clienteDoCard?.name || "Cliente não encontrado";
        return (
        <OrderCard key={currentOrder.id} order={currentOrder} name={name} onChangeStatus={onChangeStatus} onDeleteOrder={onDeleteOrder}/>
    )})}
    </div>
</div>
)
}