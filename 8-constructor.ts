interface Point {
    x : number,
    y : number
}

interface Vehicle {
    currentLocation : Point;
    travelTo(point : Point) 
}

class Taxi implements Vehicle {
    color?: string;


    constructor(location:Point, color?:string) {
        this.currentLocation =  location;
        this.color = color;
    }

    currentLocation: Point;
    travelTo(point: Point): void {
        console.log(`taksi 
                    x : ${point.x} 
                    y : ${point.y} konumuna gidiyor`)
    }
}
let taxi_2 : Taxi = new Taxi({ x: 12, y :16}, 'red');
// taxi_2.color = 'red' constructordan aldık
// taxi_2.currentLocation = { x: 12, y :16} constructordan aldık

taxi_2.travelTo({x:1, y:2});
