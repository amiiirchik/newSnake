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
    // #player = {
    //     name: null,
    //     skin: null,
    //     keys: {
    //         topKey: null,
    //         bottomKey: null,
    //         leftKey: null,
    //         rightKey: null
    //     }
    // }
    constructor(x, y, snakeHeadX, snakeHeadY){
        this.x = x * cellSize;
        this.y = y * cellSize;
        this.snakeHeadX = snakeHeadX;
        this.snakeHeadY = snakeHeadY;
    }
}

// Змея 1 для 1 игрока
class Player1 extends Snake {

    Move(e){
        if (e.keyCode == 37 && pos != 'right'){
            pos = 'left';
            console.log(pos);  
        }  
        if (e.keyCode == 38 && pos != 'down'){
            pos = 'up';
            console.log(pos);
        }
        if (e.keyCode == 39 && pos != 'left'){
            pos = 'right';
            console.log(pos);
        }
        if (e.keyCode == 40 && pos != 'up'){
            pos = 'down';
            console.log(pos);
        }
    }

    getName(){
        return //to do...
    }
}

// Змея 2 для 2 игрока
class Player2 extends Snake{

    Move(e){
        if (e.keyCode == 65 && pos != 'right'){
            pos = 'a';
            console.log(pos);  
        }  
        if (e.keyCode == 87 && pos != 'down'){
            pos = 'w';
            console.log(pos);
        }
        if (e.keyCode == 68 && pos != 'left'){
            pos = 'd';
            console.log(pos);
        }
        if (e.keyCode == 83 && pos != 'up'){
            pos = 's';
            console.log(pos);
        } 
    }

    getName(){
        return //to do...
    }
}


// Конфиг игры -- запускается один раз по вызову
let gameStart = function gameConfig(){
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

}

setInterval(gameStart, 100); //

// Спавн змеи
let snake1 = new Player1(3,4);
let snake2 = new Player2(2,8);

// Отслеживание нажатия у каждого игрока
document.addEventListener('keydown', (e) => snake1.Move(e));   
document.addEventListener('keydown', (e) => snake2.Move(e)); 


// Луп игры
function gameLoop(){
    
} setTimeout(gameLoop, 100);


function GetRandom(min, max){ return Math.floor(Math.random() * (max - min) + min); }