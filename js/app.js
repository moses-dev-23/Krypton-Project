// Array to hold hidden word letters
let hiddenWord = ["g", "r", "a", "v", "i", "t", "y"];

// Empty array to store clicked letters.
let selectedLetters = [];

//---------------------------------------------------------
// DOM: Hidden word Style elements
const gStyle = document.querySelector("#letter-g");
const rStyle = document.querySelector("#letter-r");
const aStyle = document.querySelector("#letter-a");
const vStyle = document.querySelector("#letter-v");
const iStyle = document.querySelector("#letter-i");
const tStyle = document.querySelector("#letter-t");
const yStyle = document.querySelector("#letter-y");

// DOM: Buttons for library of letters (12)
const aButton = document.querySelector("#button-a");
const bButton = document.querySelector("#button-b");
const gButton = document.querySelector("#button-g");
const eButton = document.querySelector("#button-e");
const rButton = document.querySelector("#button-r");
const vButton = document.querySelector("#button-v");
const fButton = document.querySelector("#button-f");
const iButton = document.querySelector("#button-i");
const hButton = document.querySelector("#button-h");
const tButton = document.querySelector("#button-t");
const kButton = document.querySelector("#button-k");
const yButton = document.querySelector("#button-y");

// DOM: Rocket pieces in staging area
const rocket1 = document.querySelector(".engine");
const rocket2 = document.querySelector(".mainBody");
const rocket3 = document.querySelector(".left-fin");
const rocket4 = document.querySelector(".right-fin");
const rocket5 = document.querySelector(".nose");
const rocket6 = document.querySelector("#fire");
const rocket7 = document.querySelector("#flame");

// DOM for loss message
const lMessage = document.querySelector("#message-l");

//DOM for win message
const wMessage = document.querySelector("#message-w");

// DOM for reset button
const resetButton = document.querySelector("#resetButton");

//---------------------------------------------------------

// Process for displaying rocket pieces in order
const rocketPieces = [rocket1, rocket2, rocket3, rocket4, rocket5, rocket6, rocket7];


let incorrectCount = 0;
// Variable created to trigger win message
let correctLetters = []; 


function displayRocketPieces(count) {
  for (let i = 0; i < rocketPieces.length; i++) {
    if (i === count - 1) {
      rocketPieces[i].style.visibility = "visible";
    }
  }
}

//---------------------------------------------------------

// Get letter elements from button
let libraryLetters = document.querySelectorAll(".letter");

// Add event listener
for (let i = 0; i < libraryLetters.length; i++) {
  libraryLetters[i].addEventListener("click", handleClick);
}

// Adding clicked letter to selected letters array
function handleClick(event) {
  let clickedLetter = event.target.innerHTML;
  selectedLetters.push(clickedLetter);
  
  //Calling the compare letters function
  compareLetters(selectedLetters, hiddenWord);
}


//---------------------------------------------------------
// Function to compare letters from selected letters array to hiddenWord array
function compareLetters(sLetters, hWord) {
  for (let i = 0; i < hWord.length; i++) {
    if (sLetters.includes(hWord[i])) {
        const letter = hWord[i];
        const letterStyle = document.querySelector(`#letter-${letter}`);
        const button = document.querySelector(`#button-${letter}`);
        
        letterStyle.style.visibility = "visible";
        button.setAttribute("disabled", "");

       console.log(button);
        
     
// Different output for each correct matched letter
    //   if (sLetters[i] === "g") {
    //     gStyle.style.visibility = "visible";
    //     gButton.setAttribute("disabled", "");
    //   } else if (sLetters[i] === "r") {
    //     rStyle.style.visibility = "visible";
    //     rButton.setAttribute("disabled", "");
    //   } else if (sLetters[i] === "a") {
    //     aStyle.style.visibility = "visible";
    //     aButton.setAttribute("disabled", "");
    //   } else if (sLetters[i] === "v") {
    //     vStyle.style.visibility = "visible";
    //     vButton.setAttribute("disabled", "");
    //   } else if (sLetters[i] === "i") {
    //     iStyle.style.visibility = "visible";
    //     iButton.setAttribute("disabled", "");
    //   } else if (sLetters[i] === "t") {
    //     tStyle.style.visibility = "visible";
    //     tButton.setAttribute("disabled", "");
    //   } else if (sLetters[i] === "y") {
    //     yStyle.style.visibility = "visible";
    //     yButton.setAttribute("disabled", "");
    //   }
// Checking if the correct letters array includes the current correct selected letter.

          if (!correctLetters.includes(sLetters[i])) {
        correctLetters.push(sLetters[i]);
        console.log("Correct letters",correctLetters);
      }

// Code for incorrect answers
    } else {
      const letter = sLetters[i];
      const buttonId = `button-${letter}`;
      const button = document.querySelector(`#${buttonId}`);

      button.setAttribute("disabled", "");
      button.style.backgroundColor = "grey";

      const rocketPiece = rocketPieces[incorrectCount];
      rocketPiece.style.visibility = "visible";

      incorrectCount++;
      console.log("incorrect letters",incorrectCount);
      
        // Display lose message when the incorrect count is the same as the length of the rocketPieces array
      if (incorrectCount === rocketPieces.length) {
        lMessage.style.visibility = "visible";      
      }
    }
// Check if all letters have been correctly guessed to trigger the win message.
        if (correctLetters.length === hWord.length) {
            wMessage.style.visibility = "visible";
        }

  }

} // End of function




// CREATING A RESET BUTTON-------------------
resetButton.addEventListener("click", handleReset);

// Reset rocket pieces
function handleReset() {
    for (let i = 0; i < rocketPieces.length; i++) {
      rocketPieces[i].style.visibility = "hidden";
    }
  
    // Reset buttons
    const buttons = document.querySelectorAll(".letter");
    buttons.forEach((button) => {
      button.removeAttribute("disabled");
      button.style.backgroundColor = "rgb(128, 170, 207)";
    });
  
    // Reset hidden word
    const hiddenCorrectWord = document.querySelectorAll(".hiddenLetters");
    hiddenCorrectWord.forEach((hiddenLetter) => {
      hiddenLetter.style.visibility = "hidden";
    });

    //Resetting loss message
    lMessage.style.visibility = "hidden";

    //Resetting win message
    wMessage.style.visibility = "hidden";
  
    // Reset selected letters array
    selectedLetters = [];
  
    // Reset incorrect count
    incorrectCount = 0;

    // //Reset correct count
    // correctCount = 0;
  }
  
// RESET BUTTON CREATED-------------------

console.log(hiddenWord);
  

