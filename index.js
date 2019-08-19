/* eslint-disable indent */
/* eslint-disable no-console */
/* eslint-disable no-undef */
// eslint-disable-next-line quotes
"use strict";

let questionNumber = 0;
let score = 0;

function startQuiz() {
  $("button").click(function() {
    generateQuestion(questionNumber);
    showScoreboard();
    displayScore(score);
    displayQuestionCount(questionNumber);
    hideIntro();
    showQuiz();
  });
}

function generateQuestion() {
  if (questionNumber < DATASTORE.length) {
    let question = `<div class="question-${questionNumber}">
  <form class="answer-form">
    <fieldset>

      <legend>${DATASTORE[questionNumber].question}</legend>

      <label class="answerOption">
        <input  type="radio" value="${
          DATASTORE[questionNumber].answers[0]
        }" name="answer" required>
          <span>${DATASTORE[questionNumber].answers[0]}</span>
  </label>

        <label class="answerOption">
          <input type="radio" value="${
            DATASTORE[questionNumber].answers[1]
          }" name="answer" required>
            <span>${DATASTORE[questionNumber].answers[1]}</span>
  </label>

          <label class="answerOption">
            <input type="radio" value="${
              DATASTORE[questionNumber].answers[2]
            }" name="answer" required>
              <span>${DATASTORE[questionNumber].answers[2]}</span>
  </label>

            <label class="answerOption">
              <input  type="radio" value="${
                DATASTORE[questionNumber].answers[3]
              }" name="answer" required>
                <span>${DATASTORE[questionNumber].answers[3]}</span>
  </label>

  <button type="submit" class="submitButton">Submit</button>

  </fieldset>
  </form>
  </div>`;
    displayQuestion(question);
    submitQuestion();
  } else {
    generateResult();
    restartQuiz();
  }
}

function displayQuestion(question) {
  console.log("displaying the question!");
  $(".quiz-display").append(`${question}`);
}

function submitQuestion() {
  $(".answer-form").submit(function(event) {
    event.preventDefault();
    let userInput = $("input:checked");
    let selection = userInput.val();
    clearDisplay();
    checkQuestion(selection);
  });
}

function checkQuestion(userInput) {
  let feedbk =
    userInput === DATASTORE[questionNumber].correctAnswer ? true : false;
  generateFeedback(feedbk);
}

function generateFeedback(feedbk) {
  if (feedbk === true) {
    scoreUpdate();
    $(".quiz-display").append(`<header>
    <h2>That is correct!</h2>
  </header>
  <div class="quiz-text">
    <p>${DATASTORE[questionNumber].funFact}</p>
  </div>
  <button class= "next">Next</button>`);
  }
  if (feedbk === false) {
    $(".quiz-display").append(`<header>
    <h2>That is incorrect!</h2>
  </header>
  <div class="quiz-text">
  <h3>The correct answer is: ${DATASTORE[questionNumber].correctAnswer}</h3>
    <p>${DATASTORE[questionNumber].funFact}</p>
  </div>
  <button class= "next">Next</button>`);
  }
  nextQuestion();
}

function nextQuestion() {
  $(".next").click(function() {
    if (questionNumber < DATASTORE.length - 1) {
      questionUpdate();
      displayQuestionCount();
      clearDisplay();
      generateQuestion();
    } else {
      clearDisplay();
      hideScoreboard();
      generateResult();
    }
  });
}

function questionUpdate() {
  questionNumber += 1;
}

function displayQuestionCount() {
  $("#question").text(`Question: ${questionNumber + 1} / 10`);
}

function scoreUpdate() {
  score++;
  displayScore();
}

function displayScore() {
  $("#score").text(` Score: ${score}`);
}

function generateResult() {
  if (score >= 8) {
    $(".quiz-display").append(`<header>
    <h2>${resultsMessage.winHead}</h2>
  </header><div class="quiz-text"><p>${resultsMessage.winText}</p>
    <button class="reset-button">Play Again</button>
  </div>`);
  }

  if (score < 8 && score >= 4) {
    $(".quiz-display").append(`<header>
    <h2>${resultsMessage.midHead}</h2>
  </header>
  <div class="quiz-text">
    <p>${resultsMessage.midText}  
    </p>
    <button class="reset-button">Play Again</button>
  </div>`);
  }

  if (score < 4) {
    $(".quiz-display").append(`<header>
    <h2>${resultsMessage.lossHead}</h2>
  </header>
  <div class="quiz-text">
    <p>${resultsMessage.lossText}</p>
    <button class="reset-button">Play Again</button>
  </div>`);
  }

  restartQuiz();
}

function hideIntro() {
  $(".intro-screen").css("display", "none");
}

function clearDisplay() {
  $(".quiz-display").empty();
}

function showIntro() {
  $(".intro-screen").css("display", "flex");
}

function showScoreboard() {
  $(".scoreboard").css("display", "block");
}
function hideScoreboard() {
  $(".scoreboard").css("display", "none");
}

function resetScore() {
  score = 0;
}

function showQuiz() {
  $(".quiz-display").css("display", "block");
}

function hideQuiz() {
  $(".quiz-display").css("display", "none");
}

function resetQuestion() {
  questionNumber = 0;
}

function restartQuiz() {
  $(".reset-button").click(function() {
    clearDisplay();
    hideQuiz();
    resetScore();
    resetQuestion();
    hideScoreboard();
    showIntro();
  });
}

function init() {
  startQuiz();
  restartQuiz();
}

$(init);
