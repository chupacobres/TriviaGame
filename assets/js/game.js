var timeLeft = 60;
var timer = $("#timer");
var timerId = setInterval(countdown, 1000);

var score = 0;
var radio0 = document.getElementsByName("pearl");
var radio1 = document.getElementsByName("police");
var radio2 = document.getElementsByName("jovi");
var radio3 = document.getElementsByName("apple");
var radio4 = document.getElementsByName("windowsos");
var radio5 = document.getElementsByName("blues");
var radio6 = document.getElementsByName("indians");
var radio7 = document.getElementsByName("nahuatl");
var radio8 = document.getElementsByName("pirate");
var radio9 = document.getElementsByName("canibal");
var button = $(".btn");




function submit() {
    $('#hide').hide();
    for (i = 0; i < radio0.length; i++) {
        if (radio0[i].checked) {
            var answer0 = radio0[i].value;
            console.log("answer to 0 is " + answer0);
        }

    }
    if (answer0 === "Blaylock's jersey number") {
        score++
    }



    for (i = 0; i < radio1.length; i++) {
        if (radio1[i].checked) {
            var answer1 = radio1[i].value;
            console.log("answer to 1 is " + answer1);
        }
    }
    if (answer1 === "Stewart Copeland") {
        score++



    }
    for (i = 0; i < radio2.length; i++) {
        if (radio2[i].checked) {
            var answer2 = radio2[i].value;
            console.log("answer to 2 is " + answer2);
        }
    }
    if (answer2 === "Dave Sabo") {
        score++
    }



    for (i = 0; i < radio3.length; i++) {
        if (radio3[i].checked) {
            var answer3 = radio3[i].value;
            console.log("answer to 4 is " + answer3);
        }
    }
    if (answer3 === "Basic") {
        score++
    }
    for (i = 0; i < radio4.length; i++) {
        if (radio4[i].checked) {
            var answer4 = radio4[i].value;
            console.log("answer to 4 is " + answer4);
        }
    }
    if (answer4 === "Classic Mac OS") {
        score++
    }
    for (i = 0; i < radio5.length; i++) {
        if (radio5[i].checked) {
            var answer5 = radio5[i].value;
            console.log("answer to 4 is " + answer5);
        }
    }
    if (answer5 == "12") {
        score++
    }
    for (i = 0; i < radio6.length; i++) {
        if (radio6[i].checked) {
            var answer6 = radio6[i].value;
            console.log("answer to 6 is " + answer6);
        }
    }
    if (answer6 === "The Arawaks tribe") {
        score++
    }
    for (i = 0; i < radio7.length; i++) {
        if (radio7[i].checked) {
            var answer7 = radio7[i].value;
            console.log("answer to 7 is " + answer7);
        }
    }
    if (answer7 === "All of the above") {
        score++
    }
    for (i = 0; i < radio8.length; i++) {
        if (radio8[i].checked) {
            var answer8 = radio8[i].value;
            console.log("answer to 8 is " + answer8);
        }
    }
    if (answer8 === "To be able to see in the dark") {
        score++
    }
    for (i = 0; i < radio9.length; i++) {
        if (radio9[i].checked) {
            var answer9 = radio9[i].value;
            console.log("answer to 9 is " + answer9);
        }
    }
    if (answer9 === "Butterlies") {
        score++
    }
    clearTimeout(timerId);
    timer.text("Score: " + score + "/10");
}
function countdown() {
    if (timeLeft == 0) {
      clearTimeout(timerId);
      submit();
      timer.text("Score: " + score + "/10");
      $('#hide').hide();
    } else {
        timer.text(timeLeft + " seconds ");
      timeLeft--;
    }
  }