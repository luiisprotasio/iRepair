    import "../App.css";
    import { deleteServiceOrder } from "../services/serviceOrderService";
    import type { ServiceOrder, ServiceOrderStatus } from "../types/serviceOrders";
    interface OrderCardProps{
        order: ServiceOrder;
        name: string;
        onChangeStatus: (id: number, value: ServiceOrderStatus) => void;
        onDeleteOrder: (id: number) => void;
    }
    export const OrderCardDash=({ order, name, onChangeStatus ,onDeleteOrder}: OrderCardProps)=>{
        return (
           <div className={`m-3 flex-col justify-start rounded-3xl ${order.status=='open' ? "bg-[#6b3d40]" :order.status == 'in_progress'?"bg-amber-300/30": "bg-[#6f9265]/30"} border border-4 ${order.status =='open'? "border-[#360303]" :order.status == 'in_progress'?"border-yellow-500": "border-[#142e0d]"} w-56 h-75 p-2`}>
    <div className={`border ${order.status =='open'? "border-[#360303]" : order.status == 'in_progress'?"border-yellow-500":"border-[#142e0d]"} border-2 rounded-lg text-white text-sm h-18/100 overflow-x-auto overflow-y-auto`}>
        <h2>Cliente:</h2>
        <h3 id="orderName">{name}</h3>
    </div>
    
    <div className={`border ${order.status =='open'? "border-[#360303]" : order.status == 'in_progress'?"border-yellow-500":"border-[#142e0d]"} border-2 rounded-lg text-white text-sm h-18/100 overflow-x-auto overflow-y-auto`}>
        <h2>Modelo:</h2>
        <h3 id="deviceName">{order.device}</h3>
    </div>

    <div className={`border ${order.status =='open'? "border-[#360303]" : order.status == 'in_progress'?"border-yellow-500":"border-[#142e0d]"} border-2 rounded-lg text-white text-sm h-27/100 overflow-x-auto overflow-y-scroll`}>
        <h2>Descrição do problema:</h2>
        <h3 id="problemDesc">{order.issue}</h3>
    </div>

    <div className={`border ${order.status =='open'? "border-[#360303]" : order.status == 'in_progress'?"border-yellow-500":"border-[#142e0d]"} border-2 rounded-lg text-white text-sm h-18/100 overflow-x-auto overflow-y-auto`}>
        <h2>Criado em:</h2>
        <h4 id="cardTime">{order.created_at}
  </h4>
    </div>

    <div  className="flex-col text-white gap-1"> 
        <h4>Status: {order.status}</h4>
        <select onChange={(e)=>{
            const newStatus=e.target.value as ServiceOrderStatus
            onChangeStatus(order.id, newStatus)}}  className="bg-white text-black">
            <option value='open'>Em aberto</option>
            <option value='in_progress'>Em andamento</option>
            <option value='done'>Concluído</option>
        </select>
    </div>
  
</div>
        )
        }
