var startBtn = document.getElementById("startBtn"); 

$(document).on('click', '.answer-button', function(e){
    game.clicked(e);
})

$(document).on('click', '#reset', function(){
    game.reset();
})
var questions = [{
    question: "During the 1980s for 6 consecutive years what breed of dog was most popular in the us?",
    answers: ["Cocker spaniel", "German shepherd", "Labrador retriever", "Poodle"],
    correctAnswer: "Cocker spaniel",
    image: "Assets/images/cocker spaniel.gif"},

    {
    question: "Which of the following items was owned by the fewest U.S homes in 1990?",
    answers: ["Home computer", "Compact disk player", "Cordless phone", "Dishwasher"],
    correctAnswer: "Compact disk player",
    image : "Assets/images/disk player.gif"},
    {
    question: "In the year 1900 in the U.S what were the most popular first names given to boy and girl babies?",
    answers: ["William and Elizabeth", "Joseph and Catherine", "John and Marry", "George and Anne"],
    correctAnswer: "John and Anne",
    image: "Assets/images/john and marry.gif"},
    {
    question: "When did the Liberty Bell get its name?",
    answers: ["When it was made in 1701", "When it rang on July 4, 1776", "In the 19th century, when it became a symbol of the abolition of slavery", "None of the above"], 
    correctAnswer: "In the 19th century, when it became a symbol of the abolition of slavery",
    image: "Assets/images/liberty bell.gif"}];

var game = {
    questions: questions,
    currentQuestion:0,
    
    correct:0,
    incorrect:0,
    unanswered:0,
    //countdown: function(){

    //},
    loadQuestion: function(){
        var oneMinute = 60 * 1,
        display = document.querySelector('#timer');
        startTimer(oneMinute, display); 
        $("#subwrapper").html("<h3>"+questions[game.currentQuestion].question+"</h3>")
    
        for(var i=0; i<questions[game.currentQuestion].answers.length;i++) {
            $("#answer-group").append('<button class="answer-button" id="button-'+i+'" data-name="'
        +questions[game.currentQuestion].answers[i]+'">'+questions[game.currentQuestion].answers[i]+'</button>');
        }

        
   },
    nextQuestion: function(){
        //reset the timer when it goes to next question 
        timer = 60; 
        $('#timer').html(timer); 
        game.currentQuestion++;
        window.onload; 

    },
    timeUp: function(){
        clearInterval(timer); 
        game.unanswered++; 
        $('#subwrapper').html('<h2>Out of time!');
        $('#subwrapper').append('<h3> The Correct Answer Was: ' + questions[game.currentQuestion].correctAnswer+'<h3>');
        if(game.currentQuestion==questions.length-1) {
            setTimeout(game.results,3*1000);

        } else {
            setTimeout(game.nextQuestion,3*1000);
        }

    },
    results: function(){
        clearInterval(timer);
        $('#subwrapper').html("<h2>All Done");
        $('#subwrapper').append("<h3>Correct: "+game.correct+"<h3>");
        $('#subwrapper').append("<h3>Incorrect: "+game.incorrect+"<h3>");
        $('#subwrapper').append("<h3>Unanswered: "+game.unanswered+"<h3>");
        $('#subwrapper').append();

    },
    clicked: function(e){
        clearInterval(timer);
        if($(e.target).data("name")==questions[game.currentQuestion].correctAnswer){
            game.answeredCorrectly();
        } else {
            game.answeredCorrectly();
        }

    },
    answeredCorrectly: function(){
        console.log("You got it!");
        clearInterval(timer);
        game.correct++;
        $("#subwrapper").html("<h2>You Got It</h2>");
        if(game.currentQuestion==questions.length-1) {
            setTimeout(game.results,3*1000);

        } else {
            setTimeout(game.nextQuestion,3*1000);
        }

    },
    answeredIncorrectly: function(){
        console.log("Wrong!")
        clearInterval(timer);
        game.incorrect++;
        $("#subwrapper").html("<h2>You Got Wrong</h2>");
        $('#subwrapper').append('<h3> The Correct Answer Was: ' + questions[game.currentQuestion].correctAnswer+'<h3>');
        if(game.currentQuestion==questions.length-1) {
            setTimeout(game.results,3*1000);

        } else {
            setTimeout(game.nextQuestion,3*1000);
        }

    },
    reset: function(){
        game.currentQuestion = 0;
        game.timer = 0;
        game.correct = 0;
        game.incorrect = 0; 
        game.unanswered = 0; 
        oneMinute = 0; 
        initialize(); 

    }

}

function initialize() {

var hiddenDiv = document.getElementsByClassName("main-container");
hiddenDiv[0].style.display = "block";  
startBtn.style.display = "none"; 
game.loadQuestion(); 

}


function startTimer(duration, display) {
    var timer = duration, minutes, seconds;

    setInterval (function() {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);


        minutes = minutes <10 ? "0" + minutes : minutes;
        seconds = seconds <10 ? "0" + seconds : seconds;


        display.textContent = minutes + ":" + seconds;

        if (--timer <=0) {
            timer = duration;
            //call function to stop timer 
            game.timeUp(); 
        }
    }, 1000);
}














