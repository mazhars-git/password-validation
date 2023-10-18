let passInput = document.getElementById("psw");
let letter = document.getElementById("letter");
let capital = document.getElementById("capital");
let number = document.getElementById("number");
let length = document.getElementById("length");
let symbol = document.getElementById("symbol");

// message box block function
passInput.onfocus = function() {
    document.getElementById("message-box").style.display = "block";
};

// message box remove function
passInput.onblur = function() {
    document.getElementById("message-box").style.display = "none";
};

//when enter any input in password field

passInput.onkeyup = function(){
    //validate lowercase letters input
    let lowerCaseLetters = /[a-z]/g;
    if (passInput.value.match(lowerCaseLetters)) {
        letter.classList.remove("invalid");
        letter.classList.add("valid");        
    } else {
        letter.classList.remove("valid");
        letter.classList.add("invalid");     
    }

    //validate upper case letters input
    let upperCaseLetters = /[A-Z]/g;
    if (passInput.value.match(upperCaseLetters)) {
        capital.classList.remove("invalid");
        capital.classList.add("valid"); 
    } else {
        capital.classList.remove("valid");
        capital.classList.add("invalid"); 
    }

    //validate numbers input
    let numbers = /[0-9]/g;
    if(passInput.value.match(numbers)){
        number.classList.remove("invalid");
        number.classList.add("valid"); 
    } else{
        number.classList.remove("valid");
        number.classList.add("invalid");
    }

    //validate special symbol input
    let symbolCh = /[-\#\$\.\%\&\@\!\+\=\<\>\*]/g;
    if(passInput.value.match(symbolCh)){
        symbol.classList.remove("invalid");
        symbol.classList.add("valid"); 
    } else{
        symbol.classList.remove("valid");
        symbol.classList.add("invalid");
    }

    //validate length
    if(passInput.value.length >= 8){
        length.classList.remove("invalid");
        length.classList.add("valid");    
    } else{
        length.classList.remove("valid");
        length.classList.add("invalid");
    }
};