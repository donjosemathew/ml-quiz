////////////////////////////////
////////////////Game Data
const dataEasy = [
  {
    question: "ആരുടെ ചരമദിനമായാണ് വായനാദിനം ആചരിക്കുന്നത്",
    optionA: "കെ.പി.കേശവമേനോന്‍",
    optionB: "പി.എന്‍.പണിക്കര്‍",
    optionC: "കെ.എന്‍.പണിക്കര്‍",
    Answer: "B",
  },
  {
    question: "വൈക്കം സത്യാഗ്രഹകാലത്ത് കേരളാ സന്ദര്‍ശനം നടത്തിയ തമിഴ് നേതാവ്",
    optionA: "പോറ്റി ശ്രീരാമലു",
    optionB: "എം.ജി.ആര്‍",
    optionC: "ഇ.വി.രാമസ്വാമി നായ്ക്കര്‍",
    Answer: "C",
  },
  {
    question: "ഒരു വ്യക്തിയുടെ പേരിലറിയപ്പെട്ട കേരളത്തിലെ ആദ്യത്തെ സര്‍വകലാശാല",
    optionA: "കേരള സര്‍വകലാശാല",
    optionB: "കാലിക്കറ്റ് സര്‍വകലാശാല",
    optionC: "എം.ജി.സര്‍വകലാശാല",
    Answer: "C",
  },
  {
    question: "ഏഴരപ്പൊന്നാന എഴുന്നള്ളത്ത് നടക്കുന്ന ക്ഷേത്രം",
    optionA: "ഗുരുവായൂര്‍ ക്ഷേത്രം",
    optionB: "കൊട്ടിയൂര്‍ ക്ഷേത്രം",
    optionC: "ഏറ്റുമാനൂര്‍ ക്ഷേത്രം",
    Answer: "C",
  },
  {
    question: "അര്‍ജ്ജുന നൃത്തം ഏത് ജില്ലയിലെ പ്രധാന നൃത്തരൂപമാണ്",
    optionA: "കൊല്ലം",
    optionB: "കോട്ടയം",
    optionC: "പാലക്കാട്",
    Answer: "B",
  },
  {
    question: "വൈക്കം ഹീറോ എന്നറിയപ്പെടുന്ന നേതാവ്",
    optionA: "ഇ.വി.രാമസ്വാമി നായിക്കര്‍",
    optionB: "കെ.കേളപ്പന്‍",
    optionC: "എ.കെ.ജി",
    Answer: "A",
  },
  {
    question: "കേരളത്തിലെ ആദ്യ സിമന്‍റ് ഫാക്ടറി",
    optionA: "മലബാര്‍ സിമന്‍റ്സ്",
    optionB: "ചെട്ടിനാട് സിമന്‍റ്സ്",
    optionC: "ട്രാവങ്കൂര്‍ സിമന്‍റ്സ്",
    Answer: "C",
  },
  {
    question: "ജനസാന്ദ്രതയില്‍ ഏറ്റവും പിന്നില്‍ നില്‍ക്കുന്ന ജില്ല",
    optionA: "ഇടുക്കി",
    optionB: "ആലപ്പുഴ",
    optionC: "വയനാട്",
    Answer: "A",
  },
  {
    question: "സ്ത്രീ പുരുഷാനുപാതത്തില്‍ ഏറ്റവും പിന്നില്‍ നില്‍ക്കുന്ന ജില്ല",
    optionA: "കണ്ണൂര്‍",
    optionB: "കൊല്ലം",
    optionC: "ഇടുക്കി",
    Answer: "C",
  },
  {
    question: "കുടിയേറ്റക്കാരുടെ ജില്ല എന്നറിയപ്പെടുന്നത്",
    optionA: "വയനാട്",
    optionB: "ഇടുക്കി",
    optionC: "കാസര്‍ഗോഡ്",
    Answer: "B",
  },
];

const dataMedium = [
  {
    question: "ആരുടെ ചരമദിനമായാണ് വായനാദിനം ആചരിക്കുന്നത്",
    optionA: "കെ.പി.കേശവമേനോന്‍",
    optionB: "പി.എന്‍.പണിക്കര്‍",
    optionC: "കെ.എന്‍.പണിക്കര്‍",
    Answer: "B",
  },
  {
    question: "വൈക്കം സത്യാഗ്രഹകാലത്ത് കേരളാ സന്ദര്‍ശനം നടത്തിയ തമിഴ് നേതാവ്",
    optionA: "പോറ്റി ശ്രീരാമലു",
    optionB: "എം.ജി.ആര്‍",
    optionC: "ഇ.വി.രാമസ്വാമി നായ്ക്കര്‍",
    Answer: "C",
  },
  {
    question: "ഒരു വ്യക്തിയുടെ പേരിലറിയപ്പെട്ട കേരളത്തിലെ ആദ്യത്തെ സര്‍വകലാശാല",
    optionA: "കേരള സര്‍വകലാശാല",
    optionB: "കാലിക്കറ്റ് സര്‍വകലാശാല",
    optionC: "എം.ജി.സര്‍വകലാശാല",
    Answer: "C",
  },
  {
    question: "ഏഴരപ്പൊന്നാന എഴുന്നള്ളത്ത് നടക്കുന്ന ക്ഷേത്രം",
    optionA: "ഗുരുവായൂര്‍ ക്ഷേത്രം",
    optionB: "കൊട്ടിയൂര്‍ ക്ഷേത്രം",
    optionC: "ഏറ്റുമാനൂര്‍ ക്ഷേത്രം",
    Answer: "C",
  },
  {
    question: "അര്‍ജ്ജുന നൃത്തം ഏത് ജില്ലയിലെ പ്രധാന നൃത്തരൂപമാണ്",
    optionA: "കൊല്ലം",
    optionB: "കോട്ടയം",
    optionC: "പാലക്കാട്",
    Answer: "B",
  },
  {
    question: "വൈക്കം ഹീറോ എന്നറിയപ്പെടുന്ന നേതാവ്",
    optionA: "ഇ.വി.രാമസ്വാമി നായിക്കര്‍",
    optionB: "കെ.കേളപ്പന്‍",
    optionC: "എ.കെ.ജി",
    Answer: "A",
  },
  {
    question: "കേരളത്തിലെ ആദ്യ സിമന്‍റ് ഫാക്ടറി",
    optionA: "മലബാര്‍ സിമന്‍റ്സ്",
    optionB: "ചെട്ടിനാട് സിമന്‍റ്സ്",
    optionC: "ട്രാവങ്കൂര്‍ സിമന്‍റ്സ്",
    Answer: "C",
  },
  {
    question: "ജനസാന്ദ്രതയില്‍ ഏറ്റവും പിന്നില്‍ നില്‍ക്കുന്ന ജില്ല",
    optionA: "ഇടുക്കി",
    optionB: "ആലപ്പുഴ",
    optionC: "വയനാട്",
    Answer: "A",
  },
  {
    question: "സ്ത്രീ പുരുഷാനുപാതത്തില്‍ ഏറ്റവും പിന്നില്‍ നില്‍ക്കുന്ന ജില്ല",
    optionA: "കണ്ണൂര്‍",
    optionB: "കൊല്ലം",
    optionC: "ഇടുക്കി",
    Answer: "C",
  },
  {
    question: "കുടിയേറ്റക്കാരുടെ ജില്ല എന്നറിയപ്പെടുന്നത്",
    optionA: "വയനാട്",
    optionB: "ഇടുക്കി",
    optionC: "കാസര്‍ഗോഡ്",
    Answer: "B",
  },
];
const dataHard = [
  {
    question: "ഓട്ടന്‍തുള്ളലിന്‍റെ സ്ഥാപകന്‍",
    optionA: "ഉണ്ണായി വാരിയര്‍",
    optionB: "ചെറുശ്ശേരി",
    optionC: "കുഞ്ചന്‍ നമ്പ്യാര്‍",
    Answer: "C",
  },
  {
    question: "കായംകുളം താപവൈദ്യുത നിലയത്തില്‍ ഉപയോഗിയ്ക്കുന്ന ഇന്ധനം",
    optionA: "നാഫ്ത",
    optionB: "കല്‍ക്കരി",
    optionC: "പ്രകൃതി വാതകം",
    Answer: "A",
  },
  {
    question: "കുഞ്ചന്‍ നമ്പ്യാര്‍ സ്മാരകം സ്ഥിതി ചെയ്യുന്നത്",
    optionA: "നെടുമുടി",
    optionB: "പന്മന",
    optionC: "അമ്പലപ്പുഴ",
    Answer: "C",
  },
  {
    question: "സ്ത്രീകളുടെ ശബരിമല എന്നറിയപ്പെടുന്ന ക്ഷേത്രം  ",
    optionA: "തിരുവല്ലം ",
    optionB: "കാടാമ്പുഴ  ",
    optionC: "ആറ്റുകാല്‍ ",
    Answer: "C",
  },
  {
    question: "സര്‍പ്പരാധനയ്ക്ക് പ്രസിദ്ധമായ ക്ഷേത്രം",
    optionA: "മള്ളിയൂര്‍",
    optionB: "മണ്ണാറശാല",
    optionC: "പറശ്ശിനിക്കടവ്",
    Answer: "B",
  },
  {
    question: "ദക്ഷിണ ഗുരുവായൂര്‍ എന്നറിയപ്പെടുന്നത്",
    optionA: "കൊട്ടിയൂര്‍",
    optionB: "അമ്പലപ്പുഴ",
    optionC: "തിരുനെല്ലി",
    Answer: "B",
  },
  {
    question: "ചെട്ടിക്കുളങ്ങര ക്ഷേത്രത്തിലെ പ്രധാന ഉല്‍സവം",
    optionA: "കുംഭ ഭരണി",
    optionB: "മീന ഭരണി",
    optionC: "മേട ഭരണി",
    Answer: "A",
  },
  {
    question:
      "കേരള സ്റ്റേറ്റ് വാട്ടര്‍ ട്രാന്‍സ്പോര്‍ട് കോര്‍പ്പറേഷന്‍റെ ആസ്ഥാനം",
    optionA: "എറണാകുളം",
    optionB: "കൊല്ലം",
    optionC: "ആലപ്പുഴ",
    Answer: "C",
  },
  {
    question: "മങ്കൊമ്പ് നെല്ല് ഗവേഷണ കേന്ദ്രം സ്ഥിതി ചെയ്യുന്ന ജില്ല",
    optionA: "ആലപ്പുഴ",
    optionB: "കോട്ടയം",
    optionC: "പാലക്കാട്",
    Answer: "A",
  },
  {
    question: "ഡ്രഗ്സ് & ഫാര്‍മസ്യൂട്ടിക്കല്‍സിന്‍റെ ആസ്ഥാനം",
    optionA: "കായംകുളം",
    optionB: "കലവൂര്‍",
    optionC: "ഇരവിപേരൂര്‍",
    Answer: "B",
  },
];
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
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
const notification = document.querySelector(".notification");
const gamerestart = document.querySelector(".icon-redo");
const levelBtn = document.querySelector(".level");
const levelIcn = document.querySelector(".level-icn");
const leveldropdown = document.querySelector(".dropdown");
const dropdownitems = document.querySelectorAll(".dropdown-item");
const highscorestorage = window.localStorage;
//Declaration of variables :Quiz variables
let QuizScore = 0;
let Quizlife = 5;
let QuizTimer = 9;
let timer;
let Qnumber = 0;
let CorrectAnswerOption = 0; //Index of the Option holding Correct Answer
let data = dataHard; //Question level
/////////////Set values In UI Elements
const setUI = function () {
  score.innerHTML = QuizScore;
  life.innerHTML = Quizlife;
  timertext.innerHTML = "0" + QuizTimer;
  topScore.innerHTML = localStorage.getItem("highscore"); //Get highscore from Local Storage
};

///////////////////////////
///////////Set Question
function setQuestion() {
  Qnumber = Math.floor(Math.random() * (data.length - 1) + 1); //Selecting random Question
  optionA.innerHTML = data[Qnumber].optionA;
  optionB.innerHTML = data[Qnumber].optionB;
  optionC.innerHTML = data[Qnumber].optionC;
  question.innerHTML = data[Qnumber].question;
}
////////////////
//Enable/Disable Options
function EnableOptions() {
  options.forEach((option) => {
    option.style.color = "#7D7C7C";
    option.style.backgroundColor = "#F2F5FA";
    option.disabled = false;
  });
  nextquestionbtn.disabled = true;
}
function DisableOptions() {
  nextquestionbtn.disabled = false;
  options.forEach((option) => {
    option.disabled = true;
  });
}
///////////Timer
function timerStart() {
  timer = setInterval(() => {
    QuizTimer > 0 ? QuizTimer-- : timeOut();
    setUI();
  }, 1000);
}
//////////////////
/////Game Initial State
const initialState = function () {
  QuizScore = 0;
  Quizlife = 5;
  QuizTimer = 9;
  resultSec.style.opacity = "0";
  resultSec.style.transform = "translateY(50px)";
  notification.style.transform = "translateX(-400px)";
  notification.style.opacity = "0";
  setUI();
  timerStart();
  setQuestion();
  EnableOptions();
};
initialState();

///////////////////////////////////////////////////
//////////////////////////////////////////////////
/////Option Clicks
//1.After Any Option Clicked
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
  if (Quizlife <= 0) {
    gameOver();
  }
}
//3.Time Out
function timeOut() {
  optionClicked();
  Quizlife--;
  setUI();
  resultSectext.innerHTML = `Time Over !`;
  resultSecIcnsvg.src = "images/stopwatch-solid.svg";
  setCorrectAnswer(data[Qnumber].Answer);
  if (Quizlife <= 0) {
    gameOver();
  }
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
//when wrong Answer is clicked/TimeOut
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
//6.Option Clicked

options.forEach((option, index) => {
  option.addEventListener("click", (event) => {
    optionClicked();
    if (data[Qnumber].Answer == ["A", "B", "C"][index]) {
      correctAnswer(event.target);
    } else {
      wrongAnswer(event.target);
      setCorrectAnswer(data[Qnumber].Answer);
    }
  });
});
//////////////////////////////////////////////////
//////////////////////////////////////////////////
////////////Next Question
function nextQuestion() {
  if (Quizlife > 0) {
    QuizTimer = 8;
    setUI();
    setQuestion();
    timerStart();
    EnableOptions();
    resultSec.style.opacity = "0";
    resultSec.style.transform = "translateY(50px)";
  } else {
    gameOver();
  }
}
nextquestionbtn.addEventListener("click", () => {
  nextQuestion();
});
////////////Game Over
function gameOver() {
  notification.style.transform = "translateX(0)";
  notification.style.opacity = "1";
  if (localStorage.getItem("highscore") < QuizScore) {
    highscorestorage.setItem("highscore", QuizScore);
    setUI();
  }
}
gamerestart.addEventListener("click", () => {
  initialState();
});
//////////////////////////////////////////////////
////////////Game Level///////////
levelBtn.addEventListener("click", () => {
  !parseInt(leveldropdown.style.opacity)
    ? (leveldropdown.style.opacity = "1")
    : (leveldropdown.style.opacity = "0");
});

dropdownitems.forEach((item, index) => {
  item.addEventListener("click", () => {
    leveldropdown.style.opacity = "0";
    levelIcn.src = `images/medal/${index + 1}.svg`;
    data = [dataEasy, dataMedium, dataHard][index];
  });
});
