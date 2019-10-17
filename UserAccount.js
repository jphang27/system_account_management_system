const userLists = new Map();//Create a map that holds a key and value.
//The idea of using a map is because it's unique. A map can also be called a dictionary.
//For every password, there is a unique username/email.
//Key would be username while the value would be your password.

let Users = (function usersAccounts() {
    
    // Private variable to store current counter value.
    //var current = 0;
    let email = "";
    let password = "";
    let passwordConfirmation = "";
    let logIn = false;
    
    // Object that's returned from the IIFE.
    return {
        //Think of these as packages
        signUp: function(email, password, passwordConfirmation) {
            if(userLists.has(email) === false){
                //If email have not been taken then check if password matches the password for this username.
                if(password === passwordConfirmation){
                    //Set method adds or update the map.
                    //In this case, it'll add or update the map with new email and password.
                    userLists.set(email, password);
                    console.log("Sign-Up Completed");
                    return true;
                }
                else{
                    //Failed to find a match for password
                    console.log("Password does not match")
                    return false;
                }
            }
            else{
                //Username is already in the Map.
                console.log("Username taken.")
            }
        },
        signIn(email, password){
            //In the map check to see if the email already exist in the map using the has().
            //if the password (value) in the map matches the value of the key (email) then you are signed in otherwise failed.
            if(userLists.has(email) && (password === userLists.get(email))){
                console.log("In signIn, userLists, email is : " + email + " " + " password is: " + password); //Testing Purposes
                console.log("You are signed-in");
                //Set it to true because you are signed in.
                // logIn = true;
            }
            else{
                console.log("Signed-in attempt failed.");
            }
            // console.log("login is this: " + typeof(this.logIn)); //Use to check the boolean value.
            return this.logIn;
        },
        
        // getNextValue: function() {
        //     current = current + 1;
        //     return current;
        // },

        // getNextNextValue: function(){
        //     current = current + 2;
        //     return current;
        // }
    };
    
}());

// console.log(Sequence.getNextValue()); // 1
// console.log(Sequence.getNextValue()); // 2
// console.log(Sequence.getCurrentValue()); // 2

let email = "jphang@talentpath.com";
let password = "xyz";
// let passwordConfirmation = "xyz";
let passwordConfirmation = "xyz";

console.log(Users.signUp(email, password, passwordConfirmation));
console.log(Users.signIn(email, password));