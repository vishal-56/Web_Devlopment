const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Rome"],
        answer: "Paris"
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: "4"
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        options: ["Harper Lee", "J.K. Rowling", "Stephen King", "Charles Dickens"],
        answer: "Harper Lee"
    }
];

const quizContainer = document.getElementById("quiz-container");
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const submitButton = document.getElementById("submit-btn");
const resultElement = document.getElementById("result");

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = "";

    currentQuestion.options.forEach((option, index) => {
        const input = document.createElement("input");
        input.type = "radio";
        input.name = "option";
        input.value = option;
        input.id = "option" + index;

        const label = document.createElement("label");
        label.textContent = option;
        label.htmlFor = "option" + index;

        optionsElement.appendChild(input);
        optionsElement.appendChild(label);
    });
}

function checkAnswer() {
    const selectedOption = document.querySelector("input[name='option']:checked");
    if (!selectedOption) {
        alert("Please select an option.");
        return;
    }

    const userAnswer = selectedOption.value;
    const correctAnswer = questions[currentQuestionIndex].answer;

    if (userAnswer === correctAnswer) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    quizContainer.style.display = "none";
    resultElement.textContent = `Your score: ${score}/${questions.length}`;
    resultElement.style.display = "block";
}

loadQuestion();

submitButton.addEventListener("click", checkAnswer);
