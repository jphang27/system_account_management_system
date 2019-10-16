
function sign_Up(user){

    let temp1 = user; //store the user's choice of name in a temp variable
    // Check to see if the value in the variable is a string
    // If it is, return the string else throw a message saying invalid

    for(let i = 0; i < user.length; i++){
        if(isNaN(temp1[i])){
            console.log("Your username is: " +  user[0] + " " + " password is: " + user[1] + " " + " email is: " + user[2]);
            return temp1;
        }
        else{
            console.log("Invalid username or username already taken")
        }
    }
}

function change_Password(user){
    let tempPW = user;
    // console.log("Change password: ");
    if(isNaN(user)){
        tempPW.splice(1,1, "987654321"); //Change password to this
        return tempPW;
    }
    else{
        return console.log("Invalid password, try again.");
    }
}

function sign_In(user){
    let temp_Signin = user;
    console.log("Please login: ");
    //I feel like should really be a while loop while(user[0] !== "jphang")
    if(temp_Signin[0] === "jphang" && temp_Signin[1] === "123456789"){
        console.log("Username: " + temp_Signin[0]);
        console.log("Password: " + temp_Signin[1]);
        return console.log("Welcome " + " " + temp_Signin[0] + " " + "You are now signed in.");
    }
    else{
        return console.log("Wrong username or password. Please sign-in again.");
    }
}
function sign_Out(user){
    console.log("Signed out. Thank you!");
}

//Test
// let user = "Johnny";
// console.log(sign_Up(user));

/************************************************TESTING AREA**********************************************************/
function namespace(){
    console.log("Welcome to Jphang's Talent Path sign-up form."); //For testing

    let user =["jphang", "123456789", "jphang@talentpath.com"];
    // sign_Up(user);
    // change_Password(user);
    // console.log("This is your updated information: " + change_Password(user));
    console.log("You've changed your password, please login again: ");
    sign_In(user);

    // let user = "phangjohn27";
    // let user = 123456789;
    // sign_Up(someString);
}

namespace();