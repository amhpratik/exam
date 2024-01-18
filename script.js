const questions = [
    
  {
    question: "How many types of nucleic acids exist in the DNA?",
    answers: [
      { text: "3", correct: false },
      { text: "4", correct: true },
      { text: "5", correct: false },
      { text: "6", correct: false },
      { text: "7", correct: false },
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
  },
  {
    question: "Which governmental responsibility involves enforcing legislation related to worker health and safety?",
    answers: [
      { text: "Inspections and Compliance", correct: false },
      { text: "Research and Guidance", correct: false },
      { text: "Regulatory Framework", correct: true },
      { text: "Occupational Health Services", correct: false },
      { text: "Advocacy and Collaboration", correct: false }
    ]
  },
  {
    question: "What does management aim to achieve through regular risk assessments in the workplace?",
    answers: [
      { text: "Advocacy", correct: false },
      { text: "Compliance", correct: false },
      { text: "Creating a safe working environment", correct: true },
      { text: "Identifying root causes", correct: false },
      { text: "Offering wellness programs", correct: false }
    ]
  },
  {
    question: "Which management responsibility involves educating employees about potential hazards and safe work practices?",
    answers: [
      { text: "Incident Reporting and Investigation", correct: false },
      { text: "Risk Assessment and Mitigation", correct: false },
      { text: "Health Promotion and Wellness Programs", correct: false },
      { text: "Training and Education", correct: true },
      { text: "Providing Occupational Health Services", correct: false }
    ]
  },
  {
    question: "What is the primary responsibility of management in incident reporting and investigation?",
    answers: [
      { text: "Identifying root causes", correct: true },
      { text: "Compliance inspections", correct: false },
      { text: "Offering wellness programs", correct: false },
      { text: "Advocacy", correct: false },
      { text: "Hazard identification", correct: false }
    ]
  },
  {
    question: "Which governmental responsibility involves ensuring compliance with health and safety regulations through regular inspections?",
    answers: [
      { text: "Research and Guidance", correct: false },
      { text: "Occupational Health Services", correct: false },
      { text: "Advocacy and Collaboration", correct: false },
      { text: "Regulatory Framework", correct: true },
      { text: "Inspections and Compliance", correct: false }
    ]
  },
  {
    question: "What proactive measures can management take to promote employee health and well-being?",
    answers: [
      { text: "Conducting regular risk assessments", correct: false },
      { text: "Providing Occupational Health Services", correct: false },
      { text: "Offering wellness programs", correct: true },
      { text: "Advocating for worker health", correct: false },
      { text: "Implementing safety protocols", correct: false }
    ]
  },
  {
    question: "What is a key aspect of governmental responsibilities in research and guidance?",
    answers: [
      { text: "Offering wellness programs", correct: false },
      { text: "Providing legal frameworks", correct: false },
      { text: "Ensuring compliance", correct: false },
      { text: "Collaborating with experts", correct: true },
      { text: "Conducting regular inspections", correct: false }
    ]
  },
  {
    question: "In what way can management protect the health of employees during risk assessments?",
    answers: [
      { text: "Developing appropriate strategies", correct: true },
      { text: "Advocating for worker health", correct: false },
      { text: "Offering wellness programs", correct: false },
      { text: "Creating a safe working environment", correct: false },
      { text: "Providing legal frameworks", correct: false }
    ]
  },
  {
    question: "What is the responsibility of governmental agencies in occupational health services?",
    answers: [
      { text: "Offering wellness programs", correct: false },
      { text: "Advocating for worker health", correct: false },
      { text: "Providing medical support and rehabilitation", correct: true },
      { text: "Creating a safe working environment", correct: false },
      { text: "Conducting regular risk assessments", correct: false }
    ]
  },
  {
    question: "How does management contribute to worker health through health promotion and wellness programs?",
    answers: [
      { text: "By enforcing legislation", correct: false },
      { text: "By conducting regular inspections", correct: false },
      { text: "By promoting work-life balance", correct: true },
      { text: "By developing legal frameworks", correct: false },
      { text: "By collaborating with experts", correct: false }
    ]
  },


            
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
