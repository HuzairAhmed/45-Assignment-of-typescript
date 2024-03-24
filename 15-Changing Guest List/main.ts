let guestList = ["Rouhaan", "Ali", "Urooj", "Owais"];

let dontCome= (guestList[1]);

console.log(dontCome, "Ma nahi a sakhta");

guestList.splice(1, 1, "Huzair Ahmed");

guestList.forEach(guest => console.log(`Salam ${guest}, would you like to Dinner with me?`));