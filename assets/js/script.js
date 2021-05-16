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
const alldoneheader = document.querySelector(".alldone-header");
// const totalscoredisplay = document.querySelector(".totalscore-line");
const scoredisplay=document.querySelector("#score");
const initials = document.querySelector("#initials");
const submitinit = document.querySelector(".submit-init-btn");
/*High Score*/
const hsdisplay = document.querySelector(".highscore-display");
const hs_container = document.querySelector(".highscore-list")
const clearscores = document.querySelector(".clear-scores-btn");
const gobackstart = document.querySelector(".goback-btn")

//creating variables to track questions, score, and which page
const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let score = 0;
let gamestarted = false;
let alldonepage = false;

//creating variables to track time
let sec;
let timer;

//creating variable to track highscores
let highscores = [];
//Display stored Highscores upon refresh, if they exist
init();


function displayQuestions() {

    //Display changes after user clicks start quiz
    quizdisplay.setAttribute("style", "display: none");
    questdisplay.setAttribute("style", "display: block");
    timedisplay.setAttribute("style", "visibility: visible");

   
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
    if (sec > 0) {
        if (runningQuestion < lastQuestion) {
        runningQuestion++;  //go to the next question
        displayQuestions();
        } else {
            console.log("Show all-done section");
            alldonepage = true;
            allDone("All Done!", "green");
        } 
    } else {
            alldonepage = true;
            allDone("Time's Up!", "red")
        }
    }

function allDone(message, messagecolor) {
    //Display changes after time runs out or all questions answered
    questdisplay.setAttribute("style", "display: none");
    donedisplay.setAttribute("style","display: block");
    timedisplay.setAttribute("style", "visibility:hidden");
    answer.setAttribute("style", "display:none");
    answer.innerHTML = "";

    alldoneheader.textContent = message;
    alldoneheader.style.color = messagecolor;
    scoredisplay.textContent = score;

    gamestarted = false;
    clearInterval(timer);
    runningQuestion = 0;


    submitinit.addEventListener("click", function(event){
        event.preventDefault();
        event.stopPropagation();
        
        if(checkLength() && checkAlphas(initials.value.toString())){
            highscores.push(initials.value.toString().toUpperCase() + " - " + score.toString());
            score = 0;
            
        } else {
            alert("Please provide a minimum of two and no more than 3 initials.");
            return;
        }  
        
        initials.value="";
        storeHighscores();
        renderHighscores();
        displayHighscores();
    });
}

function checkLength () {
    if (initials.value.toString().length > 1 && initials.value.toString().length <= 3) {
        return true;
    } else {
        return false;
    }
}

function checkAlphas (entry){
    var letters = /^[A-Za-z]+$/;
    if (entry.match(letters)) {
        return true;
    } else {
        return false;
    }
}

function storeHighscores() {
    //stringify and set key in localStorage to highscores array
    localStorage.setItem("highscores",JSON.stringify(highscores));
}

//Render scores into a highscore list as <li> elements
function renderHighscores() {
    hs_container.innerHTML = "";

    for (var i = 0; i < highscores.length; i++) {
        var hs_line = highscores[i];

        var hsli = document.createElement("li");
        hsli.textContent = hs_line;
        hs_container.appendChild(hsli);
    }
}

//Run when the Highscore page is displayed
function init() {
    var storedHS = JSON.parse(localStorage.getItem("highscores"));

    if (storedHS !== null) {
        highscores = storedHS;
    }

    renderHighscores();
}

function displayHighscores() {
    hs_link.setAttribute("style","visibility:hidden");
    donedisplay.setAttribute("style","display:none");
    hsdisplay.setAttribute("style", "display:block");

    alldonepage = false;

    init();

}

//Event listener for Go Back to Start button
gobackstart.addEventListener("click", function(event) {
    event.preventDefault();
    event.stopPropagation();
    hs_link.setAttribute("style","visibility:visible");
    hsdisplay.setAttribute("style", "display:none");
    quizdisplay.setAttribute("style","display:block");
});

//Event listener for Clear Scores button
clearscores.addEventListener("click", function(event) {
    event.preventDefault();
    event.stopPropagation();
    
    localStorage.setItem("highscores","");
    hs_container.textContent = "";
})

//Event listener View Highs Scores link
hs_link.addEventListener("click", function(event) {
    event.preventDefault();
    event.stopPropagation();

    if (gamestarted === true) {
        if (confirm("You are exiting the game.  Click 'OK' to exit or 'Cancel' to continue playing.")) {
            //Display changes after user click link
            quizdisplay.setAttribute("style", "display:none");
            questdisplay.setAttribute("style","display:none");
            answer.setAttribute("style", "display:none");
            hsdisplay.setAttribute("style", "display:block");
            hs_link.setAttribute("style", "visibility:hidden");
            timedisplay.setAttribute("style", "visibility: hidden");

            //Resetting timer and start question
            clearInterval(timer);
            runningQuestion = 0;
        }
    } else if (alldonepage ===  true) {
        if (confirm("If you leave this page you won't be able to save your high score. Click 'OK' to exit or 'Cancel' to input initials.")) {
            donedisplay.setAttribute("style", "display:none");
            hsdisplay.setAttribute("style", "display:block");
            hs_link.setAttribute("style", "visibility:hidden");
            timedisplay.setAttribute("style", "visibility: hidden");
        }
    } else {
        quizdisplay.setAttribute("style", "display:none");
        hsdisplay.setAttribute("style", "display:block");
        hs_link.setAttribute("style", "visibility:hidden");
        timedisplay.setAttribute("style", "visibility: hidden");
    }
})


/*Start quiz after user clicks 'start quiz' button*/
startquiz.addEventListener("click", function(event) {
    event.preventDefault();
    event.stopPropagation();

    sec = 60;
    seconds.innerHTML = sec;
    timer = setInterval(function() {
        seconds.innerHTML=sec;
        sec--;
        if (sec === 0) {
            clearInterval(timer);
            alldonepage = true;
            allDone("Time's Up!", "red");
        }
    }, 1000);

    gamestarted = true;
    displayQuestions();
});


