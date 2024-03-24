// Array of Current Users
let current_users = ["Ammar", "Subad", "Kaif", "Abdullah", "Huzair"]

// Array of New Users
let new_users = ["Aleem", "Noman", "Vikram", "Kaif", "Subad"]

// Loop through new_users to check for usernames availibility
new_users.forEach(new_one_user => {
  
    // Making a Condition for username already exists and save in our_condition variable
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())
   
    // Print Different messages using If-Else Statement
    if(our_condition){
        console.log(`Sorry ${new_one_user} is already taken!`)
    }else{
        console.log(`This Username ${new_one_user} is available `)
    }
})
