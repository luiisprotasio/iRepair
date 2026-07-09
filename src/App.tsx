import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header.tsx";
import { CardList } from "./components/CardList.tsx";
function App() {
  return (
    <div className="bg-radial from-[#133036] to-[#0a181b] min-h-screen">
      <Header />
      <div className="flex justify-around">
          <CardList />
      </div>
    </div>
  )
}
export default App;