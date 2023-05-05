

const productos =[
    {
        "id": 1,
        "nombre": "Sixers",
        "precio" : 18000,
        "categoria": "camiseta",
        "img":"https://fanatics.frgimages.com/philadelphia-76ers/unisex-nike-joel-embiid-white-philadelphia-76ers-2022/23-swingman-jersey-city-edition_pi4758000_ff_4758952-ebb37463dd7a7b7dacf6_full.jpg?_hv=2&w=340",
        "stock": 10,
        "descripcion":" La mejor camiseta del Este, reino del MVP"
    },
    {
        "id": 2,
        "nombre": "Chicago Bulls",
        "precio" : 15000,
        "categoria": "camiseta",
        "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRJ0PQx_bAjlxVZiFrfD7MdEVM4e84BM5kdA&usqp=CAU",
        "stock": 10,
        "descripcion":"Un clasico de legendas"
    }    ,
    {
        "id": 3,
        "nombre": "Boston Celtics",
        "precio" : 11000,
        "categoria": "camiseta",
        "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS80iKVCfOYk79U5lzagrdUKTX7zkxc7pTVbg&usqp=CAU",
        "stock": 10,
        "descripcion":" El equipo con aspiraciones de campeon"
    }  ,
      {
        "id": 4,
        "nombre": "Miami Heat",
        "precio" : 20000,
        "categoria": "camiseta",
        "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMY0E9XHN2EZ9E2zEFuj_xKKxQIZq48mfNng&usqp=CAU",
        "stock": 10,
        "descripcion":" El equipo que siempre sorprende"
    },
    {
        "id": 5,
        "nombre": "Lakers",
        "precio" : 1,
        "categoria": "camiseta",
        "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmS2RS966Jx4Cd59fJfmsoMaGdl9Qgyqv3Pg&usqp=CAU",
        "stock": 10,
        "descripcion":" Un clasico sinonimo de legado"
    },
    {
        "id":6,
        "nombre": "Warriors",
        "precio" : 21000,
        "categoria": "camiseta",
        "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIUbjNcSy533LviIn-r-DGw8BRJasid2Fv7WGAjMk3PSySwcI7LLeOFg6xPmu5hqY_7Wc&usqp=CAU",
        "stock": 10,
        "descripcion":" El mejor equipo de la ultima decada"
    },
    {
        "id": 7,
        "nombre": " Denver Nuggets",
        "precio" : 21000,
        "categoria": "camiseta",
        "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHk8f8ixs03DFo0A_92mcQ97RpaXm1J_iVFQ&usqp=CAU",
        "stock": 10,
        "descripcion":" La mejor camiseta del Oeste, aspiraciones de campeones"
    }
]

export const getProductos=()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(productos)
        },2000)
    })
}

export const pedirItemPorID=(id) =>{
    return new Promise((resolve,reject)=>{
        const item= productos.find((el)=> el.id === id);
        if (item){
            resolve(item)
        }else{
            reject({
                error: "No se encontro producto"
            })
        }
    })
}