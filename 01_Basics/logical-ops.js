// let temp = 0;

// if (temp >= 60 && temp <= 90) {
//     console.log("You should get outside! It's super nice out!");
// } else if (temp >= 120 || temp <= 0) {
//     console.log("Holy shit, stay home! It's dangerous to go outside");
// } else {
//     console.log("Meh, let's just play games");
// }

// Challenge
let isGuestOneVegan = true;
let isGuestTwoVegan = false;

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log("Offer only vegan options");
} else if (!isGuestOneVegan && !isGuestTwoVegan) {
    console.log("Offer anything on the menu");
} else {
    console.log("Offer some vegan options");
}