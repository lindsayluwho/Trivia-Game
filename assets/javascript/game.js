
//set up an object containing trivia questions, corresponding correct answers, and wrong (filler) answers
var trivia = {
	questions = ["question 1", "question 2", "question 3", "question 4", "question 5", "question 6", "question 7", "question 8", "question 9", "question 10"],
	correctAnswers = ["correct answer 1", "correct answer 2", "correct answer 3", "correct answer 4", "correct answer 5", "correct answer 6", "correct answer 7", "correct answer 8", "correct answer 9", "correct answer 10"],
	fillerAnswers1 = ["filler 1", "filler 2", "filler 3", "filler 4", "filler 5", "filler 6", "filler 7", "filler 8", "filler 9", "filler 10"],
	fillerAnswers2 = ["filler 11", "filler 12", "filler 13", "filler 14", "filler 15", "filler 16", "filler 17", "filler 18", "filler 19", "filler 20"]
}

//set variables for incorrect and correct answers that will increment conditionally
var correctAnswers = 0;
var incorrectAnswers = 0;
//set index variable to use for incrementing through question and answer arrays
var index = 0;

//define a function to display the next question in the trivia.questions array and a countdown clock. will also be used to reset the game on button click.
function displayQuestion()
{

}

//define a function to display a screen when the correct answer is chosen, then calls the displayQuestion function after a setTimeout
function correctAnswer()
{

}

//define a function to display a screen when either the wrong answer is chosen or the player runs out of time, then calls the displayQuestion function after a setTimeout
function incorrectAnswer()
{

}

//set conditional to display final screen after last question in the trivia.questions array is shown to display final score and reset game button

