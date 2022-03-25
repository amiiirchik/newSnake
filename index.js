let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');
let pos = '';
let cellSize = 32;
let snakeHeadX;
let snakeHeadY;

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

    constructor(player, x, y){ 
      this.#player = player;
      this.x = x * cellSize;
      this.y = y * cellSize;
    }
// Дввижение змейки
    Move(e){
        if (e.keyCode == this.#player.keys.rightKey && pos != 'right'){
            pos = 'd';
            console.log(pos);  
        }  
        if (e.keyCode == this.#player.keys.bottomKey && pos != 'down'){
            pos = 's';
            console.log(pos);
        }
        if (e.keyCode == this.#player.keys.leftKey && pos != 'left'){
            pos = 'a';
            console.log(pos);
        }
        if (e.keyCode == this.#player.keys.topKey && pos != 'up'){
            pos = 'w';
            console.log(pos);
        } 
    }
// Получение координат X
    getX() {
        return this.x;
    }
// Получение координат Y
    getY() {
        return this.y;
    }
// Получение координат головы по X
    getSnakeHeadX() {
        return snakeHeadX = this.x;
    }
// Получение координат головы по Y
    getSnakeHeadY() {
        return snakeHeadY = this.y;
    }
// Получение цвета змеи
    getColorSnake() {
        return this.#player.skin;
    }
// Проверка на вывод
    getShow() {
        return console.log(
            this.#player.keys.topKey,
            this.#player.keys.bottomKey,
            this.#player.keys.leftKey,
            this.#player.keys.rightKey
         );
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

// Создание змей 

// Первая змея (Спавнится)
let snake1 = new Snake(
    {
        name: 'Amir',
        skin: 'red',
        keys: {
            topKey: 87,
                bottomKey: 83,
                leftKey: 65,
            rightKey: 68
        }
    },
3, 7);

// Вторая змея (Не спавнится)
let snake2 = new Snake(
    {
        name: 'Paul',
        skin: 'green',
        keys: {
            topKey: 38,
                bottomKey: 40,
                leftKey: 37,
            rightKey: 39
        }
    },
null, null); // здесь координаты по x и y для второй змеи

console.log(snake1);

snake1.getShow();

// Проверка методов на работоспособность
console.log("Координаты змейки по X: " + snake1.getX());
console.log("Координаты головы змейки по X: " + snake1.getSnakeHeadX());
console.log("Координаты змейки по Y: " +snake1.getY());
console.log("Координаты головы змейки по Y: " + snake1.getSnakeHeadY());


// Отслеживание нажатия у каждого игрока
document.addEventListener('keydown', (e) => snake1.Move(e));   
document.addEventListener('keydown', (e) => snake2.Move(e));  


// Луп игры
function gameLoop(){
    for (let i = 0; i < Object.keys(snake1).length; i++) {
        context.fillStyle = snake1.getColorSnake();
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