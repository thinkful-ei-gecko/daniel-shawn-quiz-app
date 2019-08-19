/* eslint-disable no-console */
/* eslint-disable quotes */
/* eslint-disable no-undef */
/* eslint-disable strict */

const DATASTORE = [
  {
    question: 'question1',
    answers: [
      'A',
      'B',
      'C',
      'D'
    ],
    correctAnswer: 'A',
  },
  {
    question: 'question2',
    answers: [
      'A',
      'B',
      'C',
      'D'
    ],
    correctAnswer: 'B',
  },
  {
    question: 'question3',
    answers: [
      'A',
      'B',
      'C',
      'D'
    ],
    correctAnswer: 'C',
  },
  {
    question: 'question4',
    answers: [
      'A',
      'B',
      'C',
      'D'
    ],
    correctAnswer: 'D',
  }
  //more questions
];

let questionNumber;
let score;

function writeQuestion(questionNumber) {
  $('body').append(`<div id="question-asker" class="question-${questionNumber} hide">
  <form class="answer-form play-box">
    <fieldset>

      <legend>${DATASTORE[questionNumber].question}</legend>

      <label class="answerOption">
        <input type="radio" value="${DATASTORE[questionNumber].answers[0]}" name="answer" required>
          <span>${DATASTORE[questionNumber].answers[0]}</span>
  </label>

        <label class="answerOption">
          <input type="radio" value="${DATASTORE[questionNumber].answers[1]}" name="answer" required>
            <span>${DATASTORE[questionNumber].answers[1]}</span>
  </label>

          <label class="answerOption">
            <input type="radio" value="${DATASTORE[questionNumber].answers[2]}" name="answer" required>
              <span>${DATASTORE[questionNumber].answers[2]}</span>
  </label>

            <label class="answerOption">
              <input type="radio" value="${DATASTORE[questionNumber].answers[3]}" name="answer" required>
                <span>${DATASTORE[questionNumber].answers[3]}</span>
  </label>

  <button type="submit" class="submitButton">Submit</button>

  </fieldset>
  </form>
  </div>`);
}

function questionCounter() {
  questionNumber++;
  updateScoreboard();
}

function updateScoreboard(value) {
  if (value === 'correct') {
    score++;
  }
  $('.score').text(score);
  $('.questionNumber').text(questionNumber);
}

function checkAnswer(userAnswer) {
  let correctIncorrect;
  if (userAnswer === DATASTORE[questionNumber].correctAnswer) {
    correctIncorrect = 'correct';
  }
  else {
    correctIncorrect = 'incorrect';
  }
  updateScoreboard(correctIncorrect);
  cleanWindow();
  $('#correct-incorrect').append(`${userAnswer} is ${correctIncorrect.toUpperCase()}`);
  $('#answer-text').append(`
    <p>Q: ${DATASTORE[questionNumber].question}</p>
    <p>A: ${DATASTORE[questionNumber].correctAnswer}</p>
    `);
  $('#show-answer').fadeToggle('slow');
}

function submitButton() {
  $('.answer-form').on('submit', event => {
    event.preventDefault();
    $('#question-asker').fadeToggle('slow', function () {
      let userAnswer = $('input:checked').val();
      checkAnswer(userAnswer);
      questionCounter();
      nextButton();
    });
  });
}

function nextButton() {
  $('#next-question').on('click', function () {
    if (DATASTORE.length === questionNumber) {
      $('#show-answer').fadeOut('slow', function () {
        cleanWindow();
        scoreScreen();
      });
    }
    else {
      $('#show-answer').fadeOut('slow', function () {
        cleanWindow();
        writeQuestion(questionNumber);
        $('#question-asker').fadeToggle('slow');
        submitButton();
      });
    }
  });
}

function startQuiz() {
  $('#quiz-start').on('click', function () {
    $('.start-display').fadeOut('slow', function () {
      writeQuestion(questionNumber);
      $('#question-asker').fadeIn('slow');
      submitButton();
    });
  });
}

function cleanWindow() {
  $('#show-answer').hide();
  $('#correct-incorrect').empty();
  $('#answer-text').empty();
  $('#question-asker').remove();
}

// function scoreScreen() {   //rewrite
//   cleanWindow();
//   resetButton();
//   $('#correct-incorrect').append((score / DATASTORE.length) * 100 + '%');
//   $('#answer-text').append(`
//     <h1>You answered ${score} of ${DATASTORE.length} question correctly.</h1>
//     <button id="reset-button">Try again?</button>
//     `);
//   $('#next-question').hide();
//   $('#show-answer').fadeIn('slow');
// }

function scoreScreen() {
  cleanWindow();
  let scorePercent = (score / DATASTORE.length) * 100;
  $('#score-text').append(`
    <h1>${scorePercent}%</h1>
    <h1>You answered ${score} of ${DATASTORE.length} question correctly.</h1>
    `);
  $('#score-screen').fadeIn('slow');
}

function init() {
  questionNumber = 0;
  score = 0;
  $('.totalQuestions').text(DATASTORE.length);
  updateScoreboard();
}

function resetButton() {
  $('#reset-button').on('click', function () {
    window.location.reload(false);
  });
}

function resetIcon() {
  $('#reset-mountain').on('click', function () {
    window.location.reload(false);
  });
}


function main() {
  init();
  startQuiz();
  resetIcon();
  resetButton();
}

$(main);