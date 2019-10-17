const userLists = new Map();//Create a map that holds a key and value.
//The idea of using a map is because it's unique. A map can also be called a dictionary.
//For every password, there is a unique username/email.
//Key would be username while the value would be your password.

class User{
    constructor(email, password, passwordConfirmation){
        this.email = email;
        this.password = password;
        this.passwordConfirmation = passwordConfirmation;
        this.logIn = false;
    };
    signUp(){
        //the has object is specific to Map.
        //Checks for a specific key, example is if the list of users have this email, then return "Username taken."
        if(userLists.has(this.email) === false){
            //If email have not been taken then check if password matches the password for this username.
            if(this.password === this.passwordConfirmation){
                //Set method adds or update the map.
                //In this case, it'll add or update the map with new email and password.
                userLists.set(this.email, this.password);
                console.log("Sign-Up Completed");
            }
            else{
                //Failed to find a match for password
                console.log("Password does not match")
            }
        }
        else{
            //Username is already in the Map.
            console.log("Username taken.")
        }
    };
    signIn(){
        //In the map check to see if the email already exist in the map using the has().
        //if the password (value) in the map matches the value of the key (email) then you are signed in otherwise failed.
        if(userLists.has(this.email) && (this.password === userLists.get(this.email))){
            console.log("You are signed-in");
            //Set it to true because you are signed in.
            this.logIn = true;
        }
        else{
            console.log("Signed-in attempt failed.");
        }
        // console.log("login is this: " + typeof(this.logIn)); //Use to check the boolean value.
        return this.logIn;
    };
    signOut(){
        //While logIn remain true
        //set login to false which mean that if it's false then signed out
        if(this.logIn){
            this.logIn = false;
            console.log("Logged out");
        }
        else{
            console.log("Still login");
        }
    
    };
    //We want to update the current password(value) in the Map without having to have a new email(key)
    passwordChange(oldPw, newPw){
        //As long as the value in the Map matches the oldPw being compared
        if(oldPw === userLists.get(this.email)){
            this.password = newPw;
            console.log("Changed password");
        }
        else{
            console.log("Was not able to change password");
        }
    };
    
}

let user1 = new User("jphang@talentpath.com", "xyz", "xyz");
//console.log("user1 info is: " + user1.userEmail + " " + "password: " + user1.userPassword + " " + "passwordconfirmation: " + user1.userPasswordConfirmation);
user1.signUp();
user1.signIn();
user1.signOut();
// let oldPw = "xyz", newPw = "zyx";
// user1.passwordChange(oldPw, newPw);