//set up an object containing trivia questions, corresponding correct answers, and wrong (filler) answers
var trivia;
// //set variables for incorrect and correct answers that will increment conditionally
var correctAnswers = 0;
var incorrectAnswers = 0;
// //set index variable to use for incrementing through question and answer arrays
var index = 0;


//use AJAX call to get 10 animal trivia questions from Open Trivia Database API, nest functions within callback function because AJAX call is async

$.ajax({
    url: "https://opentdb.com/api.php?amount=10&category=27&type=multiple",
    method: "GET"
}).done(function(response) {

    trivia = response;

    //set conditional to display final screen after last question in the trivia.questions array is shown to display final score and reset game button
    if (index >= trivia.results.length) {
        $(".display").html("Woo! Your score is: <br>Correct: " + correctAnswers + "<br>Incorrect: " + incorrectAnswers);
        $(".display").append("<br><br><button class='reset-button' id='replay'>Play Again</button>");
        $(".reset-button").click(function() {
            index = 0;
            correctAnswers = 0;
            incorrectAnswerss = 0;
            displayQuestion();
        });
    } else { displayQuestion(); }

    // //define a function to display the next question in the trivia.questions array and a countdown clock. will also be used to reset the game on button click.

    function displayQuestion() {
        if (index >= trivia.results.length) {
            $(".display").html("Woo! Your score is: <br>Correct: " + correctAnswers + "<br>Incorrect: " + incorrectAnswers);
            $(".display").append("<br><br><button class='button' id='replay'>Play Again</button>");
            $(".button").click(function() {
                index = 0;
                correctAnswers = 0;
                incorrectAnswerss = 0;
                displayQuestion();
            });
        }

        var answers = [trivia.results[index].incorrect_answers[0], trivia.results[index].incorrect_answers[1], trivia.results[index].incorrect_answers[2], trivia.results[index].correct_answer];

        var rightAnswer = trivia.results[index].correct_answer;

        function shuffle(array) {
            var i = 0,
                j = 0,
                temp = null

            for (i = array.length - 1; i > 0; i -= 1) {
                j = Math.floor(Math.random() * (i + 1))
                temp = array[i]
                array[i] = array[j]
                array[j] = temp
            }
        }

        //display potential answers in shuffled order so correct answer is not always in the same location

        shuffle(answers);

        $(".display").html(trivia.results[index].question + "<br><br>");

        for (k = 0; k < answers.length; k++) {
            $(".display").append("<button class='button' value='" + answers[k] + "'>" + answers[k] + "</button>");
        }

        // define a countdown clock to display on question screen, screen progresses to incorrectAnswer if clock runs out via setTimeout 

        var timeRemaining = 30;
        $(".display").append("<div id='countdown'></div>");
        var countdownClock = setInterval(countdown, 1000);

        function countdown() {

            $("#countdown").html("<br><br>Time remaining: " + timeRemaining);
            timeRemaining--;
            if (timeRemaining == -1) {
            	timeRemaining = 30;
            	clearInterval(countdownClock);
            	incorrectAnswer(); }
        };


        $(".button").click(function() {
        		clearInterval(countdownClock);
            //button clicked is correct
            if (this.value == trivia.results[index].correct_answer) {
                
                correctAnswer();
            }


            //button clicked is incorrect
            else {
                incorrectAnswer();
            }

        });

        // //define a function to display a screen when either the wrong answer is chosen or the player runs out of time, then calls the displayQuestion function after a setTimeout
        function incorrectAnswer() {
            $(".display").html("Aww, nuts! Looks like the correct answer was " + rightAnswer + ".");
            incorrectAnswers++;
            index++;
            setTimeout(displayQuestion, 3000);

        }

        // //define a function to display a screen when the correct answer is chosen, then calls the displayQuestion function after a setTimeout
        function correctAnswer() {
            $(".display").html("Correct!");
            correctAnswers++;
            index++;
            setTimeout(displayQuestion, 3000);
        }

    }

});