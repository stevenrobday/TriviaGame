/*notes delete later 

$(".videoContainer").show();

$("#intro").trigger("play");

if($("#intro").get(0).paused){
    console.log("bloop");
}

$("video").on("pause", function () {
    if(!$("#intro").get(0).ended)
        console.log($(this));
  });

  $("video").on("play", function () {
    console.log($(this).attr("id"));
  });

  $("video").on("ended", function () {
    console.log("see ya");
  });

  //play the video before the timer expires!
  */

var gameObj = {
    numQuestions: 10,
    questions: [
        {
            question: "Your wife lowers her side of the bed.",
            answers: [
                "Talk about rocks.",
                "Turn to her and tell her you love and appreciate her.",
                "You placed your geodes underneath, so she's in for a bumpy night's sleep.",
                "Be extra petty and raise your side of the bed up."
            ],
            correctIndex: 3,
            correctAnswer: "You want to be extra petty and raise your side of the bed up."
        },
        {
            question: "The nice lady in the robe... will she be ok?",
            answers: [
                "She'll be fine. She has a humidifier!",
                "Yes, she's just got a case of the sniffles.",
                "A cup of hot tea should do the trick!",
                "No, The Heisenberg poisoned her with ricin."
            ],
            correctIndex: 3,
            correctAnswer: "The Heisenberg poisoned the nice lady with ricin, so she will not be ok..."
        },
        {
            question: "Look at me, Hector.",
            answers: [
                "Look at him.",
                "Don't look at him. Instead, grimmace and drool!",
                "Look at him, ding x-1 times and explode.",
                "Look at him, ding x times and explode."
            ],
            correctIndex: 1,
            correctAnswer: "You want to not look at him. Just grimmace and drool instead."
        },
        {
            question: "The following is, like, totally in the constitution, man.",
            answers: [
                "We hold these truths to be, like, duh!",
                "Four score and, um, what would an additional seven years be?",
                "I have a dream that one day even the state of Mississippi, sweltering with things that suck, will one day be pretty cool!",
                "If you ask a cop if he's a narc, he has to tell you."
            ],
            correctIndex: 3,
            correctAnswer: "Cops have to tell you they're narcs if you ask them."
        },
        {

        }
    ],
};