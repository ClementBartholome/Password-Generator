// Store all possible characters in a variable 

const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

// Declare variables

let firstPasswordEl = document.getElementById("first-password")
let secondPasswordEl = document.getElementById("second-password")
let passwordLength = 12; 

// Slider 

let slider = document.getElementById("slider");
let sliderNumber = document.getElementById("slider-number");

// Slider input event listener 

slider.addEventListener("input", function () {
    // Display the value of the slider
    sliderNumber.textContent = `${slider.value}`;
    // Assign the value to passwordLength
    passwordLength = slider.value;
  });

// Functions

function generatePassword() {
    firstPasswordEl.textContent = " "
    secondPasswordEl.textContent = " "
        
    for (let i = 0; i < passwordLength; i++) {
        let randomIndex = Math.floor (Math.random() * characters.length )
        let firstPassword = characters[randomIndex]
        firstPasswordEl.textContent += firstPassword
    }
        
    for (let i = 0; i < passwordLength; i++) {
        let randomIndex = Math.floor (Math.random() * characters.length )
        let secondPassword = characters[randomIndex]
        secondPasswordEl.textContent += secondPassword
    }
}

function copyFirstPassword() {
    var r = document.createRange();
    r.selectNode(document.getElementById("first-password"));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(r);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    }

function copySecondPassword() {
        var r = document.createRange();
        r.selectNode(document.getElementById("second-password"));
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(r);
        document.execCommand('copy');
        window.getSelection().removeAllRanges();
        }