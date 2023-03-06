let questions = [
  {
    numb: 1,
    question: "What is the proper way to signal an Array?",
    answer: "[]",
    options: ["{}", "[]", "//", "()"],
  },
  {
    numb: 2,
    question: "What does JS stand for?",
    answer: "Java Script",
    options: ["Just Saying", "Juice Squash", "June Sun", "Java Script"],
  },
  {
    numb: 3,
    question: "Where should your JS link be in your HTML?",
    answer: "Last line of the body tag.",
    options: [
      "Last line of the body tag.",
      "Above CSS sheet.",
      "Under the title.",
      "In the first div.",
    ],
  },
  {
    numb: 4,
    question: "What do is plain Java Script called?",
    answer: "Vanilla",
    options: ["Chocolate", "Strawberry", "JQuery", "Vanilla"],
  },
  {
    numb: 5,
    question: "Where can Java Script data be seen in the browser?",
    answer: "Console",
    options: ["Console", "Style", "Performance", "Application"],
  },
];

const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");
const scoreboard = document.querySelector(".scoreboard");
const enterNameButton = document.querySelector(".enterNameButton");
const nameInput = document.querySelector(".nameInput");
const totalTime = 75;

let finalScore = 0;
let timeValue = 75;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;
const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

start_btn.onclick = () => {
  info_box.classList.add("activeInfo");
  startTimer(timeValue);
};

exit_btn.onclick = () => {
  info_box.classList.remove("activeInfo");
};

continue_btn.onclick = () => {
  info_box.classList.remove("activeInfo");
  quiz_box.classList.add("activeQuiz");
  showQuestions(0);
  queCounter(1);
};

restart_quiz.onclick = () => {
  quiz_box.classList.add("activeQuiz");
  result_box.classList.remove("activeResult");
  timeValue = 75;
  que_count = 0;
  que_numb = 1;
  userScore = 0;
  widthValue = 0;
  showQuestions(que_count);
  queCounter(que_numb);
  timeText.textContent = "Time Left";
  next_btn.classList.remove("show");
  startTimer(time);
};

quit_quiz.onclick = () => {
  window.location.reload();
};
const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");

next_btn.onclick = () => {
  if (que_count < questions.length - 1) {
    que_count++;
    que_numb++;
    showQuestions(que_count);
    queCounter(que_numb);
    timeText.textContent = "Time Left";
    next_btn.classList.remove("show");
  } else {
    finalScore = timeCount.textContent;
    showResult();
  }
};

function showQuestions(index) {
  const que_text = document.querySelector(".que_text");

  let que_tag =
    "<span>" +
    questions[index].numb +
    ". " +
    questions[index].question +
    "</span>";
  let option_tag =
    '<div class="option"><span>' +
    questions[index].options[0] +
    "</span></div>" +
    '<div class="option"><span>' +
    questions[index].options[1] +
    "</span></div>" +
    '<div class="option"><span>' +
    questions[index].options[2] +
    "</span></div>" +
    '<div class="option"><span>' +
    questions[index].options[3] +
    "</span></div>";
  que_text.innerHTML = que_tag;
  option_list.innerHTML = option_tag;

  const option = option_list.querySelectorAll(".option");

  for (i = 0; i < option.length; i++) {
    option[i].setAttribute("onclick", "optionSelected(this)");
  }
}

let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';

function optionSelected(answer) {
  let userAns = answer.textContent;
  let correcAns = questions[que_count].answer;
  const allOptions = option_list.children.length;

  if (userAns == correcAns) {
    userScore += 1;
    answer.classList.add("correct");
    answer.insertAdjacentHTML("beforeend", tickIconTag);
    console.log("Correct Answer");
    console.log("Your correct answers = " + userScore);
  } else {
    answer.classList.add("incorrect");
    answer.insertAdjacentHTML("beforeend", crossIconTag);
    console.log("Wrong Answer");
    timeValue -= 5;
    for (i = 0; i < allOptions; i++) {
      if (option_list.children[i].textContent == correcAns) {
        option_list.children[i].setAttribute("class", "option correct");
        option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag);
        console.log("Auto selected correct answer.");
      }
    }
  }
  for (i = 0; i < allOptions; i++) {
    option_list.children[i].classList.add("disabled");
  }
  next_btn.classList.add("show");
}
function showResult() {
  info_box.classList.remove("activeInfo");
  quiz_box.classList.remove("activeQuiz");
  result_box.classList.add("activeResult");
  const scoreText = result_box.querySelector(".score_text");
  if (finalScore > 50) {
    let scoreTag =
      "<span> Congrats! You had <p>" +
      finalScore +
      "</p> seconds left out of <p>" +
      totalTime +
      "</p></span>";
    scoreText.innerHTML = scoreTag;
  } else if (finalScore > 20) {
    let scoreTag =
      "<span> Nice! You had <p>" +
      finalScore +
      "</p> seconds left out of <p>" +
      totalTime +
      "</p></span>";
    scoreText.innerHTML = scoreTag;
  } else {
    let scoreTag =
      "<span> Yikes! You had <p>" +
      finalScore +
      "</p> seconds left out of <p>" +
      totalTime +
      "</p></span>";
    scoreText.innerHTML = scoreTag;
  }
}
function startTimer(time) {
  counter = setInterval(timer, 1000);
  function timer() {
    timeCount.textContent = timeValue;
    timeValue--;
    if (timeValue < 9) {
      let addZero = timeCount.textContent;
      timeCount.textContent = "0" + addZero;
    }
    if (timeValue < 0) {
      clearInterval(counter);
      timeText.textContent = "Time Off";
      const allOptions = option_list.children.length;
      let correcAns = questions[que_count].answer;
      for (i = 0; i < allOptions; i++) {
        if (option_list.children[i].textContent == correcAns) {
          option_list.children[i].setAttribute("class", "option correct");
          option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag);
          console.log("Time Off: Auto selected correct answer.");
        }
      }
      for (i = 0; i < allOptions; i++) {
        option_list.children[i].classList.add("disabled");
      }
      next_btn.classList.add("show");
    }
  }
}
function startTimerLine(time) {
  counterLine = setInterval(timer, timeValue);
  function timer() {
    time += 1;
    time_line.style.width = time + "px";
    if (time > 549) {
      clearInterval(counterLine);
    }
  }
}
function queCounter(index) {
  let totalQueCounTag =
    "<span><p>" +
    index +
    "</p> of <p>" +
    questions.length +
    "</p> Questions</span>";
  bottom_ques_counter.innerHTML = totalQueCounTag;
}

enterNameButton.addEventListener("click", function () {
  console.log(nameInput.value);
  localStorage.setItem("Name", nameInput.value);
  localStorage.setItem("Score", finalScore);
});
