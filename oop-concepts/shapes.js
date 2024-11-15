class Shape {
    #color
    constructor(color,area){
        this.#color=color
        this.area=area
    }
    setColor(color){
        this.#color=color
    }
    getColor(){
        return this.#color
    }
    getArea(){
        return null
    }
}

class Circle extends Shape {
    #radius
    constructor(color,radius){
        super(color)
        this.#radius=radius
    }
    getArea(){
        return Math.PI * Math.pow(this.#radius, 2)
    }
    print(){
        return 'Circl'
    }
}

const shape1= new Shape("red")
console.log(shape1)
console.log(shape1.getArea())

const circ1= new Shape("blue", 5)
console.log(shape1)
console.log(shape1.getColor())
console.log(shape1.getArea())