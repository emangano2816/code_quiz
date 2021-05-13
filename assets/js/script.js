//Creating objects to store each question
let questions = [
    {
        question:"What does the return statement do in Javascript?",
        choiceA: "Declares a variable with a constant value.",
        choiceB: "Declares a function.",
        choiceC: "Declares a class.",
        choiceD: "Stops the execution of a function and returns a value from that function.",
        answer: "D"         
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

//Assigning HTML elements to variables
/*Header*/
const headerdisplay = document.querySelector(".header-container");
const hs_link = document.querySelector(".high-scores");
const seconds = document.querySelector(".seconds");
/*Quiz Intro*/
const quizdisplay = document.querySelector(".quiz-intro-display") 
const startquiz = document.querySelector(".start-btn");
/*Quiz Question*/
const questdisplay = document.querySelector(".quiz-questions-display");
const question = document.querySelector(".question");
const choice1 = document.querySelector(".answer1");
const choice2 = document.querySelector(".answer2");
const choice3 = document.querySelector(".answer3");
const choice4 = document.querySelector(".answer4");
const answer = document.querySelector(".result-container");
/*All Done*/
const donedisplay = document.querySelector(".alldone-display");
const initials = document.querySelector("#initials");
const submitinit = document.querySelector(".submit-init-btn");
/*High Score*/
const hsdisplay = document.querySelector(".highscore-display");
const hs_line = document.querySelector(".highscore-li")
const clearscores = document.querySelector(".clear-scores-btn");
const gobackstart = document.querySelector(".goback-btn")

//creating variables to track questions
const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let score = 0;

function displayQuestions() {
    //Hide quiz intro after start button is clicked and display the question section
    quizdisplay.setAttribute("style", "display: none");
    questdisplay.setAttribute("style", "display: block");

    question.innerText = questions[runningQuestion].question;
    choice1.innerText = questions[runningQuestion].choiceA;
    choice2.innerText = questions[runningQuestion].choiceB;
    choice3.innerText = questions[runningQuestion].choiceC;
    choice4.innerText = questions[runningQuestion].choiceD;
}

function checkAnswer(response) {
    if(questions[runningQuestion].answer==response) {
        console.log('Correct');
        answer.setAttribute("style", "display:block");
        answer.innerHTML = "Correct";
        score += 5;   //add 5 points for correct answer
        console.log(score);
        nextQuestion();
    } else {
        console.log('Incorrect');
        answer.setAttribute("style", "display:block");
        answer.innerHTML = "Incorrect";
        nextQuestion();
    }
}

function nextQuestion() {
    if (runningQuestion < lastQuestion) {
        runningQuestion++;  //go to the next question
        displayQuestions();
    } else {
        console.log("Show all-done section");
        questdisplay.setAttribute("style", "display: none");
        donedisplay.setAttribute("style","display: block")
    }
}
/*Start quize after user clicks 'start quiz' button*/
startquiz.addEventListener("click",displayQuestions)


