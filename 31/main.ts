let userName = ["Admin", "Zeeshan", "Zohaib", "Huzair", "Saad"]

userName = []
if (userName.length === 0){
    console.timeLog("Your Array is empty We need to find some users!")
}else{
    // Using ForEach loop on Array 
userName.forEach(oneUser => {
    if(oneUser === "Admin"){
        console.log(`Hello ${oneUser}, would you like to see a status report?`)
    }else{
        console.log(`Hello ${oneUser}, thank you for logging in again.`)
    }
}) 
}