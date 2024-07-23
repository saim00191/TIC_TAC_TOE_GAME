var boxes = document.querySelectorAll(".box");
var resetBtn = document.querySelector(".reset-game");
var newGameBtn = document.querySelector(".new-game");
var message = document.querySelector(".msg");
var msgContainer = document.querySelector(".msg-container");
var turn0 = true;
var winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [3, 4, 5],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [6, 7, 8],
];
boxes.forEach(function (box) {
    box.addEventListener("click", function () {
        if (turn0) {
            box.innerHTML = "0";
            turn0 = false;
        }
        else {
            box.innerHTML = "X";
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
    });
});
var disabledBoxes = function () {
    for (var _i = 0, boxes_1 = boxes; _i < boxes_1.length; _i++) {
        var box = boxes_1[_i];
        box.disabled = true;
    }
};
var enableBoxes = function () {
    for (var _i = 0, boxes_2 = boxes; _i < boxes_2.length; _i++) {
        var box = boxes_2[_i];
        box.disabled = false;
        box.innerHTML = "";
    }
};
var resetGame = function () {
    turn0 = true;
    enableBoxes();
    msgContainer === null || msgContainer === void 0 ? void 0 : msgContainer.classList.add("hide");
};
var showWinner = function (winner) {
    message.innerHTML = "Congratulations Winner is ".concat(winner);
    msgContainer === null || msgContainer === void 0 ? void 0 : msgContainer.classList.remove("hide");
};
var checkWinner = function () {
    for (var _i = 0, winPatterns_1 = winPatterns; _i < winPatterns_1.length; _i++) {
        var patterns = winPatterns_1[_i];
        var position1Val = boxes[patterns[0]].innerHTML;
        var position2Val = boxes[patterns[1]].innerHTML;
        var position3Val = boxes[patterns[2]].innerHTML;
        if (position1Val != "" && position2Val != "" && position3Val != "") {
            if (position1Val === position2Val && position2Val === position3Val) {
                disabledBoxes();
                showWinner(position1Val);
            }
        }
    }
};
resetBtn === null || resetBtn === void 0 ? void 0 : resetBtn.addEventListener("click", resetGame);
newGameBtn === null || newGameBtn === void 0 ? void 0 : newGameBtn.addEventListener("click", resetGame);
