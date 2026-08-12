import "../App.css";
import type { ServiceOrder } from "../types/ServiceOrders";
import { OrderCard } from "./OrderCard";
interface CardListProps {
  orders: ServiceOrder[];
  onToggleStatus: (id: number) => void;
  onDeleteOrder: (id: number) => void;
}
export function CardList({ orders, onToggleStatus ,onDeleteOrder}: CardListProps) {return(
<div className=" ml-10 w-70/100 h-220">
    <h1 className="m-8 text-3xl text-white">Ordens de serviço</h1>
    <div className=" p-3 gap-3 m-3 flex flex-wrap justify-start rounded-xl bg-[#12282d]/70 border border-[#3a5d65] w-full min-h-100 max-h-200 overflow-y-auto">{orders.map((currentOrder) => (
        <OrderCard key={currentOrder.id} order={currentOrder} onToggleStatus={onToggleStatus} onDeleteOrder={onDeleteOrder}/>
    ))}
    </div>
</div>
)
}