// interface Point {
//     x : number,
//     y : number
// }

// interface Vehicle {
//     travelTo(point : Point) 
// }

// // class Taxi implements Vehicle {
// //     constructor(private _location:Point,private _color:string) {
// //     }

// //     travelTo(point: Point): void {
// //         console.log(`taksi 
// //                     x : ${this._location.x} 
// //                     y : ${this._location.y} dan  
// //                     x : ${point.x} 
// //                     y : ${point.y} konumuna gidiyor`)
// //     }
// //     get location() {
// //         return this._location;
// //     }
// //     set location(value : Point) {
// //         if(value.x <0 || value.y <0) {
// //             throw new Error('kordinat bilgileri negatif olamaz')
// //         }
// //         this._location  = value;
// //     }
// // }
// var taxi_2 : Taxi = new Taxi({ x: 12, y :16},"red"); 
// taxi_2.travelTo({x:1, y:2});
// // let currentLocation = taxi_2.getLocation();

// // taxi_2.setLocation({ x: 100, y :160}) //propert tanımlamadan methodla bu şekilde
// // taxi_2.travelTo({x:10, y:20});

// let currentlocation = taxi_2.location;
// taxi_2.location = {x :123, y : 543};
// taxi_2.travelTo({x:1232, y:5433});
// console.log(taxi_2.location)