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
        this.x = x;
        this.y = y;
        this.snakeHeadX = snakeHeadX;
        this.snakeHeadY = snakeHeadY;
    }

    getX(){
        return this.x;
    }

    getY(){
        return this.y;
    }

    getSnakeHeadY(){
        return ((this.snakeHeadY * this.y) + cellSize);
    }

    getSnakeHeadX(){
        return ((this.snakeHeadX * this.x) + cellSize);
    }
}

// Змея 1 для 1 игрока
class Player1 extends Snake {

    Move(e){
        if (e.keyCode == 37 && pos != 'right'){
            pos = 'left';
            snake1.x -= 16;
            console.log(pos);  
        }  
        if (e.keyCode == 38 && pos != 'down'){
            pos = 'up';
            snake1.y -= 16;
            console.log(pos);
        }
        if (e.keyCode == 39 && pos != 'left'){
            pos = 'right';
            snake1.x += 16;
            console.log(pos);
        }
        if (e.keyCode == 40 && pos != 'up'){
            pos = 'down';
            snake1.y += 16;
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

} gameConfig();

// Спавн змеи
let snake1 = new Player1(3,7);
console.log(snake1);
let snake2 = new Player2(2,8);

// Отслеживание нажатия у каждого игрока
document.addEventListener('keydown', (e) => snake1.Move(e));   
document.addEventListener('keydown', (e) => snake2.Move(e)); 


// Луп игры
function gameLoop(){
    for (let i = 0; i < Object.keys(snake1).length; i++) {
        context.fillStyle = "red";
        context.fillRect(snake1.getX(), snake1.getY(), cellSize, cellSize);
        
        let newHead = {
            x: snake1.getX(),
            y: snake1.getY()
        }

        Array.from(snake1).unshift(newHead);
    }

    Array.from(snake1).pop();
    console.log('gameloop');

} setInterval(gameLoop, 100);


function GetRandom(min, max){ return Math.floor(Math.random() * (max - min) + min); }