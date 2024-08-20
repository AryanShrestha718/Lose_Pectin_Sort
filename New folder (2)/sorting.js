var points;
var gameState = idle;
function preload(){

    // loading in the different files

    pectin = loadImage("assets/Amylopectin.jpg")
    pectin2 = loadImage("assets/Amylopectin2.png")
    pectin3 = loadImage("assets/Amylopectin3.png")
    pectin4 = loadImage("assets/Amylopectin4.jpg")
    pectin5 = loadImage("assets/Amylopectin5.png")
    pectin6 = loadImage("assets/Amylopectin6.png")
    pectin7 = loadImage("assets/Amylopectin7.png")
    pectin8 = loadImage("assets/Amylopectin8.png")
    pectin9 = loadImage("assets/Amylopectin9.png")
    pectin10 = loadImage("assets/Amylopectin10.png")
    pectin11 = loadImage("assets/Amylopectin11.jpg")
    pectin12 = loadImage("assets/Amylopectin12.jpg")
    lose = loadImage("assets/Amylose.jpg")
    lose2 = loadImage("assets/Amylose2.png")
    lose3 = loadImage("assets/Amylose3.png")
    lose4 = loadImage("assets/Amylose4.jpg")
    lose5 = loadImage("assets/Amylose5.png")
    lose6 = loadImage("assets/Amylose6.png")
    lose7 = loadImage("assets/Amylose7.jpg")
    lose8 = loadImage("assets/Amylose8.png")
    lose9 = loadImage("assets/Amylose9.png")
    lose10 = loadImage("assets/Amylose10.png")
    lose11 = loadImage("assets/Amylose11.png")
    lose12 = loadImage("assets/Amylose12.png")
}
    // creating every interactable

function setup(){
    createCanvas(1200, 1600);
    startButton = rect(200, 125, 400, 1350)
    amyloseButton = rect(200, 200, 400, 1200)
    amylopectinButton = rect(200, 200, 800, 1200)
}

    // setting up the game

function draw(){
    background(255);

    rightAnswerArray = [1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2]
    questionAskRandomizer = randomNumber(0,23)
    




    if(gameState = play){

    } 
    else if(gameState = idle){
        
    }
    else if(gameState = loss){

    }
}