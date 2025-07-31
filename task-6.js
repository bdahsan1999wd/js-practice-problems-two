let age = 65;
let isStudent = true;
let ticketFare = 800;

let finalFare;

if (age < 10) {
    // Children free
    finalFare = 0;
}
else if (isStudent) {
    // 50% discount
    finalFare = ticketFare * 0.5;
}
else if (age >= 60) {
    // 15% discount
    finalFare = ticketFare * 0.85;
}
else {
    // Regular fare
    finalFare = ticketFare;
}

console.log("Ticket Fare:", finalFare, "tk");
