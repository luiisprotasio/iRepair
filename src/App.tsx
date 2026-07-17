import { useState, useEffect } from "react";
import "./App.css";
import type { ServiceOrder, ServiceOrderStatus } from "./types/serviceOrders.ts";
import type { Client } from "./types/client.ts";
import { getAllClients } from "./services/clientService.ts";
import { Dashboard } from "./pages/Dashboard.tsx";
import { BrowserRouter, Routes, Route } from 'react-router';
import { ClientsPage } from './pages/ClientsPage';
import { ServiceOrders } from './pages/ServiceOrders';

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
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard orders={orders} onChangeStatus={changeStatus} clients={clients} onDeleteOrder={deleteOrder}/>}/>
        <Route path="/clients" element={<ClientsPage />} />
        <Route path="/service-orders" element={<ServiceOrders />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App; 