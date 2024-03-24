// Creating a Guest list Arrray
let guestlist = ["Rouhaan", "Ali", "Urooj", "Owais"];

// Making a Variable For Those Who Cant come
let dontCome =guestlist[0];

// Print the name of guest who cant come
console.log(dontCome, "Nahi ahh saktay han");

// Add or Remove Value from Guest list arrray
guestlist.splice(0, 1, "Huzair");

// Message Print for Bigger Table
console.log("Good News ! We have Found a Bigger Table For Dinner.");

// Adding a New Value at starting index of array
guestlist.unshift("Hamza");

// Adding a new value at ending index of array
guestlist.push("Ammar");

// Get a Middle index of our guest list array
let middleIndex: number = Math.floor(guestlist.length / 2);

// Afdding a new guest to middle index of array
guestlist.splice(middleIndex, 0, "Ayesha");

// Print Message of Updated list
console.log("Updated List of our Guest");

// Sending a Invitation message to our guests one by one with their names
guestlist.forEach(oneguest => console.log(`Salam ${oneguest}, Would uou like to dinner with me`));


// Inform that only two guest can be invited for dinner
console.log("Unfortunately, the new dinner table wont arrive on time, so i can only invite two Guest to dinner with me");

// using while-loop to remove Guest from the array until only two people remain
while(guestlist.length > 2) {
    let removedGuest = guestlist.pop();
    console.log(`Sorry, ${removedGuest} I cant invite you to dinner`);

}

// Printing a invitation to the last two guests on the list
console.log("Invitation to the last 2 Guest");
guestlist.forEach(lasttwo => console.log(`Luckly ${lasttwo}, you are still invited to dinner`));

// Removing last two guest from the list
guestlist.pop();
guestlist.pop();

console.log("Empty list:", guestlist);