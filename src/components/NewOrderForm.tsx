import "../App.css";
import { useEffect, useState } from "react";
import type { ServiceOrder } from "../types/serviceOrders";
import type { Client } from "../types";
import { getAllClients } from "../services/clientService";
import type { CreateServiceOrderData } from "../types/serviceOrders";
interface NewOrderFormProps {
  clients: Client[];
  onAddOrder: (newSO: CreateServiceOrderData) => void;
}
export const NewOrderForm=({ onAddOrder, clients }: NewOrderFormProps) =>{
  const [cid, setCid]=useState(0);
  const [model, setModel]=useState("");
  const [problem,setProblem]=useState("");
  const [date, setDate]=useState("");
  function createOrder(e: React.MouseEvent){
    e.preventDefault();
    if(cid===0){
      alert("Por favor, selecione um cliente!");
    return;
    }
    const newSO: CreateServiceOrderData = {
      clientId:cid,
      device:model,
      issue:problem,
      status:'open'
    }
    onAddOrder(newSO);
    console.log("onaddorder ok");
    setModel("");
    setProblem("");
    setCid(0);
  }
  return(
<div className=" ml-10 w-20/100">
    <h1 className="m-8 text-3xl text-white">Nova Ordem</h1>
    <div className="m-3 flex-col items-center justify-center rounded-xl bg-     [#12282d]/70 border border-[#3a5d65] w-full h-100 overflow-x-auto overflow-y-hidden">
      <h2 className="ml-10 text-lg text-white mt-5">Cliente</h2>
        <select value={cid}onChange={(e) => setCid(Number(e.target.value))} className="rounded-lg bg-[#19373e] w-80/100 h-10/100 ml-8 mb-3 border border-[#3a5d65] text-white p-2">
        <option value="0" >-Escolha um cliente-</option>
        {clients.map(customer => (
      <option key={customer.id} value={customer.id}>
        {customer.name} 
      </option>
    ))}
        </select>
      <h2 className="ml-10 text-lg text-white">Modelo/Aparelho</h2>
     <input onChange={(e) => setModel(e.target.value)} value={model} type="text" name="Aparelho" placeholder = "Nome/Modelo do Aparelho" id="modelInput" className="rounded-lg bg-[#19373e] h-10/100 ml-8 mb-3  border border-[#3a5d65] text-white p-2" />
       <h2 className="ml-10 text-lg text-white">Descreva o problema do aparelho</h2>
      <input onChange={(e) => setProblem(e.target.value)} value={problem} type="text" name="Problema" placeholder = "Problema" id="problemInput" className="rounded-lg text-start bg-[#19373e] w-80/100 h-20/100 ml-8 mb-3  border border-[#3a5d65]  text-white p-2" />
       <button onClick={(e) => createOrder(e)} id="saveButton"className="rounded-lg bg-[#19373e] h-10/100 ml-8 mb-5 border border-[#3a5d65] text-white p-2 hover:text-black hover:bg-white" >Salvar</button>
    </div>
</div>
)
}