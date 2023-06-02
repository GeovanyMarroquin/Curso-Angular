import { Product, taxCalc } from './06-function-destructuring';
const shoppingCart: Product[] = [
    { description: "Shampoo", price: 100 },
    { description: "Pefc", price: 39 },
];


const [total, tax] = taxCalc({
    products: shoppingCart,
    tax: .13
});

console.log("total: ", total);
console.log("Tax: ", tax);
