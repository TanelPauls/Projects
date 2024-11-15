class Circle{
    corners(){
        console.log("cirn no corner")
    }
    sides(){
        console.log("circ 1 side")
    }
}
class Rectangle{
    corners(){
        console.log("Rec 4 side")
    }
    sides(){
        console.log("Rec 4 corner")
    }
}
const cornerTest= (shape)=>{
    shape.corners()
}

const firstShape=new Circle();
const secondShape=new Rectangle();

cornerTest(firstShape)
cornerTest(secondShape)
