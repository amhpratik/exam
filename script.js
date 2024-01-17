const questions = [
  {
  question: "How many types of nucleic acids exist in the DNA?",
  answers: [
    { text: "3", correct: false },
    { text: "4", correct: true },// Correct answer added from previous information ("B")
    { text: "5", correct: false },
    { text: "6", correct: false },
    { text: "7", correct: false }, 
  ]
},
{
  question: "Which principle task of Occupational Health involves locating trends, clusters, associations, and causes of disease and injury for in-depth investigation?",
  answers: [
    { text: "Exposure reduction", correct: false },
    { text: "Analysis", correct: true }, // Correct answer added from previous information ("B")
    { text: "Substitution", correct: false },
    { text: "Regulation", correct: false },
    { text: "Awareness", correct: false },
  ]
},
{
  question: "In occupational health, what does medical surveillance involve?",
  answers: [
    { text: "Locating trends", correct: false },
    { text: "Compensation", correct: false },
    { text: "Monitoring", correct: true }, // Correct answer added from previous information ("C")
    { text: "Exposure reduction", correct: false },
    { text: "Substitution", correct: false },
  ]
},
{
  question: "Which task involves preparing for prevention as facilities are planned or renovated?",
  answers: [
    { text: "Exposure reduction", correct: false },
    { text: "Anticipation", correct: true }, // Correct answer added from previous information ("B")
    { text: "Analysis", correct: false },
    { text: "Substitution", correct: false },
    { text: "Management-worker cooperation", correct: false },
  ]
},

{
  question: "How does analysis contribute to occupational health?",
  answers: [
    { text: "Monitoring disease", correct: false },
    { text: "Identifying trends", correct: true }, // Correct answer added from previous information ("B")
    { text: "Minimizing toxic exposure", correct: false },
    { text: "Preventing injury", correct: false },
    { text: "Compensating workers", correct: false },
  ]
},
{
  question: "What is the primary purpose of medical surveillance in occupational health?",
  answers: [
    { text: "Locating trends", correct: false },
    { text: "Compensation", correct: false },
    { text: "Identifying disease and injury", correct: true }, // Correct answer added from previous information ("C")
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
    { text: "Worker participation", correct: true }, // Correct answer added from previous information ("E")
  ]
},
{
  question: "What is the role of regulation in occupational health?",
  answers: [
    { text: "Identifying disease and injury", correct: false },
    { text: "Minimizing toxic exposure", correct: true }, // Correct answer added from previous information ("C")
    { text: "On-site supervision", correct: false },
    { text: "Analysis of data", correct: false },
    { text: "Substitution of substances", correct: false },
  ]
},
{
  question: "How does compensation relate to occupational health?",
  answers: [
    { text: "Identifying disease and injury", correct: false },
    { text: "Minimizing toxic exposure", correct: false },
    { text: "Management-worker cooperation", correct: false },
    { text: "Locating trends", correct: false },
    { text: "Providing for illness and loss of life", correct: true }, // Correct answer added from previous information ("E")
  ]
},
{
  question: "Which principal task involves preparing for prevention during the planning or renovation of facilities?",
  answers: [
    { text: "Medical surveillance", correct: false },
    { text: "Exposure reduction", correct: false },
    { text: "Anticipation", correct: true }, // Correct answer added from previous information ("C")
    { text: "Compensation", correct: false },
    { text: "Management-worker cooperation", correct: false },
  ]
}









];

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
