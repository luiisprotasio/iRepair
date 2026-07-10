    import "../App.css";
    import type { ServiceOrder } from "../types/ServiceOrders";
    import { useState } from "react";
    interface OrderCardProps{
        order: ServiceOrder
        onToggleStatus: (id: number) => void;
        onDeleteOrder: (id: number) => void;
    }
    export function OrderCard({ order, onToggleStatus ,onDeleteOrder}: OrderCardProps){
        return (
           <div className={`m-3 flex-col justify-start rounded-3xl ${order.status ? "bg-[#301e1f]" : "bg-[#618158]"}/70 border ${order.status ? "border-[#653a3a]" : "border-[#25421d]"} w-56 h-75 p-2`}>
    <div className={`border ${order.status ? "border-[#653a3a]" : "border-[#25421d]"} rounded-lg text-white text-sm h-20/100 overflow-x-auto overflow-y-auto`}>
        <h2>Cliente:</h2>
        <h3 id="clientName">{order.client}</h3>
    </div>
    
    <div className={`border ${order.status ? "border-[#653a3a]" : "border-[#25421d]"} rounded-lg text-white text-sm h-20/100 overflow-x-auto overflow-y-auto`}>
        <h2>Modelo:</h2>
        <h3 id="clientName">{order.model}</h3>
    </div>

    <div className={`border ${order.status ? "border-[#653a3a]" : "border-[#25421d]"} rounded-lg text-white text-sm h-30/100 overflow-x-auto overflow-y-scroll`}>
        <h2>Descrição do problema:</h2>
        <h3 id="problemDesc">{order.problem}</h3>
    </div>

    <div className={`border ${order.status ? "border-[#653a3a]" : "border-[#25421d]"} rounded-lg text-white text-sm h-20/100 overflow-x-auto overflow-y-auto`}>
        <h2>Prazo de entrega:</h2>
        <time id="cardTime" dateTime={order.date}>
    {order.date.split("-").reverse().join("/")}
  </time>
    </div>

    <div className="flex text-white gap-1"> 
        <input className="text-white"type="checkbox" name="Concluido" id="checkCard" onChange={() => onToggleStatus(order.id)} checked={order.status} />Concluído
        <button onClick={() => onDeleteOrder(order.id)} className="ml-13 p-1 bg-red-500 border border-red-950 h-8 rounded-xl">Excluir</button>
    </div>
   
</div>
        )
        }
