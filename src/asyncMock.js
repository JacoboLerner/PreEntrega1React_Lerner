

const productos =[
    {
        id: "1",
        nombre: "Sixers",
        precio : "1000",
        categoria: "76ers",
        img:"https://fanatics.frgimages.com/philadelphia-76ers/unisex-nike-joel-embiid-white-philadelphia-76ers-2022/23-swingman-jersey-city-edition_pi4758000_ff_4758952-ebb37463dd7a7b7dacf6_full.jpg?_hv=2&w=340",
        stock: "10",
        descripcion:" La mejor camiseta del Este"
    },
    {
        id: "2",
        nombre: "Chicago Bulls",
        precio : "2000",
        categoria: "Bulls",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRJ0PQx_bAjlxVZiFrfD7MdEVM4e84BM5kdA&usqp=CAU",
        stock: "10",
        descripcion:" La mejor camiseta del Este"
    }    ,
    {
        id: "3",
        nombre: "Boston Celtics",
        precio : "3000",
        categoria: "Boston",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS80iKVCfOYk79U5lzagrdUKTX7zkxc7pTVbg&usqp=CAU",
        stock: "10",
        descripcion:" La mejor camiseta del Este"
    }  ,
      {
        id: "4",
        nombre: "Miami Heat",
        precio : "10000",
        categoria: "Miami",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMY0E9XHN2EZ9E2zEFuj_xKKxQIZq48mfNng&usqp=CAU",
        stock: "10",
        descripcion:" La mejor camiseta del Este"
    },
    {
        id: "5",
        nombre: "Lakers",
        precio : "0.50",
        categoria: "Lakers",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmS2RS966Jx4Cd59fJfmsoMaGdl9Qgyqv3Pg&usqp=CAU",
        stock: "10",
        descripcion:" La mejor camiseta del Oeste"
    },
    {
        id: "6",
        nombre: "Warriors",
        precio : "3000",
        categoria: "76ers",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIUbjNcSy533LviIn-r-DGw8BRJasid2Fv7WGAjMk3PSySwcI7LLeOFg6xPmu5hqY_7Wc&usqp=CAU",
        stock: "10",
        descripcion:" La mejor camiseta del Oeste"
    },
    {
        id: "7",
        nombre: " Denver Nuggets",
        precio : "100",
        categoria: "76ers",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHk8f8ixs03DFo0A_92mcQ97RpaXm1J_iVFQ&usqp=CAU",
        stock: "10",
        descripcion:" La mejor camiseta del Oeste"
    }
]

export const getProductos=()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(productos)
        },2000)
    })
}