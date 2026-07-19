    import "../App.css";
    import { deleteServiceOrder } from "../services/serviceOrderService";
    import type { ServiceOrder, ServiceOrderStatus } from "../types/serviceOrders";
    interface OrderCardProps{
        order: ServiceOrder;
        name: string;
        onChangeStatus: (id: number, value: ServiceOrderStatus) => void;
        onDeleteOrder: (id: number) => void;
    }
    export const OrderCardManager=({ order, name, onChangeStatus ,onDeleteOrder}: OrderCardProps)=>{
        return (
           <div className={`m-3 flex-col justify-start rounded-3xl bg-[#497b83]/10  border-4 border-[#2d5e66] w-56 h-75 p-2`}>
    <div className={`mb-1 border-[#2d5e66] border-2 rounded-lg text-white text-sm h-18/100 overflow-x-auto overflow-y-auto`}>
        <h2>Cliente:</h2>
        <h3 id="orderName">{name}</h3>
    </div>
    
    <div className={`mb-1 border-[#2d5e66] border-2 rounded-lg text-white text-sm h-18/100 overflow-x-auto overflow-y-auto`}>
        <h2>Modelo:</h2>
        <h3 id="deviceName">{order.device}</h3>
    </div>

    <div className={`mb-1 border-[#2d5e66] border-2 rounded-lg text-white text-sm h-18/100 overflow-x-auto overflow-y-scroll`}>
        <h2>Descrição do problema:</h2>
        <h3 id="problemDesc">{order.issue}</h3>
    </div>

    <div className={`mb-1 border-[#2d5e66] border-2 rounded-lg text-white text-sm h-18/100 overflow-x-auto overflow-y-auto`}>
        <h2>Criado em:</h2>
        <h4 id="cardTime">{order.created_at}
  </h4>
    </div>

    <div  className="flex text-white gap-1"> 
        <h4>Status:</h4>
        <h5 className={`${order.status=='done'? "text-green-500": order.status=='in_progress'? "text-amber-400" : "text-red-500"}`}>{order.status}</h5>
    </div>
    <div className=" flex justify-start text-white">
<button onClick={() => onDeleteOrder(order.id)} className="ml-1 p-1 text-center flex-col align-center text-black bg-white border border-red-950 h-7 rounded-xl hover:text-white hover:bg-red-500">Excluir</button>
     </div>
</div>
        )
        }
