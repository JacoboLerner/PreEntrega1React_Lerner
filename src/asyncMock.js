

const productos =[
    
    {
        "id": 1,
        "nombre": "Sixers",
        "precio" : 18000,
        "categoria": "camisetas",
        "img":"https://i5.walmartimages.com/asr/3a4944e0-3094-4334-8707-b279112f55d1.91782c9ea48fb808922f046175581ca8.jpeg?odnHeight=580&odnWidth=580&odnBg=FFFFFF",
        "stock": 10,
        "descripcion":" La mejor camiseta del Este, reino del MVP"
    },
    {
        "id": 2,
        "nombre": "Chicago Bulls",
        "precio" : 15000,
        "categoria": "camisetas",
        "img":"https://images.footballfanatics.com/chicago-bulls/chicago-bulls-nike-icon-edition-swingman-jersey-red-zach-lavine-unisex_ss4_p-13349360+u-19uldcrd526myh4dzm8r+v-c02ada147a104f999eb430ce88cb05d7.jpg?_hv=2&w=600",
        "stock": 10,
        "descripcion":"Un clasico de leyendas"
    }    ,
    {
        "id": 3,
        "nombre": "Boston Celtics",
        "precio" : 18000,
        "categoria": "camisetas",
        "img":"https://images.footballfanatics.com/boston-celtics/boston-celtics-nike-icon-edition-swingman-jersey-kelly-green-jayson-tatum-unisex_ss4_p-13349306+u-15eykfryh8je05mewbr5+v-19cec5b633d847d0a24a79d1b30e1de1.jpg?_hv=2&w=600",
        "stock": 10,
        "descripcion":" El equipo con aspiraciones de campeon"
    }  ,
      {
        "id": 4,
        "nombre": "Miami Heat",
        "precio" : 22000,
        "categoria": "camisetas",
        "img":"https://images.footballfanatics.com/miami-heat/miami-heat-nike-icon-swingman-jersey-jimmy-butler-mens_ss4_p-12006482+u-qmydmzhxq2sc65qw4h5b+v-6dbd60127047496dacc9835aa25be974.jpg?_hv=2&w=900",
        "stock": 10,
        "descripcion":" El equipo que siempre sorprende"
    },
    {
        "id": 5,
        "nombre": "Lakers",
        "precio" : 17000,
        "categoria": "camisetas",
        "img":"https://images.footballfanatics.com/los-angeles-lakers/los-angeles-lakers-nike-icon-swingman-jersey-lebron-james-youth_ss4_p-11974426+u-ylkzfetl5n6dqhffjze5+v-ec52aea60304422390a8a0d314dcb5a4.jpg?_hv=2&w=600",
        "stock": 10,
        "descripcion":" Un clasico sinonimo de legado"
    },
    {
        "id":6,
        "nombre": "Warriors",
        "precio" : 21000,
        "categoria": "camisetas",
        "img":"https://fanatics.frgimages.com/golden-state-warriors/youth-nike-stephen-curry-black-golden-state-warriors-2021/22-swingman-jersey-city-edition_pi4499000_altimages_ff_4499839-db25c7cbbd62ae237c6ealt1_full.jpg?_hv=2&w=900",
        "stock": 10,
        "descripcion":" El mejor equipo de la ultima decada"
    },
    {
        "id": 7,
        "nombre": " Denver Nuggets",
        "precio" : 21000,
        "categoria": "camisetas",
        "img":"https://fanatics.frgimages.com/denver-nuggets/mens-nike-nikola-jokic-navy-denver-nuggets-replica-swingman-jersey-icon-edition_pi3039000_ff_3039158_full.jpg?_hv=2&w=600",
        "stock": 10,
        "descripcion":" La mejor camiseta del Oeste, aspiraciones de campeones"
    },
    {
        "id":8,
        "nombre": "Jordan XXXVII Caña baja",
        "precio" : 41000,
        "categoria": "zapatillas",
        "img":"https://fanatics.frgimages.com/basketball-essentials/mens-jordan-brand-white-air-jordan-xxxvii-low-shoe_pi4937000_ff_4937163-11ddeac2f8bc608bde06_full.jpg?_hv=2&w=340",
        "stock": 5,
        "descripcion":" La zapatillas mas buscadas de la temporada"
    },
    {
        "id":9,
        "nombre": "Lebron NXXT Gen",
        "precio" : 39000,
        "categoria": "zapatillas",
        "img":"https://fanatics.frgimages.com/basketball-essentials/mens-nike-black-lebron-nxxt-gen-shoes_ss5_p-4920800+u-435yssbooz3mefnnvpms+v-d42wbb09thissptjyh20.jpg?_hv=2&w=340",
        "stock": 5,
        "descripcion":" Hacele honor al rey"
    },
    {
        "id":10,
        "nombre": "Zoom Freak Caña baja",
        "precio" : 35000,
        "categoria": "zapatillas",
        "img":"https://fanatics.frgimages.com/basketball-essentials/mens-nike-purple/black-zoom-freak-4-low-top-shoes_pi4920000_ff_4920811-9a9cd727448dded9b59d_full.jpg?_hv=2&w=340",
        "stock": 10,
        "descripcion":" Rompe los limites con el Freak"
    },
    {
        "id":11,
        "nombre": "Chancletas Lakers",
        "precio" : 15000,
        "categoria": "zapatillas",
        "img":"https://fanatics.frgimages.com/los-angeles-lakers/mens-islide-black-los-angeles-lakers-tonal-slide-sandals_pi2978000_ff_2978336_full.jpg?_hv=2&w=340",
        "stock": 4,
        "descripcion":" Unos clasicos par ael hogar"
    },
    {
        "id":12,
        "nombre": "Chancletas Miami",
        "precio" : 15000,
        "categoria": "zapatillas",
        "img":"https://fanatics.frgimages.com/miami-heat/mens-islide-black-miami-heat-2020/21-city-edition-jersey-slide-sandals_pi4132000_ff_4132239-a12a4d1474dbeede231d_full.jpg?_hv=2&w=340",
        "stock": 5,
        "descripcion":" Lleva el grit and grind por toda la casa"
    },
    {
        "id":13,
        "nombre": "Air Jordan XXVII Caña baja",
        "precio" : 40000,
        "categoria": "zapatillas",
        "img":"https://fanatics.frgimages.com/basketball-essentials/mens-jordan-brand-black-air-jordan-xxxvii-low-shoes_ss5_p-4937162+u-dbm13cumcekufe6radt3+v-ozmqy9dxtzmuijcjhmxd.jpg?_hv=2&w=340",
        "stock": 10,
        "descripcion":" Digno del G.O.A.T."
    },
    {
        "id":14,
        "nombre": "Medias Caña alta Miami Heat",
        "precio" : 11000,
        "categoria": "accesorios",
        "img":"https://fanatics.frgimages.com/miami-heat/youth-rock-em-socks-miami-heat-2023-nba-playoffs-team-slogan-crew-socks_ss5_p-200110394+u-gddukhp7tjiqvkz8ydlj+v-kzkwnglig25dmowwch5x.jpg?_hv=2&w=340",
        "stock": 10,
        "descripcion":"Las infaltables para los fanaticos del Heat"
    },
    {
        "id":15,
        "nombre": "Medias Caña alta Golden State",
        "precio" : 11000,
        "categoria": "accesorios",
        "img":"https://fanatics.frgimages.com/golden-state-warriors/youth-rock-em-socks-golden-state-warriors-custom-jersey-crew-socks_pi5137000_ff_5137003-cca74a301a0fa87846d3_full.jpg?_hv=2&w=340",
        "stock": 10,
        "descripcion":" El mejor equipo de la ultima decada"
    },
    {
        "id":16,
        "nombre": "Medias Caña alta MVP Sixers",
        "precio" : 11000,
        "categoria": "accesorios",
        "img":"https://fanatics.frgimages.com/philadelphia-76ers/youth-rock-em-socks-joel-embiid-royal-philadelphia-76ers-2023-nba-mvp-crew-socks_ss5_p-200138523+u-gmtvjh8sug9m2mv53fd9+v-re0rryjk8zzrsp1wo0kz.jpg?_hv=2&w=340",
        "stock": 10,
        "descripcion":" Confia en el proceso"
    },
    {
        "id":17,
        "nombre": "Botella Celtics",
        "precio" : 15000,
        "categoria": "accesorios",
        "img":"https://fanatics.frgimages.com/boston-celtics/boston-celtics-team-logo-24oz-personalized-jr-thirst-water-bottle_pi4987000_ff_4987779-3a465a65bec60f2c703e_full.jpg?_hv=2&w=340",
        "stock": 5,
        "descripcion":" Lleva tu equipo favorito con vos a donde vayas"
    },
    {
        "id":18,
        "nombre": "Riñonera Mavericks",
        "precio" : 25000,
        "categoria": "accesorios",
        "img":"https://fanatics.frgimages.com/dallas-mavericks/herschel-supply-co-dallas-mavericks-2019/20-city-edition-nineteen-hipsack_pi3726000_ff_3726735-1df384933dc389fa647d_full.jpg?_hv=2&w=340",
        "stock": 3,
        "descripcion":" Lleva la energia de los Mavs con vos"
    },
    {
        "id":19,
        "nombre": "Paraguas Suns",
        "precio" : 12000,
        "categoria": "accesorios",
        "img":"https://fanatics.frgimages.com/phoenix-suns/wincraft-phoenix-suns-42-folding-umbrella_pi1934000_ff_1934102_full.jpg?_hv=2&w=340",
        "stock": 4,
        "descripcion":"Para esperar la lluvia en Arizona"
    },
    {
        "id":20,
        "nombre": "Poncho Lakers",
        "precio" : 11000,
        "categoria": "accesorios",
        "img":"https://fanatics.frgimages.com/los-angeles-lakers/foco-los-angeles-lakers-wrap-scarf_pi4258000_ff_4258828-857e04f5784d763918f2_full.jpg?_hv=2&w=340",
        "stock": 3,
        "descripcion":" Para el frio"
    }
]

export const getProductos=()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(productos)
        },1500)
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