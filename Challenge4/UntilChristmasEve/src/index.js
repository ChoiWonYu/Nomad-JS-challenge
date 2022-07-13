import "./styles.css";

const numRange = document.getElementById("numRange");
const userNum = document.getElementById("userNum");
const playBtn = document.getElementById("playBtn");
const numChoose = document.getElementById("numChoose");
const isWin = document.getElementById("isWin");

const HIDDEN_CLASSNAME = "hidden";

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const onClick = () => {
  const userNumber = Number(userNum.value);
  const numberRange = numRange.value;
  if (!userNumber || !numberRange) alert("숫자를 입력하세요");
  else if (numberRange < 0) alert("범위에는 음수가 포함될 수 없습니다");
  else {
    const randNum = rand(0, numberRange);
    isWin.classList.remove(HIDDEN_CLASSNAME);
    numChoose.classList.remove(HIDDEN_CLASSNAME);
    numChoose.innerText = `You choose ${userNumber}. the machine choose ${randNum}`;
    if (randNum === userNumber) isWin.innerText = "You Won!";
    else isWin.innerText = "You Lost!";
  }
};
playBtn.addEventListener("click", onClick);
