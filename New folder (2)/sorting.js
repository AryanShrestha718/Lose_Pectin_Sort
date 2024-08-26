var score;
var gameState = idle;
var rand;
function preload(){

    // loading in the different files

    1 = loadImage("Assets/Amylopectin.jpg")
    2 = loadImage("Assets/Amylopectin2.png")
    3 = loadImage("Assets/Amylopectin3.png")
    4 = loadImage("Assets/Amylopectin4.jpg")
    5 = loadImage("Assets/Amylopectin5.png")
    6 = loadImage("Assets/Amylopectin6.png")
    7 = loadImage("Assets/Amylopectin7.png")
    8 = loadImage("Assets/Amylopectin8.png")
    9 = loadImage("Assets/Amylopectin9.png")
    10 = loadImage("Assets/Amylopectin10.png")
    11 = loadImage("Assets/Amylopectin11.jpg")
    12 = loadImage("Assets/Amylopectin12.jpg")
    13 = loadImage("Assets/Amylose.jpg")
    14 = loadImage("Assets/Amylose2.png")
    15 = loadImage("Assets/Amylose3.png")
    16 = loadImage("Assets/Amylose4.jpg")
    17 = loadImage("Assets/Amylose5.png")
    18 = loadImage("Assets/Amylose6.png")
    19 = loadImage("Assets/Amylose7.jpg")
    20 = loadImage("Assets/Amylose8.png")
    21 = loadImage("Assets/Amylose9.png")
    22 = loadImage("Assets/Amylose10.png")
    23 = loadImage("Assets/Amylose11.png")
    24 = loadImage("Assets/Amylose12.png")
}
    // creating every interactable

function setup(){
    createCanvas(1200, 1600);
    startButton = rect(200, 125, 400, 1350)
    amyloseButton = rect(200, 200, 400, 1200)
    amylopectinButton = rect(200, 200, 800, 1200)
    amyloPicture = createSprite(400, 400, 400, 400)
}

    // setting up the game

function draw(){
    background(255);



    




    if(gameState = play){
        startButton.visible = false;
        amyloseButton.visible = true;
        amylopectinButton.visible = true;
        randomNumberPicker();
        if(mousePressedOver(amyloseButton)){
            if(rightAnswerArray[rand] = 2){
                score++;
                randomNumberPicker();
            } else if(rightAnswerArray[rand] = 1){
                gameState = loss;
                randomNumberPicker();
            }
        }if(mousePressedOver(amylopectinButton)){
            if(rightAnswerArray[rand] = 1){
                score++;
                randomNumberPicker();
            } else if(rightAnswerArray[rand] = 2){
                gameState = loss;
                randomNumberPicker();
            }
        }
    } 
    else if(gameState = idle){
        startButton.visible = true;
        amyloseButton.visible = false;
        amylopectinButton.visible = false;
        
        if(mousePressedOver(startButton)){
            reset();
        }
    }
    else if(gameState = loss){
        startButton.visible = true;
        amyloseButton.visible = false;
        amylopectinButton.visible = false;
        if(mousePressedOver(startButton)){
            reset();
        }
    }
}

function reset(){
    gameState = play;
    score = 0;
}

function randomNumberPicker(){    
    rightAnswerArray = [1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2]
    rand = Math.round(random(0,23));
    rightAnswerArray[rand]
    amyloPicture.addImage(rand)

}
