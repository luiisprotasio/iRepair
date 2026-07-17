import { useState, useEffect } from "react";
import "./App.css";
import { Header } from "./components/Header.tsx";
import { CardList } from "./components/CardList.tsx";
import { NewOrderForm } from "./components/NewOrderForm.tsx";
import type { ServiceOrder, ServiceOrderStatus } from "./types/serviceOrders.ts";
import type { Client } from "./types/client.ts";
import { getAllClients } from "./services/clientService.ts";
import { OrderCard } from "./components/OrderCard.tsx";

function App() {
 const [clients,setClients]=useState<Client[]>([]);
 useEffect(() => {
    async function load() {
      const data = await getAllClients();
      setClients(data);
    }
    load();
  }, []);
 const [orders,setOrders]= useState<ServiceOrder[]>([]);
 function handleAddOrder(newSO: ServiceOrder) {
  setOrders([...orders, newSO]);
}
 function changeStatus(id:number, value:ServiceOrderStatus){
  const updatedOrders = orders.map(order => {
    if (order.id === id) {
      return { ...order, status: value};
    } else {
    return order;}
 });
  setOrders(updatedOrders);
}
function deleteOrder(id: number) {
  const updatedOrders = orders.filter(order => order.id !== id);
  setOrders(updatedOrders);
}
 
  return (
    <div className="bg-radial from-[#133036] to-[#0a181b] min-h-screen">
      <Header />
      <div className="flex justify-start">
          <CardList orders={orders} onChangeStatus={changeStatus} clients={clients} onDeleteOrder={deleteOrder} />
          <NewOrderForm clients = {clients} onAddOrder={handleAddOrder} />
      </div>
    </div>
  )
}
export default App; 