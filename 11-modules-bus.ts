import { Point } from "./11-modules-point";
import { Vehicle } from "./11-modules-vehicle";

export class Bus implements Vehicle {
    constructor(private _location:Point,private _color:string) {
    }

    travelTo(point: Point): void {
        console.log(`Otobüs 
                    x : ${this._location.x} 
                    y : ${this._location.y} dan  
                    x : ${point.x} 
                    y : ${point.y} konumuna gidiyor`)
    }
    get location() {
        return this._location;
    }
    set location(value : Point) {
        if(value.x <0 || value.y <0) {
            throw new Error('kordinat bilgileri negatif olamaz')
        }
        this._location  = value;
    }
}