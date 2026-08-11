import { useState, useEffect } from "react";
import "./App.css";
import type { CreateServiceOrderData, ServiceOrder, ServiceOrderStatus } from "./types/serviceOrders.ts";
import type { Client, CreateClientData } from "./types/client.ts";
import { getAllClients } from "./services/clientService.ts";
import { Dashboard } from "./pages/Dashboard.tsx";
import { BrowserRouter, Routes, Route } from 'react-router';
import { ClientsPage } from './pages/ClientsPage';
import { ServiceOrders } from './pages/ServiceOrders';
import { createServiceOrder, deleteServiceOrder, getAllServiceOrders } from "./services/serviceOrderService.ts";
import { deleteClient } from "./services/clientService.ts";
import { Layout } from "./components/Layout.tsx";
import { createClient } from "./services/clientService.ts";
import { AuthProvider } from './contexts/AuthContext'
import { PrivateRoute } from './routes/PrivateRoute'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { Logout } from "./pages/Logout.tsx";
const App=() =>{
 const [clients,setClients]=useState<Client[]>([]); 
 const [orders,setOrders]= useState<ServiceOrder[]>([]);
 const [loading,setLoading]=useState(true);
useEffect(()=> {
  async function loadAllData(){
   
    try { 
      setLoading(true);
      const [clientsData, ordersData] = await Promise.all([
          getAllClients(),
          getAllServiceOrders()
      ]);
      setClients(clientsData);
      setOrders(ordersData);
    }
    catch(error){
      console.log("Erro no carregamento de dados",error);
    } finally {
      setLoading(false);  
    }
  }
  loadAllData();
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
async function newClient(newCdata:CreateClientData){
  try {
    const newC = await createClient(newCdata);
    setClients((currentClients) => [...currentClients, newC]);
    console.log("adicionado client ok");
  } catch (error) {
    console.error("Erro ao adicionar cliente:", error);
  }

}
 
  return (
   <BrowserRouter>
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />}/>
        <Route element={<PrivateRoute />}>
          <Route element={<Layout />}>
            <Route path="/" element={<Dashboard orders={orders} clients={clients} onChangeStatus={changeStatus} isLoading={loading}/>} />
            <Route path="/clients" element={<ClientsPage onDeleteClient={removeClient} clients={clients} onCreateClient={newClient} isLoading={loading}/>} />
            <Route path="/service-orders" element={<ServiceOrders orders={orders} clients={clients} onDeleteOrder={deleteOrder} onAddOrder={handleAddOrder} isLoading={loading} />} />
          <Route path="/logout" element={<Logout />} />
            </Route>
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}
export default App; 