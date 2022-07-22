function addToCart(quantity,productName="Armut") {
    console.log(quantity,productName)
    
}
addToCart(1)

let addToCart2 = (quantity) => {
    console.log(quantity)
}
addToCart2()

let products = [
    {productName:"Elma", unitPrice:10, quantity:5},
    {productName:"Armut", unitPrice:10, quantity:5},
    {productName:"Karpuz", unitPrice:10, quantity:5}
]

// products.push({productName:"Üzüm", unitPrice:10, quantity:10})
// console.log(products)

 let newItem = {productName:"Elma", unitPrice:10, quantity:5};
// products.indexOf(newItem) === -1 ? products.push(newItem) : console.log("This item already exists");
// console.log(products)

// *********************
console.log("code works start")
function addProduct(product) {
    let productToFind = products.find(p=>p.productName === product.productName)
    if(!productToFind) products.push(product)
    console.log(products)
}

addProduct({productName:"Vişne", unitPrice:100  , quantity:15})

console.log("code works end")

let filteredProducts = products.filter(p=>p.unitPrice<100)
console.log("filtered",filteredProducts)

console.log("pair start")
let searchKey = "ar"
//içinde ar geçen ürünleri getir.Armutun a sı büyük onu da getir.
let productName = products.filter((p)=> p.productName.toLowerCase().includes("ar")); console.log(productName);
console.log("pair end")


products.forEach((product))