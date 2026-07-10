    import "../App.css";
    export function OrderCard() {
        return (
            <div className="m-3 flex-col justify-start rounded-3xl bg-[#301e1f]/70 border border-[#653a3a] w-14/100 h-75 overflow-x-auto overflow-y-hidden p-2">
                <div className="border border-[#653a3a] rounded-lg text-white text-sm h-20/100 overflow-x-auto overflow-y-auto">
                <h2>Cliente:</h2>
                <h3 id="clientName">Izabelle Fernanda Santos Leal</h3>
                </div>
                
               <div className="border border-[#653a3a] rounded-lg text-white text-sm h-20/100 overflow-x-auto overflow-y-auto">
                <h2>Modelo:</h2>
                <h3 id="clientName">IzaPhone Celiamax 28/11</h3>
                </div>
                <div className="border border-[#653a3a] rounded-lg text-white text-sm h-30/100 overflow-x-auto overflow-y-scroll">
                <h2>Descrição do problema:</h2>
                <h3 id="problemDesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac venenatis risus. Praesent sit amet turpis vulputate, scelerisque libero at, viverra ex. Sed mattis, nibh posuere placerat interdum, velit dui ornare ante, non feugiat odio sapien ut felis. Nulla facilisi. Morbi molestie, mauris nec interdum tempus, tortor nisl elementum orci, sit amet tincidunt justo dui in ligula. Fusce quis posuere nibh, ac placerat felis. Nam ac pharetra lacus, ut luctus nunc. Etiam mi quam, interdum ut porttitor et, tincidunt et turpis. Maecenas vestibulum sollicitudin ex vitae bibendum. Suspendisse vulputate ipsum sed erat ultrices tempor. Nulla eu nulla id tortor cursus ullamcorper sit amet dictum nunc. Sed posuere nec justo sit amet tempus. Quisque commodo molestie mauris, id commodo lacus ultrices ac. Nulla facilisi. Suspendisse sit amet aliquam nunc.
                </h3>
                </div>
               <div className="border border-[#653a3a] rounded-lg text-white text-sm h-20/100 overflow-x-auto overflow-y-auto">
                <h2>Prazo de entrega:</h2>
                <time id="cardTime"dateTime="2007-12-14">14/12/2007</time>
                </div>
                <div className="text-white"> <input type="checkbox" name="Concluido" id="checkCard" />Conclúido</div>
               
            </div>
        )
        }