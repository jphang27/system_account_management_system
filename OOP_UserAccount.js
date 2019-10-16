class User{
    constructor(email, password, passwordConfirmation){
        this.userEmail = email;
        this.userPassword = password;
        this.userPasswordConfirmation = passwordConfirmation;
    };

    // signUp(user){

    // };
    signUp(user){
        console.log("user1 info is: " + user1.userEmail + " " + "password: " + user1.userPassword + " " + "passwordconfirmation: " + user1.userPasswordConfirmation);
    };
    singIn(user){
    
    };
    singOut(user){
    
    };
    passwordChange(user){
    
    };
    
}

let user1 = new User("jphang", "xyz", "xyz");
//console.log("user1 info is: " + user1.userEmail + " " + "password: " + user1.userPassword + " " + "passwordconfirmation: " + user1.userPasswordConfirmation);
user1.signUp();