var digitalData = {
    cart: {
        cartAmount: '56.99',
        cartEntries: [
            {
                formattedPrice: '$56.99',
                price: '56.99',
                qty: '1',
                sku: 'LLMJ06.1-S',
                title: 'Jupiter All Weather Trainer',
                category: 'sports'
            },
            {
                formattedPrice: '$50.99',
                price: '50.99',
                qty: '10',
                sku: 'LLMJ04.1-S',
                title: 'Roadster Jean',
                category: 'Jeans'
            },
            {
                formattedPrice: '$46.99',
                price: '46.99',
                qty: '2',
                sku: 'LLMJ10.1-S',
                title: 'Women shorts',
                //category: 'Gym wear'
            },
            {
                formattedPrice: '$99.99',
                price: '99.99',
                qty: '5',
                sku: 'LLMJ11.1-S',
                //title: 'Men Shirt',
                category: 'Casual'
            }
        ]
    },
    product: [
        {
            productInfo : {
                sku: "LLMJ12",
                description: "sweat absorbant sweatshirt",
                title: "Proteus Fitness Jackshirt"
            }
        }
    ]
}

var arr = digitalData.cart.cartEntries
var products = ''
for(let i=0;i<arr.length;++i) {
    var categoryInstance = (digitalData.cart.cartEntries[i].category == undefined) ? "" : digitalData.cart.cartEntries[i].category;
    var productNameInstance = (digitalData.cart.cartEntries[i].title == undefined) ? "" : digitalData.cart.cartEntries[i].title;
    var quantityInstance = (digitalData.cart.cartEntries[i].qty == undefined) ? "" : digitalData.cart.cartEntries[i].qty;
    var priceInstance = (digitalData.cart.cartEntries[i].price == undefined) ? "" : digitalData.cart.cartEntries[i].price;
    if(i == arr.length-1) {
        products += categoryInstance + ";" + productNameInstance + ";" + quantityInstance + ";" + priceInstance + ";eVar1" + ";"
    } else {
        products += categoryInstance + ";" + productNameInstance + ";" + quantityInstance + ";" + priceInstance + ";" + ";eVar1" + ","
    }
}

console.log("Products string is : ", products)