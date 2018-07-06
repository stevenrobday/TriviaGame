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
            correctAnswer: "You don't want to look at him. Just grimmace and drool instead."
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
            question: "As you take a broken plate out of the trash, you realize one of its pieces is missing.  How do you respond?",
            answers: [
                "\"Ah yes, just as I suspected!\"",
                "\"What did I tell Skyler about separating the trash?\"",
                "\"No(x?)\"",
                "\"No (x+1?)\""
            ],
            correctIndex: 2,
            correctAnswer: "You're going to want to say \"no\" x times."
        },
        {
            question: "Last chance to look at me, Hector.",
            answers: [
                "Don't look at him. Instead, grimmace and drool!",
                "Look at him, ding x-1 times and explode.",
                "Look at him, ding x times and explode.",
                "Explode, then look at him."
            ],
            correctIndex: 2,
            correctAnswer: "In this case, you'll want to look at him, ding x times and explode."
        },
        {
            question: "Why might Mike want to hold off on killing Walter?",
            answers: [
                "It would be uncouth.",
                "He's already dead.",
                "He's not worth the blood on Mike's shirt.",
                "Gal's address."
            ],
            correctIndex: 3,
            correctAnswer: "Mike might want to hold off on killing him because Gal's address."
        },
        {
            question: "A turtle is about to explode.  What do you suppose his shell says?",
            answers: [
                "Hola DEA.",
                "Adios, amigos!",
                "Time's up!",
                "Mario has taken a sadistic turn."
            ],
            correctIndex: 0,
            correctAnswer: "Before a turtle explodes, his shell should say \"Hola DEA\"."
        },
        {
            question: "What does Mike do to people who don't return his calls?",
            answers: [
                "Shoot their right hand.",
                "Shoot their left hand.",
                "Shoot them in the foot and tell them next time it's their brains.",
                "All of the above."
            ],
            correctIndex: 0,
            correctAnswer: "Be sure to call Mike back, or he'll shoot your right hand!"
        },
        {
            question: "The following is a benefit of wearing a hazmat suit:",
            answers: [
                "It prevents inhalation of toxic chemicals.",
                "It ensures no contamination of the product, though it doesn't account for flies...",
                "It prevents you from getting high on the job though absorption.",
                "You can inflate it, then shuffle left and right!"
            ],
            correctIndex: 3,
            correctAnswer: "Be sure to call Mike back, or he'll shoot your right hand!" 
        }
    ],
    numResults: 5,
    results: [
        {
            resultText: "<p>YOU ARE A HIGH SCHOOL CHEMISTRY TEACHER</p><p>You stop after your first few cooks because you find the pacing slow, and you thought the crafting elements were too complicated.  You are afraid of the things Tuco could do to you (and he's the easiest boss!  You just go hide...), and you're in enough trouble with Skyler already.  So you swear off a life of crime and go back to teaching chemistry for another two years before dying of lung cancer, beloved and cared for, but ultimately, bored.</p><p>GAME OVER</p>"
        }
    ]
};