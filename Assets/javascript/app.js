var startBtn = document.getElementById("startBtn"); 
var questions = [{
    question: "During the 1980s for 6 consecutive years what breed of dog was most popular in the us?",
    answers: ["Cocker spaniel", "German shepherd", "Labrador retriever", "Poodle"],
    corretAnwser: "Cocker spaniel",
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
    counter: 30,
    correct:0,
    incorrect:0,
    countdown: function(){

    },
    loadQuestion: function(){
        
    },
    nextQuestion: function(){

    },
    timeUp: function(){

    },
    results: function(){

    },
    clicked: function(){

    },
    answeredCorrectly: function(){

    },
    answeredIncorrectly: function(){

    },
    reset: function(){

    }

}


 


//if timeleft-counter = 0, clear interval 

//event.preventDefault



function initialize() {

var hiddenDiv = document.getElementsByClassName("main-container");
hiddenDiv[0].style.display = "block";  
startBtn.style.display = "none"; 

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
            //timer = duration;
            console.log("Time Up!"); 
            game.timeUp(); 
        }
    }, 1000);
}


window.onload = function () {
    var fourMinutes = 60 * 1,
    display = document.querySelector('#timer');
    startTimer(fourMinutes, display); 
    $("#subwrapper").html("<h3>"+questions[game.currentQuestion].question+"</h3>")

    for(var i=0; i<questions[game.currentQuestion].answers.length;i++) {
        $("#button-").val(i+'data-name=' +questions[game.currentQuestion].answers[i]
        +questions[game.currentQuestion].answers[i]);
    }
}


// for loop for questions

for (i = 0; i<question.length; i++) {

    if (i==0) {

        text = question[i];   
    }
    document.getElementById('question').innerHTML= text;



}

var option = ["Cocker Spaniel", "German Shepherd", "Labrador Retriever", "Poodle"];

for (i = 0; i< option.length; i++) {

    

}








