var guestList = ["Rouhaan", "Ali", "Urooj", "Owais"];
var dontCome = (guestList[1]);
console.log(dontCome, "Ma nahi a sakhta");
guestList.splice(1, 1, "Huzair Ahmed");
guestList.forEach(function (guest) { return console.log("Salam ".concat(guest, ", would you like to Dinner with me?")); });
