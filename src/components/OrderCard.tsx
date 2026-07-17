    import "../App.css";
    import type { ServiceOrder, ServiceOrderStatus } from "../types/serviceOrders";
    interface OrderCardProps{
        order: ServiceOrder;
        name: string;
        onChangeStatus: (id: number, value: ServiceOrderStatus) => void;
        onDeleteOrder: (id: number) => void;
    }
    export function OrderCard({ order, name, onChangeStatus ,onDeleteOrder}: OrderCardProps){
        return (
           <div className={`m-3 flex-col justify-start rounded-3xl ${order.status!='done' ? "bg-[#553537]" : "bg-[#6f9265]"}/70 border ${order.status !='done'? "border-[#653a3a]" : "border-[#25421d]"} w-56 h-75 p-2`}>
    <div className={`border ${order.status !='done'? "border-[#653a3a]" : "border-[#25421d]"} rounded-lg text-white text-sm h-18/100 overflow-x-auto overflow-y-auto`}>
        <h2>Cliente:</h2>
        <h3 id="clientName">{name}</h3>
    </div>
    
    <div className={`border ${order.status !='done'? "border-[#653a3a]" : "border-[#25421d]"} rounded-lg text-white text-sm h-18/100 overflow-x-auto overflow-y-auto`}>
        <h2>Modelo:</h2>
        <h3 id="deviceName">{order.device}</h3>
    </div>

    <div className={`border ${order.status !='done'? "border-[#653a3a]" : "border-[#25421d]"} rounded-lg text-white text-sm h-27/100 overflow-x-auto overflow-y-scroll`}>
        <h2>Descrição do problema:</h2>
        <h3 id="problemDesc">{order.issue}</h3>
    </div>

    <div className={`border ${order.status !='done'? "border-[#653a3a]" : "border-[#25421d]"} rounded-lg text-white text-sm h-18/100 overflow-x-auto overflow-y-auto`}>
        <h2>Criado em:</h2>
        <h4 id="cardTime">{order.created_at}
  </h4>
    </div>

    <div  className="flex text-white gap-1"> 
        <h4>Status:</h4>
        <select onChange={(e)=>{
            const newStatus=e.target.value as ServiceOrderStatus
            onChangeStatus(order.id, newStatus)}}  className="bg-white text-black">
            <option value='open'>Em aberto</option>
            <option value='in_progress'>Em andamento</option>
            <option value='done'>Concluído</option>
        </select>
    </div>
    <div className=" flex justify-start text-white">
<button onClick={() => onDeleteOrder(order.id)} className="ml-1 p-1 bg-red-500 border border-red-950 h-7 rounded-xl">Excluir</button>
     </div>
</div>
        )
        }
