var background1, bgSprite;
var run, runSprite;
var enemy;
var cactus, cactusSprite;

function preload(){
    background1 = loadImage("Images/back.png");
    cactus = loadImage("Images/obstacle.png");
    run = loadAnimation("Images/run1.png","Images/run2.png","Images/run3.png","Images/run4.png","Images/run5.png","Images/run6.png");
    enemy = loadAnimation("Images/enemy1.png","Images/enemy2.png","Images/enemy3.png");
}

function setup(){
    createCanvas(displayWidth,displayHeight);
    bgSprite = createSprite(displayWidth/2,displayHeight/2);
    bgSprite.addImage("back",background1);
    bgSprite.scale = 1.9;

    runSprite = createSprite(displayWidth/4 - 200,displayHeight/2 + 110);
    runSprite.addAnimation("runing",run);
    runSprite.scale =1.3 ;

}

function draw(){
    background("white");
    drawSprites();
}