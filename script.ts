let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-game");
let newGameBtn = document.querySelector(".new-game");
let message = document.querySelector(".msg");
let msgContainer = document.querySelector(".msg-container");

let turn0: boolean = true;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [3, 4, 5],
  [1, 4, 7],
  [2, 4, 6],
  [2, 5, 8],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn0) {
      box.innerHTML = "0";
      turn0 = false;
    } else {
      box.innerHTML = "X";
      turn0 = true;
    }
    box.disabled = true;

    checkWinner();
  });
});

const disabledBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerHTML = "";
  }
};

const resetGame = () => {
  turn0 = true;
  enableBoxes();
  msgContainer?.classList.add("hide");
};

const showWinner = (winner: string) => {
  message.innerHTML = `Congratulations Winner is ${winner}`;
  msgContainer?.classList.remove("hide");
};

const checkWinner = () => {
  for (let patterns of winPatterns) {
    let position1Val = boxes[patterns[0]].innerHTML;
    let position2Val = boxes[patterns[1]].innerHTML;
    let position3Val = boxes[patterns[2]].innerHTML;

    if (position1Val != "" && position2Val != "" && position3Val != "") {
      if (position1Val === position2Val && position2Val === position3Val) {
        disabledBoxes();
        showWinner(position1Val);
      }
    }
  }
};

resetBtn?.addEventListener("click", resetGame);
newGameBtn?.addEventListener("click", resetGame);
