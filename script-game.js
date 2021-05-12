const data = [
  {
    question: "കേരള സംസ്ഥാനം നിലവില്‍ വന്നതെന്ന്",
    optionA: "1950 നവംബര്‍ 1 ",
    optionB: "1950 ജനുവരി 26",
    optionC: "1956 നവംബര്‍ 1",
    Answer: "C",
  },
  {
    question: "കേരളത്തിന്‍റെ തെക്കേ അറ്റത്തെ അസംബ്ലി മണ്ഡലം ",
    optionA: "പാറശ്ശാല ",
    optionB: "മഞ്ചേശ്വരം ",
    optionC: "കളിയിക്കവിള ",
    Answer: "A",
  },
  {
    question: "തെക്കന്‍ കേരളത്തിന്‍റെ മാഞ്ചസ്റ്റെര്‍ എന്നറിയപ്പെടുന്ന നഗരം ",
    optionA: "ബാലരാമപുരം ",
    optionB: "തലപ്പാടി ",
    optionC: "കായംകുളം ",
    Answer: "A",
  },
  {
    question: "ശ്രീനാരായണ ഗുരുവിന്‍റെ സമാധി സ്ഥലം സ്ഥിതി ചെയ്യുന്നത് ",
    optionA: "ചെമ്പഴന്തി",
    optionB: "കിളിമാനൂര്‍ ",
    optionC: "ശിവഗിരി ",
    Answer: "C",
  },
  {
    question: "നോര്‍വെയുടെ സഹകരണത്തോടെയുള്ള  ഫിഷറീസ് കമ്മ്യൂണിറ്റി പ്രോജക്റ്റ്",
    optionA: "വിഴിഞ്ഞം ",
    optionB: "നീണ്ടകര ",
    optionC: "കൊച്ചി ",
    Answer: "B",
  },
];

//////Declaration of variables
//Declaration of variables :UI Elements
const question = document.querySelector(".question");
const optionA = document.querySelector(".optionA");
const options = document.querySelectorAll(".option");
const optionB = document.querySelector(".optionB");
const optionC = document.querySelector(".optionC");
const score = document.querySelector(".score");
const life = document.querySelector(".life");
const timertext = document.querySelector(".timertext");
const topScore = document.querySelector(".topscore");
const resultSec = document.querySelector(".q-state");
const resultSectext = document.querySelector(".quest-status");
const resultSecIcnsvg = document.querySelector(".quest-svg");
const nextquestionbtn = document.querySelector(".next-q");
//Declaration of variables :Quiz variables
let QuizScore = 0;
let Quizlife = 5;
let QuizTimer = 8;
let timer;
let Qnumber = 0;
let CorrectAnswerOption = 0; //Index of the Option holding Correct Answer
/////////////Set values In UI Elements
const setUI = function () {
  score.innerHTML = QuizScore;
  life.innerHTML = Quizlife;
  timertext.innerHTML = "0" + QuizTimer;
};

///////////
///////////Set Question
function setQuestion() {
  Qnumber = Math.floor(Math.random() * (data.length - 1) + 1);
  optionA.innerHTML = data[Qnumber].optionA;
  optionB.innerHTML = data[Qnumber].optionB;
  optionC.innerHTML = data[Qnumber].optionC;
  question.innerHTML = data[Qnumber].question;
}
////////
//Enable/Disable Options
function EnableOptions() {
  optionA.disabled = false;
  optionB.disabled = false;
  optionC.disabled = false;
  options.forEach((option) => {
    option.style.color = "#7D7C7C";
    option.style.backgroundColor = "#F2F5FA";
  });
  nextquestionbtn.disabled = true;
}
function DisableOptions() {
  optionA.disabled = true;
  optionB.disabled = true;
  optionC.disabled = true;
  nextquestionbtn.disabled = false;
}
///Timer
function timerStart() {
  timer = setInterval(() => {
    QuizTimer > 0 ? QuizTimer-- : timeOut();
    setUI();
  }, 1000);
}
//////////
/////Initial State
const initialState = function () {
  QuizScore = 0;
  Quizlife = 5;
  QuizTimer = 8;
  resultSec.style.opacity = "0";
  resultSec.style.transform = "translateY(50px)";
  setUI();
  timerStart();
  setQuestion();
  EnableOptions();
};
initialState();

//////////////////////////////////////////////////
/////////////////////////////////////////////////
///////////////////////////////////////Option Clicks
//1.Any Option Clicked
function optionClicked() {
  clearTimeout(timer);
  DisableOptions();
  resultSec.style.opacity = "1";
  resultSec.style.transform = "translateY(0px)";
}
//2.Wrong Answer Clicked
function wrongAnswer(option) {
  Quizlife--;
  option.style.backgroundColor = "#F43F5E";
  option.style.color = "#FFFFFF";
  setUI();
  resultSectext.innerHTML = `Wrong Answer !`;
  resultSecIcnsvg.src = "images/times-circle-solid.svg";
}
//3.Time Out
function timeOut() {
  optionClicked();
  Quizlife--;
  setUI();
  resultSectext.innerHTML = `Time Over !`;
  resultSecIcnsvg.src = "images/stopwatch-solid.svg";
}
//4.Correct Answer Clicked
function correctAnswer(option) {
  QuizScore++;
  option.style.backgroundColor = "#2FDF56";
  option.style.color = "#FFFFFF";
  setUI();
  resultSectext.innerHTML = `Correct Answer !`;
  resultSecIcnsvg.src = "images/correct.svg";
}
//5.Function for Setting Correct Answer
//when wrong Answer is clicked
function setCorrectAnswer(answerOption) {
  switch (answerOption) {
    case "A":
      CorrectAnswerOption = 0;
      break;
    case "B":
      CorrectAnswerOption = 1;
      break;
    case "C":
      CorrectAnswerOption = 2;
      break;
  }
  options[CorrectAnswerOption].style.backgroundColor = "#2FDF56";
  options[CorrectAnswerOption].style.color = "#FFFFFF";
}
//6 Any Option Clicked
optionA.addEventListener("click", (event) => {
  optionClicked();
  if (data[Qnumber].Answer == "A") {
    correctAnswer(event.target);
  } else {
    wrongAnswer(event.target);
    setCorrectAnswer(data[Qnumber].Answer);
  }
});
//7 Next Question
function nextQuestion() {
  if (Quizlife > 0) {
    QuizTimer = 8;
    setUI();
    setQuestion();
    timerStart();
    EnableOptions();
    resultSec.style.opacity = "0";
    resultSec.style.transform = "translateY(50px)";
  }
}
nextquestionbtn.addEventListener("click", () => {
  nextQuestion();
});
