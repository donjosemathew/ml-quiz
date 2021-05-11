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
//Declaration of variables :Quiz variables
let QuizScore = 0;
let Quizlife = 5;
let QuizTimer = 8;
let timer;
let Qnumber = 0;
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
  console.log(Qnumber);
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
}
function DisableOptions() {
  optionA.disabled = true;
  optionB.disabled = true;
  optionC.disabled = true;
}
//Timer
function timerStart() {
  timer = setInterval(() => {
    QuizTimer > 0 ? QuizTimer-- : clearTimeout(timer);
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
/////Option Clicks
function optionClicked() {
  clearTimeout(timer);
  DisableOptions();

  resultSec.style.opacity = "1";
  resultSec.style.transform = "translateY(0px)";
}
optionA.addEventListener("click", () => {
  optionClicked();
  if ((data[Qnumber].Answer = "A")) {
  }
});
