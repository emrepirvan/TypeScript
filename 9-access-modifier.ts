// interface Point {
//     x : number,
//     y : number
// }

// interface Vehicle {
//     // currentLocation : Point;    //constructor içinde erişim belirteciyle belirttiğimiz için bunlara gerek kalmadı
//     travelTo(point : Point) 
// }
// //ts de default erişim belirteci public!!
// class Taxi implements Vehicle {
//     // private color: string;   //constructor içinde erişim belirteciyle belirttiğimiz için bunlara gerek kalmadı
//     // private currentLocation: Point;  //constructor içinde erişim belirteciyle belirttiğimiz için bunlara gerek kalmadı


//     constructor(private location:Point,private color:string) {
//         // this.currentLocation =  location;  //constructor içinde erişim belirteciyle belirttiğimiz için bunlara gerek kalmadı
//         // this.color = color;  //constructor içinde erişim belirteciyle belirttiğimiz için bunlara gerek kalmadı
//     }

//     travelTo(point: Point): void {
//         console.log(`taksi 
//                     x : ${this.location.x} 
//                     y : ${this.location.y} dan  
//                     x : ${point.x} 
//                     y : ${point.y} konumuna gidiyor`)
//     }
// }
// var taxi_2 : Taxi = new Taxi({ x: 12, y :16},"red"); // oluşurken zaten harita bilgisi veriyoruz
// // taxi_2.color = 'red' constructordan aldık
// // taxi_2.currentLocation = { x: 12, y :16} constructordan aldık
// taxi_2.travelTo({x:1, y:2});
// // console.log(taxi_2.color);  private yaptığımız için ulaşamayız
// // console.log(taxi_2.currentLocation);    private yaptığımız için ulaşamayız