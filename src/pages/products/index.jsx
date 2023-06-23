const products = [
    {
        id: "1",
        title: "Short celeste",
        price: 1490,
        category: "shorts",
        img: "https://viceversa.uy/storage/products/2022-08-02_06.30.05_LOOKBOOK06022.jpg",
        stock: 3,
        description: "short celeste de excelente calidad y especial para hacer deporte",
        category: "shorts"
    },
    {
        id: "2",
        title: "Body naranja",
        price: 1690,
        category: "tops y bodies",
        img: "https://static.bershka.net/4/photos2/2023/V/0/1/p/2861/538/615/f40cf1a040e861083e18b95e17f3eaad-2861538615_1_1_0.jpg?imwidth=563&impolicy=bershka-itxhigh&imformat=chrome",
        stock: 3,
        description: "body especial para salir en la noche",
        category: "tops y bodies"
    },
    {
        id: "3",
        title: "Body rosado",
        price: 1690,
        category: "tops y bodies",
        img: "https://cdn.shopify.com/s/files/1/0557/1982/1473/products/403649-FUCSIA-1_1600x.jpg?v=1677529023",
        stock: 3,
        description: "body especial para salir en la noche",
        category: "tops y bodies"
        
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        },500)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(product => product.id === id))
        },500)
    })
}