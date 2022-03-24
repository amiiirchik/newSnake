"use strict"

class Prop {
    constructor(width,color) {
        this.width = width;
        this.color = color;
    }
    getColor() {
        return this.color;
    }
}

class Line extends Prop{
    constructor(sp,ep,width,color) {
        super(width,color)
        this.sp = sp;
        this.ep = ep;
        // this.width = width;
        // this.color = color;
    }

    getColor() {
        let color = super.getColor();
        return '['+color+']';  // this.color
    } // Переопределение метода базового класса в дочерний

    showColor() {
        // console.log(super.getColor())
        setTimeout(()=> {  // Лучше использовать стрелочную функцию, тк в отличии от безымянной функции она не создает никакого контекста
            console.log(super.getColor());
        }, 0)
    }

    draw() {
        console.log("Линия:" +this.sp.x+ "," +this.sp.y+ "," +this.ep.x+ "," +this.ep.y)
    }
}

let l1 = new Line({x:0, y:0}, {x:0, y:0}, 1, 'red');
l1.draw();
console.log(l1);
console.log(l1.getColor())
l1.showColor();