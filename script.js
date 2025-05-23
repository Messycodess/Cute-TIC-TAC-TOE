console.log("Welcome to my game yayy");
let move = new Audio("move.mp3");
let win = new Audio("win.mp3");
let isgameover = false;

let turn = "X";

// Function to change turn
const changeTurn = () => {
    return turn === "X" ? "O" : "X";
};

// Function to check for win
const checkwin = () => {
    let boxtext = document.getElementsByClassName("boxtext");
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    
    wins.forEach(e => {
        if (
            boxtext[e[0]].innerText !== "" &&
            boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
            boxtext[e[1]].innerText === boxtext[e[2]].innerText
        ) {
            document.querySelector(".info").innerText = boxtext[e[0]].innerText + " Won";
            isgameover = true;
            document.querySelector(".imginfo").getElementsByTagName("img")[0].style.width = "150px";
            win.play();
        }
    });
};

// Game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector(".boxtext");
    element.addEventListener("click", () => {
        if (boxtext.innerText === "" && !isgameover) {
            boxtext.innerText = turn;
            turn = changeTurn();
            move.play();
            checkwin();
            if (!isgameover) {
                document.getElementsByClassName("info")[0].innerText = "Turn For " + turn;
            }
        }
    })
})

