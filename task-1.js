let burgerPrice = 1000;
let cokePrice;

if (burgerPrice > 500) {
    cokePrice = 0;
    console.log("You get a free Coke..!");
}
else {
    cokePrice = 30;
    console.log("Coke costs 30 tk");
}

console.log("Coke Price:", cokePrice, "tk");