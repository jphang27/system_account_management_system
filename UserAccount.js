const userLists = new Map();

let Users = (function usersAccounts() {
    let email = "";
    let password = "";
    // let passwordConfirmation = "";
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
            console.log("signUp email: " + email);
            console.log("signUp password: " + password);
            return email, password;
        },
        signIn(email, password){
            //In the map check to see if the email already exist in the map using the has().
            //if the password (value) in the map matches the value of the key (email) then you are signed in otherwise failed.
            if(userLists.has(email) && (password === userLists.get(email))){
                console.log("In signIn, userLists, email is : " + email + " " + " password is: " + password); //Testing Purposes
                console.log("You are signed-in");
                //Set it to true because you are signed in.
                logIn = true;
            }
            else{
                console.log("Signed-in attempt failed.");
            }
            // console.log("login is this: " + typeof(this.logIn)); //Use to check the boolean value.
            return logIn;
        },
        signOut(){
            //While logIn remain true
            //set login to false which mean that if it's false then signed out
            if(logIn === true){
                logIn = false;
                console.log("Logged out");
            }
            else{
                console.log("This is logIn value: " + logIn);
                console.log("Still login");
            }
        
        },
        //We want to update the current password(value) in the Map without having to have a new email(key)
        passwordChange(email, oldPw, newPw){
            //As long as the value in the Map matches the oldPw being compared, you can change password
            if(oldPw === userLists.get(email)){
                password = newPw;
                console.log("Changed password");
                return password;
            }
            else{
                console.log("Was not able to change password");
                return password;
            }
        },
    };
}());

let email = "jphang@talentpath.com";
let password = "xyz";
let passwordConfirmation = "xyz";
let oldPw = "xyz";
let newPw = "zyx";

console.log(Users.signUp(email, password, passwordConfirmation));
console.log(Users.signIn(email, password));
console.log(Users.signOut());
console.log(Users.passwordChange(email, oldPw, newPw));