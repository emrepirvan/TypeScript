import { Taxi} from './11-modules-taxi';



var taxi_2 : Taxi = new Taxi({ x: 12, y :16},"red"); 
taxi_2.travelTo({x:1, y:2});


let currentlocation = taxi_2.location;
taxi_2.location = {x :123, y : 543};
taxi_2.travelTo({x:1232, y:5433});
console.log(taxi_2.location);