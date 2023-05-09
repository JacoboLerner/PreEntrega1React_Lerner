

const productos =[
    {
        "id": 1,
        "nombre": "Sixers",
        "precio" : 18000,
        "categoria": "camiseta",
        "img":"https://i5.walmartimages.com/asr/3a4944e0-3094-4334-8707-b279112f55d1.91782c9ea48fb808922f046175581ca8.jpeg?odnHeight=580&odnWidth=580&odnBg=FFFFFF",
        "stock": 10,
        "descripcion":" La mejor camiseta del Este, reino del MVP"
    },
    {
        "id": 2,
        "nombre": "Chicago Bulls",
        "precio" : 15000,
        "categoria": "camiseta",
        "img":"https://images.footballfanatics.com/chicago-bulls/chicago-bulls-nike-icon-edition-swingman-jersey-red-zach-lavine-unisex_ss4_p-13349360+u-19uldcrd526myh4dzm8r+v-c02ada147a104f999eb430ce88cb05d7.jpg?_hv=2&w=600",
        "stock": 10,
        "descripcion":"Un clasico de legendas"
    }    ,
    {
        "id": 3,
        "nombre": "Boston Celtics",
        "precio" : 18000,
        "categoria": "camiseta",
        "img":"https://images.footballfanatics.com/boston-celtics/boston-celtics-nike-icon-edition-swingman-jersey-kelly-green-jayson-tatum-unisex_ss4_p-13349306+u-15eykfryh8je05mewbr5+v-19cec5b633d847d0a24a79d1b30e1de1.jpg?_hv=2&w=600",
        "stock": 10,
        "descripcion":" El equipo con aspiraciones de campeon"
    }  ,
      {
        "id": 4,
        "nombre": "Miami Heat",
        "precio" : 22000,
        "categoria": "camiseta",
        "img":"https://images.footballfanatics.com/miami-heat/miami-heat-nike-icon-swingman-jersey-jimmy-butler-mens_ss4_p-12006482+u-qmydmzhxq2sc65qw4h5b+v-6dbd60127047496dacc9835aa25be974.jpg?_hv=2&w=900",
        "stock": 10,
        "descripcion":" El equipo que siempre sorprende"
    },
    {
        "id": 5,
        "nombre": "Lakers",
        "precio" : 17000,
        "categoria": "camiseta",
        "img":"https://images.footballfanatics.com/los-angeles-lakers/los-angeles-lakers-nike-icon-swingman-jersey-lebron-james-youth_ss4_p-11974426+u-ylkzfetl5n6dqhffjze5+v-ec52aea60304422390a8a0d314dcb5a4.jpg?_hv=2&w=600",
        "stock": 10,
        "descripcion":" Un clasico sinonimo de legado"
    },
    {
        "id":6,
        "nombre": "Warriors",
        "precio" : 21000,
        "categoria": "camiseta",
        "img":"https://fanatics.frgimages.com/golden-state-warriors/youth-nike-stephen-curry-black-golden-state-warriors-2021/22-swingman-jersey-city-edition_pi4499000_altimages_ff_4499839-db25c7cbbd62ae237c6ealt1_full.jpg?_hv=2&w=900",
        "stock": 10,
        "descripcion":" El mejor equipo de la ultima decada"
    },
    {
        "id": 7,
        "nombre": " Denver Nuggets",
        "precio" : 21000,
        "categoria": "camiseta",
        "img":"https://fanatics.frgimages.com/denver-nuggets/mens-nike-nikola-jokic-navy-denver-nuggets-replica-swingman-jersey-icon-edition_pi3039000_ff_3039158_full.jpg?_hv=2&w=600",
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