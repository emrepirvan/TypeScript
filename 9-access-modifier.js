//ts de default erişim belirteci public!!
var Taxi = /** @class */ (function () {
    // private color: string;   //constructor içinde erişim belirteciyle belirttiğimiz için bunlara gerek kalmadı
    // private currentLocation: Point;  //constructor içinde erişim belirteciyle belirttiğimiz için bunlara gerek kalmadı
    function Taxi(location, color) {
        this.location = location;
        this.color = color;
        // this.currentLocation =  location;  //constructor içinde erişim belirteciyle belirttiğimiz için bunlara gerek kalmadı
        // this.color = color;  //constructor içinde erişim belirteciyle belirttiğimiz için bunlara gerek kalmadı
    }
    Taxi.prototype.travelTo = function (point) {
        console.log("taksi \n                    x : ".concat(this.location.x, " \n                    y : ").concat(this.location.y, " dan\n                    x : ").concat(point.x, " \n                    y : ").concat(point.y, " konumuna gidiyor"));
    };
    return Taxi;
}());
var taxi_2 = new Taxi({ x: 12, y: 16 }, "red");
// taxi_2.color = 'red' constructordan aldık
// taxi_2.currentLocation = { x: 12, y :16} constructordan aldık
taxi_2.travelTo({ x: 1, y: 2 });
// console.log(taxi_2.color);  private yaptığımız için ulaşamayız
// console.log(taxi_2.currentLocation);    private yaptığımız için ulaşamayız
