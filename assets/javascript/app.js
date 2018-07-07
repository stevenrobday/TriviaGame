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
  //Give up?
  //play the video before you're out of time!
  */

var gameObj = {
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
            correctAnswer: "The Heisenberg poisoned the nice lady with ricin, so she will not be ok."
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
            question: "The following is totally in the Constitution:",
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
            question: "Last chance to look at me, Hector...",
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
            correctAnswer: "Mike will shoot your right hand if you don't call him back, so be sure not to make this mistake!",
            imgTag: "<img src='assets/images/callMike.jpg' width='480'>",
            videoTag: "<source src='assets/videos/callMike.mp4' type='video/mp4'>"
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
            correctAnswer: "Inflate your hazmat suit and shuffle around a little. That's right. Now you're going places!"
        }
    ],
    results: [
        {
            resultText: "<p>YOU ARE A HIGH SCHOOL CHEMISTRY TEACHER.</p><p>You stop after your first few cooks because you find the pacing slow, and you thought the crafting elements were too complicated. You are afraid of the things Tuco could do to you (and he's the easiest boss! You just go hide...), and you're in enough trouble with Skyler already. So you swear off a life of crime and go back to teaching chemistry for another two years before dying of lung cancer, beloved and cared for, but ultimately, bored.</p><p>GAME OVER</p><p>Try to challenge yourself a little more; you may end up enjoying yourself!</p>"
        },
        {
            resultText: "<p>YOU ARE A PLUCKY STARTUP!</p><p>You levelled up your infamy by beating Tuco, and are making a decent living cooking meth in the RV. And they finally locked up Jesse's idiot friend, Badger! Incidentally, Hank just found out what you're up to, and him and Steve Gomez are on their way to put you behind bars for life.</p><p>GAME OVER</p><p>You need to go talk to the NPC Saul, who saves you when Badger gets busted (an event that gets triggered one game-day cycle after the player takes control of Jesse and crushes Spooge's head with the ATM machine).</p>"
        },
        {
            resultText: "<p>YOU ARE A MID-GRADE COOK!</p><p>Mike gives you one last phone call. It's a tough choice between your wife and your best friend, but you side with the latter. The game switches to Jesse, and a boss appears! He's unarmed, and you have a gun. But you fail the quick-time event and are defeated. Then when the game switches back to Walter, Mike takes you down to the basement and executes you.</p><p>GAME OVER</p><p>When you're about to land the finishing blow on Gale, the camera spins around to face you. Do not adjust the analog stick to try to correct this, you'll end up moving your arm, missing Gale's head entirely and alerting the neighbors!</p>"
        },
        {
            resultText: "<p>YOU ARE A MASTER CHEF!</p><p>Things are looking grim. Your best friend hates you, and your boss wants you dead. Your wife gave your money to Beneke, which means you can't skip town and try your luck there. So you play a round of spin-the-gun-on-the-table, and win! Later, you pass by Jesse's girlfriend's kid. You don't even know his name, so you continue walking, and hope you didn't upset Jesse doing so. A few days later, Gustavo has you executed.</p><p>GAME OVER</p><p>After beating the gun-spinning mini-game, the gun points to a plantar box.  You need this in your inventory to defeat the mini-boss. This is easy to miss if you're not playing on easy mode (where the plant highlights), so be sure to pick it up!</p>"
        },
        {
            resultText: "<p>YOU ARE THE HEISENBERG!</p><p>You have defeated Tuco, Gale, and Gustavo, and are now The Notorious Drug Lord! Ironically, all it cost you was the very thing you claimed to have become Drug Lord for in the first place! Well, you died too, and Nazis tortured your best friend. The audience doesn't like you anymore, either. No, you crossed that bridge when you made the nice man in the wheelchair explode.</p><p>GAME OVER</p><p>You won the game, but lost in everything that actually matters. Like audience trust. Maybe you should have stayed a chemistry teacher...</p>"
        }
    ]
};

//may be able to make local
var numQuestions = gameObj.questions.length;
var numResults = gameObj.results.length;

var questionsArray;

questionsArray = gameObj.questions;

var $questionContainer = $("#questionContainer");
var $question = $("#question");
var $questionImg = $("#questionImg");
var $questionOne = $("#questionOne");
var $questionTwo = $("#questionTwo");
var $questionThree = $("#questionThree");
var $questionFour = $("#questionFour");
var $questionCountdown = $("#questionCountdown");

var $playerGuess = $("#playerGuess");
var $answerContainer = $("#answerContainer");
var $correctAnswer = $("#correctAnswer");
var $answerVideo = $("#answerVideo");


$question.html(questionsArray[8].question);
$questionImg.html(questionsArray[8].imgTag);
$questionOne.html(questionsArray[8].answers[0]);
$questionTwo.html(questionsArray[8].answers[1]);
$questionThree.html(questionsArray[8].answers[2]);
$questionFour.html(questionsArray[8].answers[3]);

$(".gameBtns").on("click", function() {
    assessAnswer(parseInt($(this).attr("data-index")));
});

function assessAnswer(answer) {
    if (answer === questionsArray[8].correctIndex) {
        $playerGuess.html("CORRECT!");
    }
    else {
        $playerGuess.html("INCORRECT!");
    }

    appendAnswerAndFade();
}

function gaveUp(){
    $playerGuess.html("GIVE UP?");

    appendAnswerAndFade();
}

function appendAnswerAndFade() {
    $correctAnswer.html(questionsArray[8].correctAnswer);
    $answerVideo.html(questionsArray[8].videoTag);
    $questionContainer.fadeOut(1000);
    $answerContainer.fadeIn(1000, function() {
        videoPlay($answerVideo);
    });
}

function videoPlay($video) {
    $video.trigger("play");
}

$answerVideo.on("pause", function () {
    //if(!$("#intro").get(0).ended)
        console.log($(this));
  });

var countdown = function(startVal, $element, cb){
    this.startVal = startVal;
    this.$element = $element;
    this.cb = cb;
};

countdown.prototype = {
    reset: function() {
        this.time = this.startVal;
    },
    start: function() {
        var that = this;

        this.reset();
        this.$element.html(this.time);
        this.id = setInterval(function(){
            that.count(that);
        }, 1000);
    },
    stop: function() {
        clearInterval(this.id);
    },
    count: function(that) {
        that.time--;
        that.$element.html(that.time);
        
        if(that.time === 0){
            that.cb();
        }
    }
};

var questionTimer = new countdown(10, $questionCountdown, gaveUp);
questionTimer.start();
/*
$answerVideo.on("ended", function () {
    console.log("see ya");
});*/