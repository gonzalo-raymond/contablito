const descInput = document.getElementById("desc-input");

const buy = document.getElementById("compra");
const sell = document.getElementById("venta");

const basicIva = document.getElementById("ivaB");
const minIva = document.getElementById("ivaM");
const exIva = document.getElementById("ivaE");

const subInput = document.getElementById("subt");
const inBtn = document.getElementById("btn-in");

const table = document.getElementById("tabla");

const totalSellContainer = document.getElementById("total-ventas");
const totalBuyContainer = document.getElementById("total-compras");

let totalSell = 0;
let totalBuy = 0;

inBtn.addEventListener("click", ()=>{

    let descInputValue = descInput.value;
    let subInputValue = subInput.value;

    let transType = "";

    let ivaValue = 0;
    let ivaBValue = subInputValue * 0.22;
    let ivaMValue = subInputValue * 0.10;

    let tableContent = "";

    if(descInputValue && subInputValue && 
    ( buy.checked || sell.checked ) && 
    ( basicIva.checked || minIva.checked || exIva.checked )){
        
        if(buy.checked){
            transType = "Compra"
            totalBuy += parseInt(subInputValue);
        }else{
            transType = "Venta"
            totalSell += parseInt(subInputValue);
        }

        if(basicIva.checked){
            ivaValue = ivaBValue;
        }else if(minIva.checked){
            ivaValue = ivaMValue;
        }

        let totalPlusIva = parseInt(subInputValue)  + parseInt(ivaValue);

        tableContent += `<td>${descInputValue}</td><td>${transType}</td><td>${subInputValue}</td><td>${ivaValue}</td><td>${totalPlusIva}</td>`; 

    }

    table.insertRow(-1).innerHTML = tableContent;

    totalSellContainer.innerHTML = `$${totalSell}`;
    totalBuyContainer.innerHTML = `$${totalBuy}`;
});