Screenshot of website is below the readme file.
URL:  https://rslaughter12.github.io/js-quiz-game/

Acceptance Criteria for this project: 
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
THEN I can save my initials and score


When the user is met with this quiz they will be presented with a blue screen with one button that says "start quiz". 
When that button is pushed then the user will go through a series of five questions. 
They have a timer that starts and gives them 75 seconds to complete the quiz, with a penalty of minus 5 seconds if they user gets a question wrong. 

When the quiz ends the user is presented with their final time. This shows how many seconds that they had remaining. The objective of the game is that the user with the most seconds remaining is the winner. 

The user is then presented with a box where they can enter their name for the leaderboard. 
This data gets stored in the local storage of the user's web browser and can get called back in the console log of their web browser using localStorage.getItem etc... (there is not scoreboard, struggled to figure out how to complete that).

If the user runs out of time on their quiz attempted they will be brought to the results page to save their name and score.

