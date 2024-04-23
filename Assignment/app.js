// Write a program that calculates the ticket price based on age with the following conditions: age below 12 pay
//  a ticket price of 5, age below 18 pay a ticket price of 10, age below 60 pay a ticket price of 20, age over 60
//   play a ticket price of 15.

let age = 70;
if (age < 12) {
    console.log("the ticket price is 5rs.");
}
else if (age < 18 && age > 12) {
    console.log("the ticket price is 10rs.");
}
else if (age > 18 && age < 60) {
    console.log("the ticket price is 20rs.");
}
else {
    console.log("the ticket price is 15rs.");
}
