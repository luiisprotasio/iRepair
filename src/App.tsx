import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header.tsx";
import { CardList } from "./components/CardList.tsx";
import { NewOrderForm } from "./components/NewOrderForm.tsx";
import type { ServiceOrder } from "./types/ServiceOrders.tsx";
import { OrderCard } from "./components/OrderCard.tsx";

function App() {
 const [orders,setOrders]= useState<ServiceOrder[]>([]);
 function handleAddOrder(newSO: ServiceOrder) {
  setOrders([...orders, newSO]);
}
 function toggleStatus(id:number){
  const updatedOrders = orders.map(order => {
    if (order.id === id) {
      return { ...order, status: !order.status };
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
          <CardList orders={orders} onToggleStatus={toggleStatus} onDeleteOrder={deleteOrder} />
          <NewOrderForm onAddOrder={handleAddOrder} />
      </div>
    </div>
  )
}
export default App; 