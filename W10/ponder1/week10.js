
const simpleList = ["oranges", "grapes", "lemons", "apples", "Bananas", "watermelons", "coconuts", "broccoli", "mango"];

console.log(simpleList);

const sortedList = simpleList.sort(compareFn);
console.log(sortedList);

function compareFn(a, b) {
    if (a.toLowerCase() < b.toLowerCase()) {
        return -1;
    } else if (a.toLowerCase() > b.toLowerCase()) {
        return 1;
    }
    return 0;
}

const pattern = /[ae]/;
const filterList = simpleList.filter((item) => {
    return pattern.test(item.toLowerCase());
});
console.log(filterList);



const products = [
    {
        productName: "Wireless Mouse",
        price: 29.99
    },
    {
        productName: "Bluetooth Keyboard",
        price: 49.99
    },
    {
        productName: "Laptop Stand",
        price: 39.99
    }
];


function compareProducts(a, b) {
    if (a.productName.toLowerCase() < b.productName.toLowerCase()) {
        return -1;
    } else if (a.productName.toLowerCase() > b.productName.toLowerCase()) {
        return 1;
    }
    return 0;
}

const sortedProducts = products.sort(compareProducts);
console.log(sortedProducts);

const filteredProducts = products.filter((product) => {
    return product.price > 30;
});
console.log(filteredProducts);

const animals = [
    {
        name: "Lion",
        traits: ["brave", "strong", "fierce", "wild"]
    },
    {
        name: "Elephant",
        traits: ["large", "gentle", "smart", "wild"]
    },
    {
        name: "Fox",
        traits: ["sly", "quick", "clever", "wild"]
    },
    {
        name: "Dog",
        traits: ["loyal", "friendly", "playful", "cuddly"]
    },
    {
        name: "Cat",
        traits: ["quiet", "independent", "curious", "cuddly"]
    }
];
