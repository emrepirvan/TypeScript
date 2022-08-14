var Taxi = /** @class */ (function () {
    function Taxi(_location, _color) {
        this._location = _location;
        this._color = _color;
    }
    Taxi.prototype.travelTo = function (point) {
        console.log("taksi \n                    x : ".concat(this._location.x, " \n                    y : ").concat(this._location.y, " dan  \n                    x : ").concat(point.x, " \n                    y : ").concat(point.y, " konumuna gidiyor"));
    };
    Object.defineProperty(Taxi.prototype, "location", {
        get: function () {
            return this._location;
        },
        set: function (value) {
            if (value.x < 0 || value.y < 0) {
                throw new Error('kordinat bilgileri negatif olamaz');
            }
            this._location = value;
        },
        enumerable: false,
        configurable: true
    });
    return Taxi;
}());
var taxi_2 = new Taxi({ x: 12, y: 16 }, "red");
taxi_2.travelTo({ x: 1, y: 2 });
// let currentLocation = taxi_2.getLocation();
// taxi_2.setLocation({ x: 100, y :160}) //propert tanımlamadan methodla bu şekilde
// taxi_2.travelTo({x:10, y:20});
var currentlocation = taxi_2.location;
taxi_2.location = { x: 123, y: 543 };
taxi_2.travelTo({ x: 1232, y: 5433 });
console.log(taxi_2.location);
