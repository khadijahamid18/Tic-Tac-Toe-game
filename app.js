// const buttons = document.querySelectorAll(".box");
// const restart = document.getElementById("restart");
// const popUp = document.querySelector(".popUp");
// const msg = document.getElementById("msg");
// const newGame = document.getElementById("newGame");

// const winnerPattern = [
//     [0, 1, 2],
//     [0, 4, 8],
//     [0, 3, 6],
//     [2, 4, 6],
//     [2, 5, 8],
//     [6, 7, 8],
//     [3, 4, 5],
//     [1, 4, 7]
// ];

// let xturn = true;
// let count = 0;

// const disableButtons = () => {
//     buttons.forEach((element) => (element.disabled = true));

//     // Enable pop up button
//     popUp.classList.remove("hide");
// }

// const enableButton = () => {
//     buttons.forEach((element) => {
//         element.innerText = "";
//         element.disabled = false;
//     })
//     // Disable pop up button
//     popUp.classList.add("hide");
// }

// const winningMsg = (letter) => {
//     if (letter == "X") {
//         msg.innerHTML = "&#x1F389; <br> 'X' Wins";
//     }
//     else {
//         msg.innerHTML = "&#x1F389; <br> 'O' Wins";
//     }
// }

// const drawFunction = () => {
//     disableButtons();
//     msg.innerHTML = "&#x1F60E; <br> It's a Draw";
// }

// newGame.addEventListener("click", function () {
//     count = 0;
//     enableButton();
// })

// restart.addEventListener("click", function () {
//     count = 0;
//     enableButton();
// })


// const winnerCheck = () => {
//     for (const i of winnerPattern) {
//         let [element1, element2, element3] = [
//             buttons[i[0]].innerText,
//             buttons[i[1]].innerText,
//             buttons[i[2]].innerText
//         ]
//         if (element1 != "" && element2 != "" && element3 != "") {
//             if (element1 == element2 && element2 == element3) {
//                 winningMsg();
//             }
//         }
//     }
// }

// buttons.forEach((element) => {
//     element.addEventListener("click", function () {

//         if (xturn) {
//             xturn = false;
//             // Displaying X
//             element.innerText = 'X';
//             element.disabled = true;
//         }
//         else {
//             xturn = true;
//             // Displaying O
//             element.innerText = 'O';
//             element.disabled = true;
//         }
//         // Increment count on each check
//         count += 1;
//         if (count == 9) {
//             drawFunction();
//         }
//         //Check for win on every click
//         winnerCheck();
//     })
// })
// //Enable Buttons and disable popup on page load
// window.onload = enableButton;



let btnRef = document.querySelectorAll(".box");
let popupRef = document.querySelector(".popUp");
let newgameBtn = document.getElementById("newGame");
let restartBtn = document.getElementById("restart");
let msgRef = document.getElementById("msg");
//Winning Pattern Array
let winningPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [2, 5, 8],
    [6, 7, 8],
    [3, 4, 5],
    [1, 4, 7],
    [0, 4, 8],
    [2, 4, 6],
];
//Player 'X' plays first
let xTurn = true;
let count = 0;

//Disable All Buttons
const disableButtons = () => {
    btnRef.forEach((element) => (element.disabled = true));
    //enable popup
    popupRef.classList.remove("hide");
};

//Enable all buttons (For New Game and Restart)
const enableButtons = () => {
    btnRef.forEach((element) => {
        element.innerText = "";
        element.disabled = false;
    });
    //disable popup
    popupRef.classList.add("hide");
};

//This function is executed when a player wins
const winFunction = (letter) => {
    disableButtons();
    if (letter == "X") {
        msgRef.innerHTML = "&#x1F389; <br> 'X' Wins";
    } else {
        msgRef.innerHTML = "&#x1F389; <br> 'O' Wins";
    }
};

//Function for draw
const drawFunction = () => {
    disableButtons();
    msgRef.innerHTML = "&#x1F60E; <br> It's a Draw";
};

//New Game
newgameBtn.addEventListener("click", () => {
    count = 0;
    enableButtons();
});
restartBtn.addEventListener("click", () => {
    count = 0;
    enableButtons();
});

//Win Logic
const winChecker = () => {
    //Loop through all win patterns
    for (let i of winningPattern) {
        let [element1, element2, element3] = [
            btnRef[i[0]].innerText,
            btnRef[i[1]].innerText,
            btnRef[i[2]].innerText,
        ];
        //Check if elements are filled
        //If 3 empty elements are same and would give win as would
        if (element1 != "" && (element2 != "") & (element3 != "")) {
            if (element1 == element2 && element2 == element3) {
                //If all 3 buttons have same values then pass the value to winFunction
                winFunction(element1);
            }
        }
    }
};

//Display X/O on click
btnRef.forEach((element) => {
    element.addEventListener("click", () => {
        if (xTurn) {
            xTurn = false;
            //Display X
            element.innerText = "X";
            element.disabled = true;
        } else {
            xTurn = true;
            //Display Y
            element.innerText = "O";
            element.disabled = true;
        }
        //Increment count on each click
        count += 1;
        if (count == 9) {
            drawFunction();
        }
        //Check for win on every click
        winChecker();
    });
});
//Enable Buttons and disable popup on page load
window.onload = enableButtons;