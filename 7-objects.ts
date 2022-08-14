// interface Point {
//     x : number,
//     y : number
// }

// interface Vehicle {
//     currentLocation : Point;
//     travelTo(point : Point) 
// }

// class Taxi implements Vehicle {
//     currentLocation: Point;
//     travelTo(point: Point): void {
//         console.log(`taksi 
//                     x : ${point.x} 
//                     y : ${point.y} konumuna gidiyor`)
//     }
// }

// class Bus implements Vehicle {

//     currentLocation: Point;
//     travelTo(point: Point): void {
//         console.log(`Otobüs 
//                     x : ${point.x} 
//                     y : ${point.y} konumuna gidiyor`)
//     }
// }

// let taxi_2 : Taxi = new Taxi();

// taxi_2.currentLocation = { x: 12, y :16}

// taxi_2.travelTo({x:1, y:2});

// console.log(taxi_2.currentLocation.x)
// console.log(taxi_2.currentLocation.y)

// let bus_1 : Bus = new Bus();

// bus_1.currentLocation = {x:124,y:32}

// bus_1.travelTo({x:1,y:2})

// console.log(bus_1.currentLocation.x)
// console.log(bus_1.currentLocation.y)