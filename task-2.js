let weight = 70;
let height = 1.75;

// Calculate BMI
let bmi = weight / (height * height);
// console.log(bmi);

// console.log(bmi.toFixed(2));

bmi = parseFloat(bmi.toFixed(2));

console.log("Your BMI is:", bmi);

// Nested if-else to determine health category
if (bmi < 18.5) {
    console.log("You are underweight.");
}
else {
    if (bmi <= 24.9) {
        console.log("You are normal.");
    }
    else {
        if (bmi <= 29.9) {
            console.log("You are overweight.");
        }
        else {
            console.log("You are obese.");
        }
    }
}
