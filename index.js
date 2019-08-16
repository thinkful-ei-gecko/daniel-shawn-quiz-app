/* eslint-disable quotes */
/* eslint-disable no-undef */
/* eslint-disable strict */


//function: start quiz button

//variable: question counter
//variable: score

//function: generate question from counter, return counter++


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




let questionNumber = 0;
let score = 0;


function quizQuestion() {
  //if statement //put classes?
  $('body').append(`<div class="question-${questionNumber}">
  <form class="answer-form">
    <fieldset>

      <legend>${DATASTORE[questionNumber].question}</legend>

      <label class="answerOption1">
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

function questionCount() {
  questionNumber++;
}



function submitHandle() {
  $('.answer-form').on('submit', event => {
    event.preventDefault();
    let userAnswer = $('input:checked');
    console.log(userAnswer);
    questionCount();
    quizQuestion(questionNumber);
  });
}





// function questionGenerator() {
//   $('.quiz-display').append(`
//     <h1>this is an appended question</h1>
//     $(DATASTORE[questionNumber].question}</p>
//     `);
// }



function startQuiz() {
  $('.quiz-display').on('click', function (event) {
    $('.quiz-display').remove();
    quizQuestion();
    submitHandle();
    //$('.quiz-display').append(quizQuestion);
    //$('.questionAnswerForm').css('display', 'block');
    //$('.questionNumber').text(1);
  });
}


function main() {
  //init();  //click handlers
  startQuiz();

}

$(main);

//startQuiz
//generate function-display question?

//template is displaying


