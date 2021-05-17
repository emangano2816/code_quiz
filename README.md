# Homework Assignment 4: Code Quiz

## URLs
1. Deployed application: https://emangano2816.github.io/hw4_code_quiz/
2. GitHub Repository: https://github.com/emangano2816/hw4_code_quiz

## User Story
```
AS A coding boot camp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers
```
## Acceptance Criteria
```
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and my score
```
## Achieving Acceptance Criteria
1. The "home" page of the application explains the rules of the game and presents the user with a 'Start Quiz' button.  When the button is clicked a 30 second timer begins and the user is presented with the first question.
2. The user answers the questions by clicking on the answer buttons for the question.  Upon clicking an aswer button the user will be presented with additional.
3.  If the user answers the question incorrectly, 10 seconds is deducted from the timer.  If the user answers the question correctly, the user scores 5 points.
4.  If the user answers all 10 questions or the time runs out, the game is over.  
5.  Upon answering all 10 questions or if the time runs out, the user is redirected to the 'All Done!' or 'Time's Up!' page, where the user is asked to provide initials to save the score.

## Meeting Application Quality
The application is easy to navigate and uses pop-ups to guide the user in decision making.  For example, if the user has started the quiz and then clicks on 'View Highscores' a pop-up wil notify the user they they are about to leave the quiz and will not be able to save their score.  On the 'All Done!/Time's Up!' page, if the user tries to leave the page without providing initials pop-ups will appear to aler the user to this.  


## Screenshot
![screenshot](/assets/images/)

