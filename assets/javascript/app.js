var questionsBank = {
  questions: [
    "1. What gift did Angela give Creed in 'Classy Christmas,' which aired in December 2010?",
    "2. In the second season, Michael treats the office staff to a 'booze cruise' in freezing January weather so he can perform motivational speaking. When Michael becomes frustrated that nobody is listening to him, what false allegation does he exclaim to get everyone's attention?",
    "3. Who was the only character to successfully run barefoot across hot coals in 'Beach Games,' a third-season episode where Michael takes the office gang to Lake Scranton?",
    "4. What ringtone song played repeatedly on Andy's cell phone when Jim hid it in the ceiling at the office?",
    "5. What was the name of Angela's sick cat that Dwight killed?",
    "6. Pam once participated in an art exhibit, which went badly. As she was leaving, Michael showed up and bought her drawing of their office building. What medium did Pam use to create this masterpiece?"
  ],
  a: [
    "A kitty calendar",
    "The sky is falling",
    "Pam",
    "Another Brick in the Wall",
    "Angel Tail",
    "oil paint"
  ],
  b: [
    "A multi-pack of underarm deodorant",
    "Dwight fell overboard",
    "Michael",
    "867-5309/Jenny",
    "Sprinkles",
    "Pen-and-ink"
  ],
  c: [
    "Two tickets to see the band Creed perform",
    "The booze is gone",
    "Creed",
    "Can't Touch This",
    "Mr. Longwhiskers",
    "Charcoal"
  ],
  d: [
    "A $20 gift certificate to the Scranton Skillet",
    "The ship is sinking",
    "Phyllis",
    "Rockin' Robin",
    "Princess Puss",
    "Crayons"
  ],
  correctanswer: []
};

var question = $("#question");
var answerA = $(".answerChoiceA");
var answerB = $(".answerChoiceB");
var answerC = $(".answerChoiceC");
var answerD = $(".answerChoiceD");

for (var i = 0; i < questionsBank.questions.length; i++) {
  var newQuestion = $("<div>");
  newQuestion.attr("id", "q" + [i]);
  newQuestion.attr("class", "question");
  newQuestion.text(questionsBank.questions[i]);
  question.append(newQuestion);

  var answerChoiceA = $("<div>");
  answerChoiceA.html("A: " + questionsBank.a[i]);
  answerChoiceA.attr("id", "q" + [i] + "a");
  answerChoiceA.attr("class", "answer");
  newQuestion.append(answerChoiceA);

  var answerChoiceB = $("<div>");
  answerChoiceB.text("B: " + questionsBank.b[i]);
  answerChoiceB.attr("id", "q" + [i] + "b");
  answerChoiceB.attr("class", "answer");
  newQuestion.append(answerChoiceB);

  var answerChoiceC = $("<div>");
  answerChoiceC.text("C: " + questionsBank.c[i]);
  answerChoiceC.attr("id", "q" + [i] + "c");
  answerChoiceC.attr("class", "answer");
  newQuestion.append(answerChoiceC);

  var answerChoiceD = $("<div>");
  answerChoiceD.text("D: " + questionsBank.d[i]);
  answerChoiceD.attr("id", "q" + [i] + "d");
  answerChoiceD.attr("class", "answer");
  newQuestion.append(answerChoiceD);
}

for (var j = 1; j < questionsBank.questions.length; j++) {
  $("#q" + [j]).attr("class", "question hidden");
}

$(document).ready(function() {
  $(".answer").hover(
    function() {
      $(this).css("background-color", "yellow");
    },
    function() {
      $(this).css("background-color", "transparent");
    }
  );
});

var clock;
var time = 60;
var correct = 0;
var incorrect;
var score;
var audio = new Audio("The-Office.mp3");
var rotate = 0;
var rotateplus = 1;

$("#timer").html("Time Remaing: " + time);
$("#score").html("Correct: " + correct);
$("#incorrect").html("Incorrect: " + incorrect);

function timer() {
  time--;
  $("#timer").html("Time Remaing: " + time);

  if (time === 0) {
    submit();
  }
}

function start() {
  document.getElementById("question").style.display = "inline";
  document.getElementById("timer").style.display = "inline";
  document.getElementById("start-button").style.display = "none";
  document.getElementById("dm").style.display = "none";
  document.getElementById("background").style.height = "auto";
  $("#tryAgain").css("display", "none");
  $("#score").css("display", "none");
  $("#incorrect").css("display", "none");
  $("#picture").css("display", "none");
  clock = setInterval(timer, 1000);
  timer();
  audio.play();
}

$(".answer").on("click", function() {
  $("#q" + [rotate]).attr("class", "question hidden");
  $("#q" + [rotateplus]).attr("class", "question inline");
  rotate++;
  rotateplus++;
  console.log(rotate, rotateplus);
});

$("#q0b").on("click", function() {
  correct++;
  console.log(correct);
});
$("#q1d").on("click", function() {
  correct++;
  console.log(correct);
});
$("#q2a").on("click", function() {
  correct++;
  console.log(correct);
});
$("#q3d").on("click", function() {
  correct++;
  console.log(correct);
});
$("#q4b").on("click", function() {
  correct++;
  console.log(correct);
});
$("#q5d").on("click", function() {
  correct++;
  submit();
  $("#tryAgain").css("display", "block");
  console.log(correct);
});

$("#q5").on("click", function() {
  submit();
});

$("#start-button").on("click", function() {
  start();
});

$("#tryAgain").on("click", function() {
  location.reload();
});

function submit() {
  var gif = [
    "https://media.giphy.com/media/Cz1it5S65QGuA/giphy.gif",
    "https://media.giphy.com/media/yltGOJQBMBn7W/giphy.gif",
    "https://media.giphy.com/media/lMVNl6XxTvXgs/giphy.gif",
    "https://media.giphy.com/media/8VrtCswiLDNnO/giphy.gif",
    "https://media.giphy.com/media/dxocWugDZRyG4/giphy.gif",
    "https://media.giphy.com/media/xtMrejfHu8JEs/giphy.gif",
    "https://media.giphy.com/media/awPKo9G1LsgMM/giphy.gif"
  ];

  score = correct;
  incorrect = 6 - score;
  console.log("wrong" + incorrect);
  $("#score").html("Correct: " + correct);
  $("#incorrect").html("Incorrect: " + incorrect);
  $("#score").css("display", "block");
  $("#incorrect").css("display", "block");
  $("#question").css("display", "none");
  $("#timer").css("display", "none");
  $("#start-button").css("display", "none");
  $("#picture").attr("src", gif[score]);
  $("#picture").css("display", "block");
  $("#tryAgain").css("display", "block");
  clearInterval(clock);
}
