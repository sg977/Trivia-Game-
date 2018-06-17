var startBtn = document.getElementById("startBtn"); 
var question = ["During the 1980s for 6 consecutive years what breed of dog was most popular in the us?", "Which of the following items was owned by the fewest U.S homes in 1990?","In the year 1900 in the U.S what were the most popular first names given to boy and girl babies?", "When did the Liberty Bell get its name?"];
var correct = 0;
var incorrect = 0; 
/*
var counter = 0; 
var timeLeft = 120;
*/

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

        if (--timer < 0) {
            timer = duration; 
        }
    }, 1000);
}


window.onload = function () {
    var fourMinutes = 60 * 4,
    display = document.querySelector('#timer');
    startTimer(fourMinutes, display); 
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








