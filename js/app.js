

//LOOPING METHOD

// Array to hold hidden word letters
let hiddenWord = ["g","r","a","v","i","t","y"];        

// Empty array to store clicked letters. 
let selectedLetters = [];

//DOM: Hidden word Style elements
const gStyle = document.querySelector('.letter-g');
const rStyle = document.querySelector('.letter-r');
const aStyle = document.querySelector('.letter-a');
const vStyle = document.querySelector('.letter-v');
const iStyle = document.querySelector('.letter-i');
const tStyle = document.querySelector('.letter-t');
const yStyle = document.querySelector('.letter-y');

// DOM: Buttons for library of letters (12)
const aButton = document.querySelector('#button-a');
const bButton = document.querySelector('#button-b');
const gButton = document.querySelector('#button-g');
const eButton = document.querySelector('#button-e');
const rButton = document.querySelector('#button-r');
const vButton = document.querySelector('#button-v');
const fButton = document.querySelector('#button-f');
const iButton = document.querySelector('#button-i');
const hButton = document.querySelector('#button-h');
const tButton = document.querySelector('#button-t');
const kButton = document.querySelector('#button-k');
const yButton = document.querySelector('#button-y');


//Get letter elements from button
let libraryLetters = document.querySelectorAll(".letter");

//Add event listener
for (let i = 0; i < libraryLetters.length; i++) {
    libraryLetters[i].addEventListener('click', handleClick)
}

//Adding clicked letter to selected letters array
function handleClick(event) {
    let clickedLetter = event.target.innerHTML;
    selectedLetters.push(clickedLetter);
 //  Including comparison function within click event
    compareLetters(selectedLetters, hiddenWord);
}

// function to compare letters from selected letters array to hiddenWord array
function compareLetters(sLetters, hWord) {
   for (let i = 0; i < sLetters.length; i++ ) {
 
    if (hWord.includes(sLetters[i])){

        // Different output for each matched letter
        if (sLetters[i] === "g") {
            gStyle.style.visibility = 'visible';
            gButton.setAttribute("disabled", "");
        } else if (sLetters[i] === "r" ) {
            rStyle.style.visibility = 'visible';
            rButton.setAttribute("disabled", "");
        } else if (sLetters[i] === "a" ) {
            aStyle.style.visibility = 'visible';
            aButton.setAttribute("disabled", "");
        } else if (sLetters[i] === "v" ) {
            vStyle.style.visibility = 'visible';
            vButton.setAttribute("disabled", "");
        } else if (sLetters[i] === "i" ) {
            iStyle.style.visibility = 'visible';
            iButton.setAttribute("disabled", "");
        } else if (sLetters[i] === "t" ) {
            tStyle.style.visibility = 'visible';
            tButton.setAttribute("disabled", "");
        } else if (sLetters[i] === "y" ) {
            yStyle.style.visibility = 'visible';
            yButton.setAttribute("disabled", "");
        }
    } else if (sLetters[i] === "b" ) {
        bButton.setAttribute("disabled", "")
        bButton.style.backgroundColor = 'grey';
    } else if (sLetters[i] === "e" ) {
        eButton.setAttribute("disabled", "")
        eButton.style.backgroundColor = 'grey';
    } else if (sLetters[i] === "f" ) {
        fButton.setAttribute("disabled", "")
        fButton.style.backgroundColor = 'grey';
    } else if (sLetters[i] === "h" ) {
        hButton.setAttribute("disabled", "")
        hButton.style.backgroundColor = 'grey';
    } else if (sLetters[i] === "k" ) {
        kButton.setAttribute("disabled", "")
        kButton.style.backgroundColor = 'grey';
    } 

   }

   
    //let selectedLetters = selectedLetters[i];
console.log(hWord, sLetters)

}

console.log(hiddenWord);
//console.log("selected letters",selectedLetters);


//library of buttons with letter displayed.


//Create Grid in CSS to hold library of 12 letters. By default all letters will be transparent. When the array matches, then change visibilty. 

//Disable the button after clicked

//