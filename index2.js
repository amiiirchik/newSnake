"use strict"

class Snake {
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

    constructor(player) {
        this.#player = player;
    }

    getShow() {
       return console.log(this.#player.name,
        this.#player.skin,
        this.#player.keys.topKey);
    }

}

let snake = new Snake(  {
                        name: 'Alex', 
                        skin:'red', 
                        keys: {
                            topKey:37, 
                            bottomKey:38, 
                            leftKey:39, 
                            rightKey:40
                            }
                        }
                    );


snake.getShow();

console.log(snake);




//    const player = {
//         name: null,
//         skin: null,
//         keys: {
//             topKey: null,
//             bottomKey: null,
//             leftKey: null,
//             rightKey: null
//         }


//     }

//     player.name = 'Алекс'

    

// console.log(player);

