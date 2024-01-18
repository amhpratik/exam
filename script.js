const questions = [
    
  {
    question: "How many types of nucleic acids exist in the DNA?",
    answers: [
      { text: "3", correct: false },
      { text: "4", correct: false },
      { text: "5", correct: false },
      { text: "6", correct: false },
      { text: "7", correct: true },
    ],
  },
  {
    question: "Which principle task of Occupational Health involves locating trends, clusters, associations, and causes of disease and injury for in-depth investigation?",
    answers: [
      { text: "Exposure reduction", correct: false },
      { text: "Analysis", correct: true },
      { text: "Substitution", correct: false },
      { text: "Regulation", correct: false },
      { text: "Awareness", correct: false },
    ],
  },
  {
    question: "In occupational health, what does medical surveillance involve?",
    answers: [
      { text: "Locating trends", correct: false },
      { text: "Compensation", correct: false },
      { text: "Monitoring", correct: true },
      { text: "Exposure reduction", correct: false },
      { text: "Substitution", correct: false },
    ],
  },
  {
    question: "Which task involves preparing for prevention as facilities are planned or renovated?",
    answers: [
      { text: "Exposure reduction", correct: false },
      { text: "Anticipation", correct: true },
      { text: "Analysis", correct: false },
      { text: "Substitution", correct: false },
      { text: "Management-worker cooperation", correct: false },
    ],
  },
  {
    question: "How does analysis contribute to occupational health?",
    answers: [
      { text: "Monitoring disease", correct: false },
      { text: "Identifying trends", correct: true },
      { text: "Minimizing toxic exposure", correct: false },
      { text: "Preventing injury", correct: false },
      { text: "Compensating workers", correct: false },
    ],
  },

  {
    question: "What is the primary purpose of medical surveillance in occupational health?",
    answers: [
      { text: "Locating trends", correct: false },
      { text: "Compensation", correct: false },
      { text: "Identifying disease and injury", correct: true },
      { text: "Exposure reduction", correct: false },
      { text: "Substitution", correct: false }
    ]
  },
  {
    question: "Why is awareness important in occupational health?",
    answers: [
      { text: "Minimizing toxic exposure", correct: false },
      { text: "Locating trends", correct: false },
      { text: "Compensation for workers", correct: false },
      { text: "Identifying disease and injury", correct: false },
      { text: "Worker participation", correct: true }
    ]
  },
  {
    question: "What is the role of regulation in occupational health?",
    answers: [
      { text: "Identifying disease and injury", correct: false },
      { text: "Minimizing toxic exposure", correct: false },
      { text: "On-site supervision", correct: true },
      { text: "Analysis of data", correct: false },
      { text: "Substitution of substances", correct: false }
    ]
  },
  {
    question: "How does compensation relate to occupational health?",
    answers: [
      { text: "Identifying disease and injury", correct: false },
      { text: "Minimizing toxic exposure", correct: false },
      { text: "Management-worker cooperation", correct: false },
      { text: "Locating trends", correct: false },
      { text: "Providing for illness and loss of life", correct: true }
    ]
  },
  {
    question: "Which principal task involves preparing for prevention during the planning or renovation of facilities?",
    answers: [
      { text: "Medical surveillance", correct: false },
      { text: "Exposure reduction", correct: false },
      { text: "Anticipation", correct: true },
      { text: "Compensation", correct: false },
      { text: "Management-worker cooperation", correct: false }
    ]
  },
  {
    question: "If a workplace consistently exceeds established exposure limits, which task is most relevant for addressing this issue?",
    answers: [
      { text: "Monitoring", correct: false },
      { text: "Compensation", correct: false },
      { text: "Substitution", correct: false },
      { text: "Exposure reduction", correct: false },
      { text: "Regulation", correct: true }
    ]
  },
  {
    question: "In a scenario where toxic substances can be replaced with less harmful alternatives, what strategy aligns with occupational health goals?",
    answers: [
      { text: "Awareness", correct: false },
      { text: "Analysis", correct: false },
      { text: "Substitution", correct: true },
      { text: "Compensation", correct: false },
      { text: "Management-worker cooperation", correct: false }
    ]
  },
  {
    question: "How does management-worker cooperation contribute to occupational health?",
    answers: [
      { text: "Identifying disease and injury", correct: false },
      { text: "Minimizing toxic exposure", correct: false },
      { text: "Compensating workers", correct: false },
      { text: "Worker participation", correct: true },
      { text: "Analysis of data", correct: false }
    ]
  },
  {
    question: "If there is a sudden increase in reported cases of occupational disease, which task is crucial for understanding and addressing the issue?",
    answers: [
      { text: "Compensation", correct: false },
      { text: "Analysis", correct: true },
      { text: "Medical surveillance", correct: false },
      { text: "Exposure reduction", correct: false },
      { text: "Awareness", correct: false }
    ]
  },
  {
    question: "What is one of the key responsibilities of management in worker's health?",
    answers: [
      { text: "Hazard identification", correct: false },
      { text: "Compliance inspections", correct: false },
      { text: "Advocacy", correct: false },
      { text: "Offering wellness programs", correct: false },
      { text: "Risk assessment", correct: true }
    ]
  }


            
]

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz (){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    
    if(answer.correct){
        button.dataset.correct = answer.correct;  
    }
    button.addEventListener("click", selectAnswer)

})
}


function resetState(){
nextButton.style.display = "none";
while(answerButtons.firstChild){
answerButtons.removeChild(answerButtons.firstChild);

}
}

function selectAnswer(e){

    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    } else{
    selectedBtn.classList.add("inCorrect")
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
        button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}


function showScore(){
    resetState();
    questionElement.innerHTML = `You Scored ${score} out of ${questions.length} !`;
    nextButton.innerHTML = "Solve Again";
    nextButton.style.display = "block"
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    } else { showScore()}
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length) {
    handleNextButton();
    } else{
        startQuiz();
    }
});

startQuiz();
