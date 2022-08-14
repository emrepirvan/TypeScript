var Taxi = /** @class */ (function () {
    function Taxi() {
    }
    Taxi.prototype.travelTo = function (point) {
        console.log("taksi \n                    x : ".concat(point.x, " \n                    y : ").concat(point.y, " konumuna gidiyor"));
    };
    return Taxi;
}());
var Bus = /** @class */ (function () {
    function Bus() {
    }
    Bus.prototype.travelTo = function (point) {
        console.log("Otob\u00FCs \n                    x : ".concat(point.x, " \n                    y : ").concat(point.y, " konumuna gidiyor"));
    };
    return Bus;
}());
var taxi_2 = new Taxi();
taxi_2.currentLocation = { x: 12, y: 16 };
taxi_2.travelTo({ x: 1, y: 2 });
console.log(taxi_2.currentLocation.x);
console.log(taxi_2.currentLocation.y);
var bus_1 = new Bus();
bus_1.currentLocation = { x: 124, y: 32 };
bus_1.travelTo({ x: 1, y: 2 });
console.log(bus_1.currentLocation.x);
console.log(bus_1.currentLocation.y);
