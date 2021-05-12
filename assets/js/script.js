//Creating objects to store each question
let questions = [
    {
        question:"What does the return statement do in Javascript?",
        choiceA: "Declares a variable with a constant value.",
        choiceB: "Declares a function.",
        choiceC: "Declares a class.",
        choiceD: "Stops the execution of a function and returns a value from that function.",
        answer: "B"         
    },
    {
        question:"How do you make a single line comment in JavaScript?",
        choiceA: "//",
        choiceB: "/*",
        choiceC: "/",
        choiceD: "<!--",
        answer: "A"
    }
]

const question = document.querySelector(".question");
const choice1 = document.querySelector(".answer1");
const choice2 = document.querySelector(".answer2");
const choice3 = document.querySelector(".answer3");
const choice4 = document.querySelector(".answer4");
const answer = document.querySelector(".result-container");

//creating variables to track questions
const lastQuestion = questions.length - 1;
let runningQuestion = 0;

function displayQuestions() {
    let q = questions[runningQuestion];

    question.innerText = q.question;
    choice1.innerText = q.choiceA;
    choice2.innerText = q.choiceB;
    choice3.innerText = q.choiceC;
    choice4.innerText = q.choiceD;
}

function checkAnswer(response) {
    if(questions[runningQuestion].answer==response) {
        console.log('Correct')
    } else {
        console.log('Incorrect')
    }
}



