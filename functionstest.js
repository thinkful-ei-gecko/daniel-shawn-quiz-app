/* eslint-disable no-console */
/* eslint-disable no-undef */

'use strict';

let questionNumber = 0;
let score = 0;

function startQuiz() {
  console.log('starting Quiz!');
  /*this function will start the quiz when the user clicks the start button.
  //will call functions to gen question and display score/question values.*/
  //question number/score might not work here. 

  $('button').click(function () {
    generateQuestion(questionNumber);
    showScoreboard();
    displayScore(score);
    displayQuestionCount(questionNumber);
    hideIntro();
    showQuiz();
  });
}

function generateQuestion() {
  console.log('generating question');
  if (questionNumber < DATASTORE.length) {
    //generates html 
    //otherwise, calls for results
    let question = (`<div class="question-${questionNumber}">
  <form class="answer-form">
    <fieldset>

      <legend>${DATASTORE[questionNumber].question}</legend>

      <label class="answerOption">
        <input  type="radio" value="${DATASTORE[questionNumber].answers[0]}" name="answer" required>
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
              <input  type="radio" value="${DATASTORE[questionNumber].answers[3]}" name="answer" required>
                <span>${DATASTORE[questionNumber].answers[3]}</span>
  </label>

  <button type="submit" class="submitButton">Submit</button>

  </fieldset>
  </form>
  </div>`);
    displayQuestion(question);
    submitQuestion();
  }
  else {
    generateResult();
    restartQuiz();
  }
}

function displayQuestion(question) {
  console.log('displaying the question!');
  $('.quiz-display').append(`${question}`);
}

function submitQuestion() {
  //this function handles what happens when the user submits an answer
  //prevent default
  //hold the value
  //pass the value to the check function
  $('.answer-form').submit(function (event) {
    event.preventDefault();
    let userInput = $('input:checked');
    let selection = userInput.val();
    console.log(selection);
    clearDisplay();
    checkQuestion(selection);
  });
}

function checkQuestion(userInput) {
  console.log('Checking questions...');
  //checks the user selected answer against the correct answer in the object.
  let feedbk = userInput === (DATASTORE[questionNumber].correctAnswer) ? true : false;
  console.log(feedbk);
  generateFeedback(feedbk);

}

function generateFeedback(feedbk) {
  console.log('Are you right???');
  if (feedbk === true) {
    console.log('Yes, you are!');
    scoreUpdate(); //to increment the score
    $('.quiz-display').append(`<header>
    <h2>That is correct!</h2>
  </header>
  <div class="quiz-text">
    <p>${DATASTORE[questionNumber].funFact}</p>
  </div>
  <button class= "next">Next</button>`);
  }
  if (feedbk === false) {
    console.log('WRONG');
    $('.quiz-display').append(`<header>
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
  console.log('NEXT!!');
  $('.next').click(function () {
    if (questionNumber < DATASTORE.length - 1) {
      //event handler for next button on feedback view. 
      questionUpdate();
      displayQuestionCount();
      //calls generate question.
      clearDisplay();
      generateQuestion();
    }
    else {
      clearDisplay();
      hideScoreboard();
      generateResult();
    }
  });
}

function questionUpdate() {
  console.log('updating question!');
  questionNumber += 1;

}

function displayQuestionCount() {
  console.log('displaying question!');
  $('#question').text(`Question: ${questionNumber + 1} / 10`);
}

function scoreUpdate() {
  console.log('SCOREEEEE!');
  score++;
  displayScore();
}

function displayScore() {
  console.log('Put it on the board!');
  $('#score').text(` Score: ${score}`);
}

function generateResult() {
  console.log('wrap it up... ')
  if (score >= 8) {
    $('.quiz-display').append(`<header>
    <h2>${resultsMessage.winHead}</h2>
  </header><div class="quiz-text"><p>${resultsMessage.winText}</p>
    <button class="reset-button">Play Again</button>
  </div>`);
  }

  if (score < 8 && score >= 4) {
    $('.quiz-display').append(`<header>
    <h2>${resultsMessage.midHead}</h2>
  </header>
  <div class="quiz-text">
    <p>${resultsMessage.midText}  
    </p>
    <button class="reset-button">Play Again</button>
  </div>`);
  }

  if (score < 4) {
    $('.quiz-display').append(`<header>
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
  $('.intro-screen').css('display', 'none');
}

function clearDisplay() {
  $('.quiz-display').empty();
}

function showIntro() {
  $('.intro-screen').css('display', 'initial')
}

function showScoreboard() {
  $('.scoreboard').css('display', 'block');
}
function hideScoreboard() {
  $('.scoreboard').css('display', 'none')
}
function resetScore() {
  console.log('reset score!')
  score = 0;
}

function showQuiz() {
  $('.quiz-display').css('display', 'block');
}

function hideQuiz() {
  $('.quiz-display').css('display', 'none');
}

function resetQuestion() {
  questionNumber = 0;
}

function restartQuiz() {
  $('.reset-button').click(function () {
    clearDisplay();
    hideQuiz();
    resetScore();
    resetQuestion();
    hideScoreboard();
    showIntro();
  });
}

//this might not be necessary. Might be able to use the quizstart. 
//reset questionNumber to 0
//reset score to 0
//call the original page (or delete dom elements added by js)

function init() {
  //this function calls all the event handlers at the start of the document. 
  startQuiz();
}

$(init);
/*startquiz() => createQuiz() => submitQuestion()=>
  checkQuestion()=>Generatefeeback()/updateScore()=>click(nextButton)=>QuestionUpdate() => Questiondisplay()

  rinse and repeat until question10, then: => display(results)=>on click => reset quiz?*/

// 8/18: Quiz is working through the datastore, but need to make results page. 
//Aria live should be placed on the parent container of each area that updates. Maybe refactor html?
//quiz is appending for each question, but it is displaying like a list. 
//restart quiz function might change css for initial page, and call functions to reset the counters?
