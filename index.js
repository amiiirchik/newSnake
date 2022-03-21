let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');
let pos = '';
let cellSize = 32;

class Items{
    constructor(itemTexture = null) {
        this.itemTexture = new Image();

        if (itemTexture == null) {
            let errors = ['./img/warning.png'];
            this.itemTexture.src = errors[0];
        }
        else this.itemTexture.src = itemTexture;
    }

    item = {
        x: this.RandomNum(1, 30) * cellSize,
        y: this.RandomNum(1, 25) * cellSize
    }

    Spawn(){
        context.drawImage(this.itemTexture, this.item.x, this.item.y);
    }

    RandomNum(min, max){ return Math.floor(Math.random() * (max - min) + min); }
}

// Баффы
class Apple extends Items{
    // To do
}

class Banana extends Items{
    // Расписать таймер и секунды
    increaseTime(timer){
        date.setSeconds(seconds + 10);
    }
}

// Дебаффы
class Rock extends Items{
    constructor(damage = 0){
        this.damage = damage;
    }
    
    takeDmg(damage){
        // Расписать score и массив snake
        score -= damage;
		snake.splice(snake.length - damage, damage);
    }
}

class Amanita extends Items{
    decreaseTime(){
        date.setSeconds(seconds - 10);
    }
}
// Змея 
class Snake{
    #player = {
        name: null,
        skin: null,
        keys: {
            topKey: null,
            bottomKey: null,
            leftKey: null,
            rightKey: null
        }
    }
    constructor(x, y, snakeHeadX, snakeHeadY){
        this.x = x * cellSize;
        this.y = y * cellSize;
        this.snakeHeadX = snakeHeadX;
        this.snakeHeadY = snakeHeadY;
    }
}


// Конфиг игры -- запускается один раз по вызову
function gameConfig(){
    let bg = new Image(); bg.src = "img/bg.jpg";
    context.drawImage(bg, 0, 0);
    let singleBanana = new Banana('img/banana1.png');  singleBanana.Spawn();
    let twiceBanana = new Banana('img/banana2.png');  twiceBanana.Spawn();
    let tripleBanana = new Banana('img/banana3.png');  tripleBanana.Spawn();
    let mushroom = new Amanita('img/mushroom.png');  mushroom.Spawn();

    for (let i = 0; i <= GetRandom(0, 3); i++){
        let apple = new Apple('img/apple.png'); apple.Spawn();
    }

    for (let i = 0; i <= GetRandom(0, 10); i++){
        let rock = new Rock('img/stone.png'); rock.Spawn();
    }

} setTimeout(gameConfig, 0);



// Луп игры
function gameLoop(){

} setTimeout(gameLoop, 100);


function GetRandom(min, max){ return Math.floor(Math.random() * (max - min) + min); }