const valorMarca = document.getElementById("marca");
const valorColor = document.getElementById("color");

const tarjetera = document.getElementById("tarjetera");
const listaCamiones = [

    {
        id: 1,
        marca: "Iveco",
        color: "negro",
        precio: 2000,
    },

    {
        id: 2,
        marca: "Iveco",
        color: "azul",
        precio: 2500,
    },

    {
        id: 3,
        marca: "Iveco",
        color: "blanco",
        precio: 3000,
    },


    {
        id: 4,
        marca: "Iveco",
        color: "gris",
        precio: 3500,
    },

    {
        id: 5,
        marca: "Scania",
        color: "negro",
        precio: 1500,
    },



    {
        id: 6,
        marca: "Scania",
        color: "azul",
        precio: 2000,
    },

    {
        id: 7,
        marca: "Nissan",
        color: "azul",
        precio: 4000,
    },


    {
        id: 8,
        marca: "Nissan",
        color: "negro",
        precio: 4500,
    },


    {
        id: 9,
        marca: "Nissan",
        color: "blanco",
        precio: 5000,
    },

    {
        id: 10,
        marca: "Nissan",
        color: "gris",
        precio: 5000,
    },


    {
        id: 11,
        marca: "Ford",
        color: "azul",
        precio: 2500,
    },



    {
        id: 13,
        marca: "Ford",
        color: "gris",
        precio: 2000,
    },


   
];

const filtrarColor = document.getElementById("filtrarColor");
const filtrarMarca = document.getElementById("filtrarMarca");
const filtrarAmbos = document.getElementById("filtrarAmbos");


const init = () => {

filtrarColor.addEventListener("click", (e) => {


    e.preventDefault();
    filtrarPorColor();
})

filtrarMarca.addEventListener("click", (e) => {


    e.preventDefault();
    filtrarPorMarca();
})

filtrarAmbos.addEventListener("click", (e) => {


    e.preventDefault();
    filtrarAmbosDos();
})
listaCamiones.map((camion) => {

        
    tarjetera.innerHTML += `<div class="tarjeta">
    <p>Marca: ${camion.marca}</p>
    <p>Precio: ${camion.precio}</p>
    <p>Color: ${camion.color}</p>
    
    </div>`
})
};

init();



const filtrarPorMarca = () => {
    
    tarjetera.innerHTML = "";
   let marcaFiltrada = valorMarca.options[valorMarca.selectedIndex].value;


   let listaFiltradaMarca = listaCamiones.filter((camion) => camion.marca === marcaFiltrada);

    listaFiltradaMarca.map((camion) => {

        
        tarjetera.innerHTML += `<div class="tarjeta">
        <p>Marca: ${camion.marca}</p>
        <p>Precio: ${camion.precio}</p>
        <p>Color: ${camion.color}</p>
        
        </div>`
    })
        
       
        
    };


   const filtrarPorColor = () => {
        
        tarjetera.innerHTML = "";
        
       let colorFiltrado = valorColor.options[valorColor.selectedIndex].value;
    
      
       let listaFiltradaColor = listaCamiones.filter((camion) => camion.color === colorFiltrado.toLowerCase());
        
       listaFiltradaColor.map((camion) => {
    
            
            tarjetera.innerHTML += `<div class="tarjeta">
            <p>Marca: ${camion.marca}</p>
            <p>Precio: ${camion.precio}</p>
            <p>Color: ${camion.color}</p>
            
            </div>`
        })
            
           
            
        };

        const filtrarAmbosDos = () => {

            tarjetera.innerHTML = "";
        
       let colorFiltrado = valorColor.options[valorColor.selectedIndex].value;
       let marcaFiltrada = valorMarca.options[valorMarca.selectedIndex].value;
      
       let listaFiltradaAmbos = listaCamiones.filter((camion) => camion.color === colorFiltrado.toLowerCase() && camion.marca === marcaFiltrada);
        
       listaFiltradaAmbos.map((camion) => {
    
            
            tarjetera.innerHTML += `<div class="tarjeta">
            <p>Marca: ${camion.marca}</p>
            <p>Precio: ${camion.precio}</p>
            <p>Color: ${camion.color}</p>
            
            </div>`
        })
            
           
            
        }

        