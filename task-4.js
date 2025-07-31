let myScore = 90;
let friendScore = 70;

if (myScore > 80) {
    // Inside friend's score check
    if (friendScore > 80) {
        console.log("Go for a lunch.");
    }
    else if (friendScore >= 60) {
        console.log("Good luck next time.");
    }
    else if (friendScore >= 40) {
        console.log("Keep your friend's message unseen.");
    }
    else {
        console.log("Block your friend.");
    }
}
else {
    // If your my score is less than or equal 80
    console.log("Go home, sleep and act sad.");
}
