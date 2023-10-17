let passInput = document.getElementById("psw");
let letter = document.getElementById("letter");
let capital = document.getElementById("capital");
let number = document.getElementById("number");
let length = document.getElementById("length");

// message box block function
passInput.onfocus = function() {
    document.getElementById("message-box").style.display = "block";
};

// message box remove function
passInput.onblur = function() {
    document.getElementById("message-box").style.display = "none";
};

