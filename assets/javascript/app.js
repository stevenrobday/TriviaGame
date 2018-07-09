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
            question: "<p>Knock, knock.</p>",
            answers: [
                "<p>Who's there?</p>",
                "<p>I am the one who knocks!</p>",
                "<p>Orange?  Is that you again?</p>",
                "<p>We don't want any!</p>"
            ],
            correctIndex: 1,
            correctAnswer: "<p>If you hear a knock, you know it's The Heisenberg on the other side, so be sure to come to the door!</p>",
            imgTag: "<img src='assets/images/knocks.jpg' width='480'>",
            videoTag: "<video id='answerVideo' width='768' height='432'><source src='assets/videos/knocks.mp4' type='video/mp4'></video>"
        },
        {
            question: "<p>The nice lady in the robe... will she be OK?</p>",
            answers: [
                "<p>She'll be fine. She has a humidifier!</p>",
                "<p>Yes, she's just got a case of the sniffles.</p>",
                "<p>A cup of hot tea should do the trick!</p>",
                "<p>No, The Heisenberg poisoned her with ricin.</p>"
            ],
            correctIndex: 3,
            correctAnswer: "<p>The Heisenberg poisoned the nice lady with ricin, so she will not be OK.</p>",
            imgTag: "<img src='assets/images/lydia.jpg' width='480'>",
            videoTag: "<video id='answerVideo' width='768' height='432'><source src='assets/videos/lydia.mp4' type='video/mp4'></video>"
        },
        {
            question: "<p>Look at me, Hector.</p>",
            answers: [
                "<p>Look at him.</p>",
                "<p>Don't look at him. Instead, grimmace and drool!</p>",
                "<p>Look at him, ding approximately 30 times and explode.</p>",
                "<p>Ding approximately 30 times, look at him and explode.</p>"
            ],
            correctIndex: 1,
            correctAnswer: "<p>You don't want to look at him. Just grimmace and drool instead.</p>",
            imgTag: "<img src='assets/images/lookAtMe.jpg' width='480'>",
            videoTag: "<video id='answerVideo' width='768' height='432'><source src='assets/videos/lookAtMe.mp4' type='video/mp4'></video>"
        },
        {
            question: "<p>The following is in the Constitution of America:</p>",
            answers: [
                "<p>We hold these truths to be, like, duh!</p>",
                "<p>Four score and, um, what would an additional seven years be?</p>",
                "<p>I have a dream that one day even the state of Mississippi, sweltering with things that suck, will one day be pretty cool!</p>",
                "<p>If you ask a cop if he's a cop, he's like, obligated to tell you.</p>"
            ],
            correctIndex: 3,
            correctAnswer: "<p>Cops have to tell you they're cops if you ask them.</p>",
            imgTag: "<img src='assets/images/constitution.jpg' width='480'>",
            videoTag: "<video id='answerVideo' width='768' height='432'><source src='assets/videos/constitution.mp4' type='video/mp4'></video>"
        },
        {
            question: "<p>As you take a broken plate out of the trash, you realize one of its pieces is missing.  How do you respond?</p>",
            answers: [
                "<p>\"Ah yes, just as I suspected!\"</p>",
                "<p>\"What did I tell Skyler about separating the trash?\"</p>",
                "<p>\"No. No. No no no no no no no no.\"</p>",
                "<p>\"No. No. No. No no no no no no no no.\"</p>"
            ],
            correctIndex: 2,
            correctAnswer: "<p>You're going to want to pause between each of your first two no's, then follow that with a rapid succession of no's.</p>",
            imgTag: "<img src='assets/images/plate.jpg' width='480'>",
            videoTag: "<video id='answerVideo' width='768' height='432'><source src='assets/videos/plate.mp4' type='video/mp4'></video>"
        },
        {
            question: "<p>Last chance to look at me, Hector...</p>",
            answers: [
                "<p>Don't look at him. Instead, grimmace and drool!</p>",
                "<p>Look at him, ding approximately 30 times and explode.</p>",
                "<p>Ding approximately 30 times, look at him and explode.</p>",
                "<p>Explode, look at him and ding approximately 30 times.</p>"
            ],
            correctIndex: 1,
            correctAnswer: "<p>In this case, you'll want to look at him, ding approximately 30 times and explode.</p>",
            imgTag: "<img src='assets/images/lastChance.jpg' width='480'>",
            videoTag: "<video id='answerVideo' width='768' height='432'><source src='assets/videos/lastChance.mp4' type='video/mp4'></video>"
        },
        {
            question: "<p>Why might Mike want to hold off on killing Walter?</p>",
            answers: [
                "<p>It would be uncouth.</p>",
                "<p>He's already dead.</p>",
                "<p>He's not worth the blood on Mike's shirt.</p>",
                "<p>6353 Juan Tabo, Apartment 6.</p>"
            ],
            correctIndex: 3,
            correctAnswer: "<p>Mike might want to hold off because \"6353 Juan Tabo, Apartment 6.\"</p>",
            imgTag: "<img src='assets/images/holdOff.jpg' width='480'>",
            videoTag: "<video id='answerVideo' width='768' height='432'><source src='assets/videos/holdOff.mp4' type='video/mp4'></video>"
        },
        {
            question: "<p>A turtle is about to explode.  What do you suppose his shell says?</p>",
            answers: [
                "<p>HOLA DEA</p>",
                "<p>ADIOS AMIGOS!</p>",
                "<p>TIME'S UP!</p>",
                "<p>MARIO HAS TAKEN A SADISTIC TURN.</p>"
            ],
            correctIndex: 0,
            correctAnswer: "<p>Before a turtle explodes, his shell should say \"HOLA DEA\".</p>",
            imgTag: "<img src='assets/images/turtle.jpg' width='480'>",
            videoTag: "<video id='answerVideo' width='768' height='432'><source src='assets/videos/turtle.mp4' type='video/mp4'></video>"
        },
        {
            question: "<p>What does Mike do to people who don't return his calls?</p>",
            answers: [
                "<p>Shoot their right hand.</p>",
                "<p>Shoot their left hand.</p>",
                "<p>Shoot them in the foot and tell them next time it's their brains.</p>",
                "<p>All of the above.</p>"
            ],
            correctIndex: 0,
            correctAnswer: "<p>Mike will shoot your right hand if you don't call him back, so be sure to not make this mistake!</p>",
            imgTag: "<img src='assets/images/callMike.jpg' width='480'>",
            videoTag: "<video id='answerVideo' width='768' height='432'><source src='assets/videos/callMike.mp4' type='video/mp4'></video>"
        },
        {
            question: "<p>The following is a benefit of wearing a hazmat suit:",
            answers: [
                "<p>It prevents inhalation of toxic chemicals.</p>",
                "<p>It ensures no contamination of the product, though it doesn't account for flies...</p>",
                "<p>It prevents you from getting high on the job though absorption.</p>",
                "<p>You can inflate it, then shuffle left and right!</p>"
            ],
            correctIndex: 3,
            correctAnswer: "<p>Inflate your hazmat suit and shuffle around a little. That's right. Now you're going places!</p>",
            imgTag: "<img src='assets/images/inflate.jpg' width='480'>",
            videoTag: "<video id='answerVideo' width='768' height='432'><source src='assets/videos/inflate.mp4' type='video/mp4'></video>"
        }
    ],
    results: [
        "<div><p>YOU ARE A HIGH SCHOOL CHEMISTRY TEACHER.</p></div><div class='resultsImg'><img src='assets/images/season1.jpg' width='480'></div><div><p>You stop after your first few cooks because you find the pacing slow, and you thought the crafting elements were too complicated. You are afraid of the things Tuco could do to you (and he's the easiest boss! You just go hide...), and you're in enough trouble with Skyler already. So you swear off a life of crime and go back to teaching chemistry for another two years before dying of lung cancer, beloved and cared for, but ultimately, bored.</p></div><div><p>GAME OVER</p></div><div><p>Try to challenge yourself a little more; you may end up enjoying yourself!</p></div>",

        "<div><p>YOU ARE A PLUCKY STARTUP!</p></div><div class='resultsImg'><img src='assets/images/season2.jpg' width='480'></div><div><p>You levelled up your infamy by beating Tuco, and are making a decent living cooking meth in the RV. And they finally locked up Jesse's idiot friend, Badger! Incidentally, Hank just found out what you're up to, and him and Steve Gomez are on their way to put you behind bars for life.</p></div><div><p>GAME OVER</p></div><div><p>You need to go talk to the NPC Saul, who saves you when Badger gets busted (an event that gets triggered one game-day cycle after the player takes control of Jesse and crushes Spooge's head with the ATM machine).</p></div>",

        "<div><p>YOU ARE A MID-GRADE COOK!</p></div><div class='resultsImg'><img src='assets/images/season3.jpg' width='480'></div><div><p>Mike gives you one last phone call. It's a tough choice between your wife and your best friend, but you select the latter. The game switches to Jesse, and a boss appears! He's unarmed, and you have a gun. But you fail the quick-time event and are defeated. Then when the game switches back to Walter, Mike takes you down to the basement and executes you.</p></div><div><p>GAME OVER</p></div><div><p>When you're about to land the finishing blow on Gale, the camera spins around to face you. Do not adjust the analog stick to try to correct this; you'll end up moving your arm, missing Gale's head entirely and alerting the neighbors!</p></div>",

        "<div><p>YOU ARE A MASTER CHEF!</p></div><div class='resultsImg'><img src='assets/images/season4.jpg' width='480'></div><div><p>Things are looking grim. Your best friend hates you, and your boss wants you dead. Your wife gave your money to Beneke, which means you can't skip town and try your luck there. So you play a round of spin-the-gun-on-the-table, and win! Later, you pass by Jesse's girlfriend's kid. You don't even know his name, so you continue walking, and hope you didn't upset Jesse doing so. A few days later, Gustavo has you executed.</p></div><div><p>GAME OVER</p></div><div><p>After beating the gun-spinning mini-game, the gun points to a plantar box.  You need this in your inventory to defeat the mini-boss. This is easy to miss if you're not playing on easy mode (where the plant highlights), so be sure to pick it up!</p></div>",

        "<div><p>YOU ARE THE HEISENBERG!</p></div><div class='resultsImg'><img src='assets/images/season5.jpg' width='480'></div><div><p>You have defeated Tuco, Gale, and Gustavo, and are now The Notorious Drug Lord! Ironically, all it cost you was the very thing you claimed to have become Drug Lord for in the first place! Well, you died too, and Nazis tortured your best friend. The audience doesn't like you anymore, either. No, you crossed that bridge when you made the nice man in the wheelchair explode.</p></div><div><p>GAME OVER</p></div><div><p>You won the game, but lost in everything that actually matters. Like audience trust. Maybe you should have stayed a chemistry teacher...</p></div>"
    ]
};

//may be able to make local
var numQuestions = gameObj.questions.length;
var numResults = gameObj.results.length;
var resultsDenominator = numQuestions / numResults;

var correctAnswers;

$startContainer = $("#startContainer");
$startBtn = $("#startBtn");

var $introContainer = $("#introContainer");
var $introVidContainer = $("#introVidContainer");
var $introVideoTag = "<video id='introVideo' width='768' height='432'><source src='assets/videos/intro.mp4' type='video/mp4'></video>";
var $introVideo;
var $video;

$videoMessage = $(".videoMessage");
$videoCountdown = $(".videoCountdown");

var questionsArray;
var questionsIndex;

var $questionContainer = $("#questionContainer");
var $question = $("#question");
var $questionImg = $("#questionImg");
var $questionBtns = $(".questionBtns");
var $questionOne = $("#questionOne");
var $questionTwo = $("#questionTwo");
var $questionThree = $("#questionThree");
var $questionFour = $("#questionFour");
var $questionCountdown = $("#questionCountdown");

var $playerGuess = $("#playerGuess");
var $answerContainer = $("#answerContainer");
var $correctAnswer = $("#correctAnswer");
var $answerVidContainer = $("#answerVidContainer");
var $answerVideo = $("#answerVideo");

var $videoToPlay;
var $containerToFade;

var $resultsContainer = $("#resultsContainer");
var $resultsContainerContent = $("#resultsContainer .contentResults");

var resultsBtns = "<div><button id='restartBtn'><p>TRY AGAIN?</p></button></div><div><button id='seeAllBtn'><p>SEE ALL RESULTS</p></button></div>";

var $restartBtn;

var $allResultsContainerContent = $("#allResultsContainer .contentResults");

$(gameObj.results).each(function (i) {
    $allResultsContainerContent.append(this);
    if (i < gameObj.results.length - 1) {
        $allResultsContainerContent.append("<div class='spacer'></div>");
    }
});

var $allResultsContainer = $("#allResultsContainer");

$backBtn = $("#backBtn");

function assessAnswer(answer) {
    if (answer === questionsArray[questionsIndex].correctIndex) {
        correctAnswers++;
        $playerGuess.html("CORRECT!");
    }
    else {
        $playerGuess.html("INCORRECT!");
    }

    appendAnswerAndFade();
}

function gaveUp() {
    $questionBtns.off("click");

    $playerGuess.html("GIVE UP?");

    appendAnswerAndFade();
}

function appendAnswerAndFade() {
    $correctAnswer.html(questionsArray[questionsIndex].correctAnswer);

    /*just putting the source tag inside the video tag
    doesn't work.  it will keep on playing the first video.
    so instead, we put the video and source tags inside the
    video container element*/
    $answerVidContainer.html(questionsArray[questionsIndex].videoTag);

    //change value of var to newly created element so we can play it
    $answerVideo = $("#answerVideo");
    $videoToPlay = $answerVideo;
    $containerToFade = $answerContainer;
    //get any newly created video tag we may have just made
    $video = $("video");
    addVideoTimerListeners();
    addVideoEndedListener();
    questionsArray.splice(questionsIndex, 1);
    $questionContainer.fadeOut(800, function () {
        $answerContainer.fadeIn(800, function () {
            videoPlay($answerVideo);
        });
    });
}

function addVideoEndedListener() {
    $videoToPlay.on("ended", function () {
        videoEnded();
    });
}

function videoEnded() {
    emptyVideoContainer();
    $videoToPlay.get(0).controls = false;
    $videoToPlay.off("ended");
    if (questionsArray.length > 0) {
        questionsIndex = Math.floor(Math.random() * questionsArray.length);
        populateQuestion();

        $questionBtns.off("click");

        $questionBtns.on("click", function () {
            $questionBtns.off("click");
            questionTimer.stop();
            assessAnswer(parseInt($(this).attr("data-index")));
        });

        $containerToFade.fadeOut(800, function () {
            $questionContainer.fadeIn(800, function () {
                questionTimer.start();
            });
        });
    }
    else {
        var resultIndex = Math.floor(correctAnswers / resultsDenominator);
        if (correctAnswers === numQuestions) {
            resultIndex--;
        }

        $resultsContainerContent.html("<div><p>You got " + correctAnswers + " out of " + numQuestions + "!</div>");
        $resultsContainerContent.append(gameObj.results[resultIndex]);
        $resultsContainerContent.append(resultsBtns);

        $restartBtn = $("#restartBtn");
        $seeAllBtn = $("#seeAllBtn");

        $restartBtn.on("click", function () {
            $(this).off("click");
            $seeAllBtn.off("click");
            startGame();
            $resultsContainer.fadeOut(800, function () {
                $introContainer.fadeIn(800, function () {
                    videoPlay($introVideo);
                });
            });
        });

        $seeAllBtn.on("click", function () {
            $resultsContainer.fadeOut(800, function () {
                $allResultsContainer.fadeIn(800);
            });
        });

        $answerContainer.fadeOut(800, function () {
            $resultsContainer.fadeIn(800);
        });
    }
}

function videoPlay($videoToPlay) {
    $videoToPlay.trigger("play");
    $videoToPlay.get(0).controls = true;
}

var timer = function (startVal, $element, cb) {
    this.startVal = startVal;
    this.$element = $element;
    this.cb = cb;
};

timer.prototype = {
    reset: function () {
        this.time = this.startVal;
    },
    start: function () {
        var that = this;

        this.reset();
        this.$element.html("<p>" + this.time + "</p>");
        this.id = setInterval(function () {
            that.count();
        }, 1000);
    },
    stop: function () {
        clearInterval(this.id);
    },
    count: function () {
        this.time--;
        this.$element.html("<p>" + this.time + "</p>");

        if (this.time === 0) {
            this.stop();
            this.cb();
        }
    }
};

//necessary for correct time to appear during fade in
var questionTimerStart = 20;
var videoTimerStart = 10;

var questionTimer = new timer(questionTimerStart, $questionCountdown, gaveUp);

var videoTimer = new timer(videoTimerStart, $videoCountdown, videoEnded);

function addVideoTimerListeners() {
    $video.off("pause");
    $video.off("play");

    $video.on("pause", function () {
        console.log("hi");
        if (!$(this).get(0).ended) {
            $videoMessage.html("<p>Play the video before you're out of time!</p>");
            videoTimer.start();
        }
    });

    $video.on("play", function () {
        videoTimer.stop();
        emptyVideoContainer();
    });
}

function emptyVideoContainer() {
    $videoMessage.empty();
    $videoCountdown.empty();
}

function populateQuestion() {
    $question.html(questionsArray[questionsIndex].question);
    $questionImg.html(questionsArray[questionsIndex].imgTag);
    $questionOne.html(questionsArray[questionsIndex].answers[0]);
    $questionTwo.html(questionsArray[questionsIndex].answers[1]);
    $questionThree.html(questionsArray[questionsIndex].answers[2]);
    $questionFour.html(questionsArray[questionsIndex].answers[3]);
    $questionCountdown.html(questionTimerStart);
}

$startBtn.on("click", function () {
    startGame();
    $startContainer.fadeOut(800, function () {
        $introContainer.fadeIn(800, function () {
            videoPlay($introVideo);
        });
    });
});

function startGame() {
    correctAnswers = 0;
    questionsArray = gameObj.questions.slice();
    $introVidContainer.html($introVideoTag);
    $introVideo = $("#introVideo");
    $video = $("video");

    $videoToPlay = $introVideo;
    $containerToFade = $introContainer;

    addVideoTimerListeners();
    addVideoEndedListener();
}

$backBtn.on("click", function () {
    $allResultsContainer.fadeOut(800, function () {
        $resultsContainer.fadeIn(800);
    });
});

