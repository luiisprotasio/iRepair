import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header.tsx";
import { CardList } from "./components/CardList.tsx";
import { NewOrderForm } from "./components/NewOrderForm.tsx";
import type { ServiceOrder } from "./types/ServiceOrders.tsx";
import { OrderCard } from "./components/OrderCard.tsx";

function App() {
 
  return (
    <div className="bg-radial from-[#133036] to-[#0a181b] min-h-screen">
      <Header />
      <div className="flex justify-start">
          <CardList />
          <NewOrderForm />
      </div>
    </div>
  )
}
export default App;