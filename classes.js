 export default class Vehicle
{
     constructor(make, name, engine)
     {
      this.make = make;
      this.name= name;
      this.engine = engine;

     }


     get getName()
     {
       return (`The name of the vehicle is ${this.name}`);
     };

    get getMaker(){
        return (`Car was made in germane and make no ${make}`);

    }


} 

let truck = new Vehicle( "Two Tipper", "Mercedes Benz",  "c63");

//console.log(bike.getName);

console.log(truck.getName);
//console.log(make.getMaker);