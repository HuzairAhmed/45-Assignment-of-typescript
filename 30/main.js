// Creating a Array
var userName = ["Admin", "Zeeshan", "Zohaib", "Huzair", "Saad"];
// Using ForEach loop on Array 
userName.forEach(function (oneUser) {
    if (oneUser === "Admin") {
        console.log("Hello ".concat(oneUser, ", would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(oneUser, ", thank you for logging in again."));
    }
});
