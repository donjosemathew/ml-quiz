//////Declaration of variables
const rules = document.querySelector(".btn-transparent");
const rulesComponent = document.querySelector(".floatNotification");
const rulesCloseBtn = document.querySelector(".close");
const bgIMG = document.querySelector(".background");
const startQuiz = document.querySelector(".btn-fill");

///////Button Clicks
/////////1.Rules Button Click
rules.addEventListener("click", () => {
  rulesComponent.style.transform = "translateY(0)";
});

/////////2.Rules-Close Button Click
rulesCloseBtn.addEventListener("click", () => {
  rulesComponent.style.transform = "translateY(-500px)";
});
/////////3.Quiz start Button Click
startQuiz.addEventListener("click", () => {
  window.location.href = "./game.html";
});
/////////Background Image change
let bgimageIndex = 0;
const changeImage = function () {
  bgimageIndex++;
  bgimageIndex > 4 ? (bgimageIndex = 1) : (bgimageIndex = bgimageIndex);
  bgIMG.style.backgroundImage = `url(images/bg${bgimageIndex}.jpg)`;
};
//Background Image change-Timer
setInterval(changeImage, 2500);
