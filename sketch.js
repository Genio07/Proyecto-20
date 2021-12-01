var bgImg;
var cat;

function preload() {
    //Cargar aqui las imagenes
    bgImg = loadImage("images/garden.png");
    
    catImg1 = loadAnimation("images/tomOne.png");
    mouseImg1 = loadAnimation("images/jerryOne.png");
    catImg2 = loadAnimation("images/tomTwo.png","images/tomThree.png");
    mouseImg2 = loadAnimation("images/jerryTwo.png","images/jerryThree.png");
    catImg3 = loadImage("images/tomFour.png");
    mouseImg3 = loadImage("images/jerryFour.png");
}

function setup(){
    createCanvas(1000,800);
    //carga los sprites de Tom y Jerry
    cat = createSprite(870,600);
    cat.addAnimation("gatoSentado", catImg1);
    cat.scale = 0.2;

    mouse = createSprite(170,600);
    mouse.addAnimation("ratonQuieto", mouseImg1);
    mouse.scale = 0.2;
}

function draw() {
    background(bgImg);
    //escribe la condición para verificar si Tom y Jerry chocan    
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        cat.velocityX = 0;
        cat.addAnimation("UltimaImagenGato", catImg3);
        cat.changeAnimation("UltimaImagenGato");
        cat.x = 300;
        cat.scale = 0.2;
      
        mouse.addAnimation("UltimaImagesRaton", mouseImg3);
        mouse.changeAnimation("UltimaImagesRaton");
        mouse.scale = 0.2;
    }

    drawSprites();
}

function keyPressed(){
    //escribe aqui el código para la animación del movimiento y cambio
    if(keyCode === LEFT_ARROW){
        mouse.addAnimation("ratonMolestando", mouseImg2);
        mouse.changeAnimation("ratonMolestando");
        mouse.frameDelay = 25;

        cat.velocityX = -5;
        cat.addAnimation("gatoMoviendose", catImg2);
        cat.changeAnimation("gatoMoviendose");
        mouse.frameDelay = 25;
    }

}