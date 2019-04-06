var questionsBank = {
    questions: ["1. What gift did Angela give Creed in 'Classy Christmas,' which aired in December 2010?", "2. In the second season, Michael treats the office staff to a 'booze cruise' in freezing January weather so he can perform motivational speaking. When Michael becomes frustrated that nobody is listening to him, what false allegation does he exclaim to get everyone's attention?", "3. Who was the only character to successfully run barefoot across hot coals in 'Beach Games,' a third-season episode where Michael takes the office gang to Lake Scranton?", "4. What ringtone song played repeatedly on Andy's cell phone when Jim hid it in the ceiling at the office?", "5. What was the name of Angela's sick cat that Dwight killed?", "6. Pam once participated in an art exhibit, which went badly. As she was leaving, Michael showed up and bought her drawing of their office building. What medium did Pam use to create this masterpiece?"],
    a: ["A kitty calendar", "The sky is falling", "Pam", "Another Brick in the Wall", "Angel Tail", "oil paint"],
    b: ["A multi-pack of underarm deodorant", "Dwight fell overboard", "Michael", "867-5309/Jenny", "Sprinkles", "Pen-and-ink"],
    c: ["Two tickets to see the band Creed perform", "The booze is gone", "Creed", "Can't Touch This", "Mr. Longwhiskers", "Charcoal"],
    d: ["A $20 gift certificate to the Scranton Skillet", "The ship is sinking", "Phyllis", "Rockin' Robin", "Princess Puss", "Crayons"],
    correctanswer: ["B", "B", "A", "D", "B", "A", "B"],
}

// var question = $("#question");
// var answerA = $(".answerChoiceA");
// var answerB = $(".answerChoiceB");
// var answerC = $(".answerChoiceC");
// var answerD = $(".answerChoiceD");

// for( var i = 0; i < questionsBank.questions.length; i++){

// var newQuestion = $("<form>");
// newQuestion.text(questionsBank.questions[i]);
// question.append(newQuestion);

// var answerChoiceA = $("<button>");
// answerChoiceA.attr("type","radio")
// answerChoiceA.attr("name", "question"+[i]);
// answerChoiceA.attr("value","A")
// answerChoiceA.html("A: " + questionsBank.a[i]);
// answerA.append(answerChoiceA);


// var answerChoiceB = $("<p>");
// answerChoiceB.text("B: " + questionsBank.b[i]);
// answerB.append(answerChoiceB);

// var answerChoiceC = $("<p>");
// answerChoiceC.text("C: " + questionsBank.c[i]);
// answerC.append(answerChoiceC);

// var answerChoiceD = $("<p>");
// answerChoiceD.text("D: " + questionsBank.d[i]);
// answerD.append(answerChoiceD);
// }



var clock;
var time = 30;
var correct = 0;
var incorrect = 0;
var score;
var audio = new Audio("The-Office.mp3")


$("#timer").html("Time Remaing: " + time)
$("#score").html("Correct: " + correct);
$("#incorrect").html("Incorrect: " + incorrect);

function timer() {
    time--;
    $("#timer").html("Time Remaing: " + time);

    if(time === 0){
        submit()
    }
}


$("#start-button").on("click", function () {
    document.getElementById("question").style.display = "inline";
    document.getElementById("timer").style.display = "inline";
    document.getElementById("start-button").style.display = "none";
    document.getElementById("dm").style.display = "none";
    document.getElementById("background").style.height = "auto";
    clock = setInterval(timer, 1000);
    timer();
    audio.play();
});

$("#submit-button").on("click", function () {
    submit();
    moveTop();

});




function submit() {
    var gif = ["https://media.giphy.com/media/Cz1it5S65QGuA/giphy.gif", "https://media.giphy.com/media/yltGOJQBMBn7W/giphy.gif", "https://media.giphy.com/media/lMVNl6XxTvXgs/giphy.gif", "https://media.giphy.com/media/8VrtCswiLDNnO/giphy.gif","https://media.giphy.com/media/dxocWugDZRyG4/giphy.gif","https://media.giphy.com/media/xtMrejfHu8JEs/giphy.gif","https://media.giphy.com/media/awPKo9G1LsgMM/giphy.gif"];
    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var question5 = document.quiz.question5.value;
    var question6 = document.quiz.question6.value;


    if (question1 === "B") {
        correct++;
    }else{
        incorrect++;
    }
    if (question2 === "D") {
        correct++;
    }else{
        incorrect++;
    }
    if (question3 === "A") {
        correct++;
    }else{
        incorrect++;
    }
    if (question4 === "D") {
        correct++;
    }else{
        incorrect++;
    }
    if (question5 === "B") {
        correct++;
    }else{
        incorrect++;
    }
    if (question6 === "D") {
        correct++;
    }else{
        incorrect++;
    }

    score = correct;

    $("#score").html("Correct: " + correct);
    $("#incorrect").html("Incorrect: " + incorrect);
    $("#score").css("display","block");
    $("#incorrect").css("display","block");
    $("#question").css("display","none");
    $("#timer").css("display","none");
    $("#start-button").css("display","none");
    $("#picture").attr("src",gif[score]);
    clearInterval(clock);
    
}

function moveTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }