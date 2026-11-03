import "../App.css";
import { useState } from "react";
import type { Client, CreateClientData } from "../types";
interface NewClientFormProps {
  clients: Client[];
  onCreateClient: (newC:CreateClientData) => void;

}
export const NewClientForm=({ onCreateClient }: NewClientFormProps) =>{
  const [name, setName]=useState("");
  const [phone, setPhone]=useState("");
  const [email,setEmail]=useState("");
 function addClient(e: React.MouseEvent){
     e.preventDefault();
     const newC: CreateClientData = {
       name: name,
       phone:phone,
       email:email,
     }
     onCreateClient(newC);
     setName("");
     setPhone("");
     setEmail("");
   }
  return(
<div className=" ml-10 w-20/100">
    <h1 className="m-8 text-3xl text-white">Novo Cliente</h1>
    <div className="m-3 flex-col items-center justify-center rounded-xl bg-     [#12282d]/70 border border-[#3a5d65] w-full h-100 overflow-x-auto overflow-y-hidden">
      <h2 className="ml-10 text-xl text-white mt-5">Nome</h2>
        <input type="text" placeholder = "Nome do Cliente"  onChange={(e) => setName(e.target.value)} value ={name}className="rounded-lg bg-[#19373e] w-80/100 h-10/100 ml-10 mb-5 border border-[#3a5d65] text-white p-2"></input>
      <h2 className="ml-10 text-xl text-white">Telefone</h2>
     <input onChange={(e) => setPhone(e.target.value)} value={phone} type="text" name="telefone" placeholder = "00912345678" id="modelInput" className="rounded-lg bg-[#19373e] h-10/100 ml-10 mb-5  border border-[#3a5d65] text-white p-2" />
       <h2 className="ml-10 text-xl text-white">E-mail</h2>
      <input onChange={(e) => setEmail(e.target.value)} value={email} type="text" name="email" placeholder = "exemplo@email.com" id="problemInput" className="rounded-lg bg-[#19373e] w-80/100 h-10/100 ml-10 mb-5  border border-[#3a5d65] text-white p-2" />
       <button onClick={addClient} id="saveButton"className="rounded-lg bg-[#19373e] h-10/100 ml-10 mb-5 border border-[#3a5d65] text-white p-2">Salvar</button>
    </div>
</div>
)
}