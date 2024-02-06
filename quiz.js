// Q&A
const quiz=document.querySelector(".quiz")
const questionElement=document.querySelector("#question")
const answerButton=document.querySelector("#answer-buttons")
const nextButton=document.querySelector("#next-btn")
const quizGIF = document.querySelector(".quiz-gif")


let currentQuestionIndex=0;
let score=0;


const questions =[
  {
    gif: "anniversary.gif",
    question: "When is our Anniversary?",
    answers: [
      {text:"25/12/2023", correct: false},
      {text: "02/12/2024", correct: false},
      {text: "07/01/2024", correct: true},
      {text: "20/01/2024", correct: false}
    ]
  },
  
  {
    gif: "movie.gif",
    question: "What is the movie name that we watched in airbnb?",
    answers: [
      {text:"Forgotten", correct: true},
      {text: "Train to Busan", correct: false},
      {text: "Unlocked", correct: false},
      {text: "Pandora", correct: false}
    ]
  },

  {
    gif: "travel.gif",
    question: "Where will we be going on 2026?",
    answers: [
      {text:"Korea", correct: false},
      {text: "Taiwan", correct: false},
      {text: "Iceland", correct: false},
      {text: "Japan", correct: true}
    ]
  }

]

function startQuiz() {
    currentQuestionIndex = 0;
    score=0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
  

function showQuestion() {
  resetState();
  let curreentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex+1;


  quizGIF.src= curreentQuestion.gif;
  questionElement.innerHTML = questionNo + ". " + curreentQuestion.question;

  curreentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButton.appendChild(button);

    if(answer.correct) {
      button.dataset.correct=answer.correct;
    }

    button.addEventListener("click", selectAnswer)

  });

}

function resetState() {
  nextButton.computedStyleMap.display="none";

  while(answerButton.firstChild) {
    answerButton.removeChild(answerButton.firstChild);
  }

}

function selectAnswer(e) { 
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if(isCorrect) {
    selectedBtn.classList.add("correct");
  }else {
    selectedBtn.classList.add("incorrect")
    window.location.href="fail.html";
  }

  Array.from(answerButton.children).forEach(button => {
    if(button.dataset.correct === "true"){
      button.classList.add("correct");
    } 
    button.disabled = true;
  });

  nextButton.style.display="block";
  
}

function handleNextButton() { 
  currentQuestionIndex++;

  if(currentQuestionIndex < questions.length) { 
    showQuestion();
  } else {
    window.location.href="win.html";
  }
}


nextButton.addEventListener("click", () => {
  if(currentQuestionIndex < questions.length) {
      handleNextButton();
  } else {
    startQuiz();
  }
})


  
startQuiz();