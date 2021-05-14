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
    },
    {
        question:"Which array method adds new elements to the end of an array and returns the new length?",
        choiceA: "join()",
        choiceB: "pop()",
        choiceC: "push()",
        choiceD: "map()",
        answer: "C"
    },
    {
        question:"Which string method checks whether a string ends with a specified string/characters?",
        choiceA: "endsWith()",
        choiceB: "concat()",
        choiceC: "charAt()",
        choiceD: "match()",
        answer: "A"
    },
    {
        question:"Which comparison operator means equal value and equal type?",
        choiceA: "==",
        choiceB: "!==",
        choiceC: "=",
        choiceD: "===",
        answer: "D"
    },
    {
        question:"Which is NOT a JavaScript data type?",
        choiceA: "Number",
        choiceB: "Variable",
        choiceC: "String",
        choiceD: "Boolean",
        answer: "B"
    },
    {
        question:"Which assignment operator subtracts a value from a variable?",
        choiceA: "=",
        choiceB: "+=",
        choiceC: "*=",
        choiceD: "-=",
        answer: "D"
    },
    {
        question:"Which is true about JavaScript objects:",
        choiceA: "They are containers for named values called properties or methods.",
        choiceB: "Object properties can be accessed with objectName.propertyName.",
        choiceC: "Object methods can be accessed with objectName.methodName().",
        choiceD: "All of the above",
        answer: "D"
    },
    {
        question:"Which results in false?",
        choiceA: "5=='5'",
        choiceB: "5===5.0",
        choiceC: "5==='5'",
        choiceD: "5>=2+3",
        answer: "C"
    },
    {
        question:"Which does NaN stand for?",
        choiceA: "Not a Number",
        choiceB: "No and No",
        choiceC: "Not a Nuetral",
        choiceD: "Not as Neat",
        answer: "A"
    }
]
//Assigning HTML elements to variables
/*Header*/
const headerdisplay = document.querySelector(".header-container");
const hs_link = document.querySelector(".high-scores");
const timedisplay = document.querySelector(".timer-container");
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
const totalscoredisplay = document.querySelector(".totalscore-line");
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

//creating variables to track time
let sec = 60;
let timer = setInterval(function() {
        seconds.innerHTML=sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
            allDone();
        }
    }, 1000);


function displayQuestions() {
    //Display changes after user clicks start quiz
    quizdisplay.setAttribute("style", "display: none");
    questdisplay.setAttribute("style", "display: block");
    timedisplay.setAttribute("style", "visibility: visible")

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
        sec -= 10;
        nextQuestion();
    }
}

function nextQuestion() {
    if (runningQuestion < lastQuestion && sec > 0) {
        runningQuestion++;  //go to the next question
        displayQuestions();
    } else {
        console.log("Show all-done section");
        allDone();
    }
}

function allDone() {
    //Display changes after time runs out or all questions answered
    questdisplay.setAttribute("style", "display: none");
    donedisplay.setAttribute("style","display: block")
    timedisplay.setAttribute("style", "visibility:hidden")

    totalscoredisplay.textContent = "Total score this round: " + score;

    submitinit.addEventListener("click", storeInitials);
}

function storeInitials(event) {
    event.preventDefault();
    event.stopPropagation();
    let storedinit = initials.value;
    console.log("hey I'm here");
    console.log(storedinit);
    

    // localStorage.setItem("initials", initials.value);
    // localStorage.setItem("score", score.val());
}


/*Start quize after user clicks 'start quiz' button*/
startquiz.addEventListener("click",displayQuestions)


