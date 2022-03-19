let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');
let snake = [];
let appleTexture = new Image(); appleTexture.src = "./img/apple.png"
let bg = new Image(); bg.src = "./img/apple.png";

class AppleBuff{
    #cellSize = 32;

    constructor(id){
        this.id = id;
    }

    apple = {
        x: RandomNum(1, 30) * this.#cellSize,
        y: RandomNum(1, 25) * this.#cellSize
    }

    Spawn(){
        context.drawImage(appleTexture, this.apple.x, this.apple.y);
    }   
}


function RandomNum(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}


function gameLoop(){
    let buff1 = new AppleBuff(1);
    buff1.Spawn();
}

setTimeout(gameLoop, 100);