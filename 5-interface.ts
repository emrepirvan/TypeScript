// interface Point {
//     x : number,
//     y : number
// }
// interface Passenger {
//     name:string;
//     phone:string;
// }

// interface Vehicle {
//     currentLocation : Point;
//     travelTo(point : Point);
//     getDistance(pointA: Point, pointB:Point): number;
//     addPassanger(passanger: Passenger);
//     removePassanger(passanger : Passenger): void;
// }
// //bu sadece bir şema bundan bir nesne tanımlayabilmemiz için
// //bunu bir class'a çevirmemiz gerekicek
// //üstteki vehicle interface'i ile birlikte artık
// // //aşağıdakileri dışarıda tanımlamaya gerek kalmadı 
// // let travelTo = (point : Point) => {
// //     //..
// // }

// // let getDistance =( pointA : Point, pointB : Point ) => {
// //     //..
// // }

// // travelTo({
// //     x:1,
// //     y:5
// // });