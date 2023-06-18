const products = [
    {
        id: "1",
        title: "Short celeste",
        price: 1490,
        category: "shorts",
        img: "https://viceversa.uy/storage/products/2022-08-02_06.30.05_LOOKBOOK06022.jpg",
        stock: 3,
        decription: ""
    },
    {
        id: "2",
        title: "Body naranja",
        price: 1690,
        category: "tops y bodies",
        img: "https://static.bershka.net/4/photos2/2023/V/0/1/p/2861/538/615/f40cf1a040e861083e18b95e17f3eaad-2861538615_1_1_0.jpg?imwidth=563&impolicy=bershka-itxhigh&imformat=chrome",
        stock: 3,
        decription: ""
    },
    {
        id: "3",
        title: "Body rosado",
        price: 1690,
        category: "tops y bodies",
        img: "https://cdn.shopify.com/s/files/1/0557/1982/1473/products/403649-FUCSIA-1_1600x.jpg?v=1677529023",
        stock: 3,
        decription: ""
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        },1000)
    })
}