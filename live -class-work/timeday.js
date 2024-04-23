//Write a program that greets the user based on the time of day. Display good morning, 
//good afternoon or good evening based on the time of day when you run the code.
let currentTime = new Date();
let currentHour = currentTime.getHours();

if (currentHour < 12) {
    console.log("Good morning!");
} else if (currentHour < 18) {
    console.log("Good afternoon!");
} else {
    console.log("Good evening!");
}