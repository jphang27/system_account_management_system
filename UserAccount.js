
function sign_Up(user){

    let temp1 = user; //store the user's choice of name in a temp variable
    // Check to see if the value in the variable is a string
    // If it is, return the string else throw a message saying invalid
    if(isNaN(temp1)){
        console.log("Your username is: ");
        return temp1;
    }
    else{
        console.log("Invalid username or username already taken")
    }
}

function change_Password(user){
    console.log("change_Password area works");
}

function sign_In(user){
    console.log("sign_In area works");
}
function sign_Out(user){
    console.log("sign_Out area works");
}

//Test
// let user = "Johnny";
// console.log(sign_Up(user));

/************************************************TESTING AREA**********************************************************/
function namespace(){
    console.log("Welcome to Jphang's Talent Path sign-up form."); //For testing

    let user =["jphang", "123456789", "jphang@talentpath.com"];
    sign_Up(user);

    // let user = "phangjohn27";
    // let user = 123456789;
    // sign_Up(someString);
}

namespace();