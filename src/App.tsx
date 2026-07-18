import { useState, useEffect } from "react";
import "./App.css";
import type { CreateServiceOrderData, ServiceOrder, ServiceOrderStatus } from "./types/serviceOrders.ts";
import type { Client } from "./types/client.ts";
import { getAllClients } from "./services/clientService.ts";
import { Dashboard } from "./pages/Dashboard.tsx";
import { BrowserRouter, Routes, Route } from 'react-router';
import { ClientsPage } from './pages/ClientsPage';
import { ServiceOrders } from './pages/ServiceOrders';
import { createServiceOrder, deleteServiceOrder, getAllServiceOrders } from "./services/serviceOrderService.ts";
import { deleteClient } from "./services/clientService.ts";
import { Layout } from "./components/Layout.tsx";

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
 useEffect(() => {
    async function load() {
      const data = await getAllServiceOrders();
      setOrders(data);
    }
    load();
  }, []);
 async function handleAddOrder(newSOdata: CreateServiceOrderData) {
  try {
    const newSO = await createServiceOrder(newSOdata);
    setOrders((currentOrders) => [...currentOrders, newSO]);
    console.log("adicionado ordem ok");
  } catch (error) {
    console.error("Erro ao adicionar ordem:", error);
  }
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
  deleteServiceOrder(id);
  const updatedOrders = orders.filter(order => order.id !== id);
  setOrders(updatedOrders);
}
function removeClient(id: number){
  deleteClient(id);
  const updatedClients = clients.filter(client => client.id !== id);
  setClients(updatedClients);
}
 
  return (
   <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard orders={orders} clients={clients} onChangeStatus={changeStatus} onDeleteOrder={deleteOrder}/>} />
          <Route path="/clients" element={<ClientsPage onDeleteClient={removeClient} clients={clients} />} />
          <Route path="/service-orders" element={<ServiceOrders orders={orders} clients={clients} onChangeStatus={changeStatus} onDeleteOrder={deleteOrder} onAddOrder={handleAddOrder} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App; 