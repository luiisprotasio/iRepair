import "../App.css";
export function NewOrderForm() {return(
<div className=" ml-10 w-20/100">
    <h1 className="m-8 text-3xl text-white">Nova Ordem</h1>
    <div className="m-3 flex-col items-center justify-center rounded-xl bg-     [#12282d]/70 border border-[#3a5d65] w-full h-100 overflow-x-auto overflow-y-hidden">
      <h2 className="ml-10 text-xl text-white mt-5">Nome do cliente</h2>
        <input type="text" name="Cliente" placeholder = "Nome do Cliente" id="nameInput" className="rounded-lg bg-[#19373e] h-10/100 ml-10 mb-5 border border-[#3a5d65] text-white p-2" />
      <h2 className="ml-10 text-xl text-white">Modelo/Aparelho</h2>
     <input type="text" name="Aparelho" placeholder = "Nome/Modelo do Aparelho" id="modelInput" className="rounded-lg bg-[#19373e] h-10/100 ml-10 mb-5  border border-[#3a5d65] text-white p-2" />
       <h2 className="ml-10 text-xl text-white">Descreva o problema do aparelho</h2>
      <input type="text" name="Problema" placeholder = "Problema" id="problemInput" className="rounded-lg bg-[#19373e] w-80/100 h-10/100 ml-10 mb-5  border border-[#3a5d65] text-white p-2" />
      <h2 className="ml-10 text-xl text-white">Prazo da ordem</h2>
       <input type="date" name="Prazo" placeholder = "Prazo da Ordem" id="dateInput" className="rounded-lg bg-[#19373e] h-10/100 ml-10 mb-5 border border-[#3a5d65] text-white p-2" />
       <button id="saveButton"className="rounded-lg bg-[#19373e] h-10/100 ml-10 mb-5 border border-[#3a5d65] text-white p-2">Salvar</button>
    </div>
</div>
)
}