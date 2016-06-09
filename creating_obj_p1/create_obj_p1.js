// Create a vehicleConstructor that takes in the name, number of wheels, and number of passengers
// Each vehicle should have a makeNoise method
// Using the constructor, create a Bike
// redefine the Bike's makeNoise method to print "ring ring!"
// Using the constructor, create a Sedan
// redefine the Sedan's makeNoise method to print "Honk Honk!"
// Using the constructor, create a Bus
// Give the bus a pickUpPassengers method that takes in the number of passengers to pick up and adds them to the passenger count

function VehicleConstructor(name, wheels, passengers){
  var vehicle = {};
  vehicle.name = name;
  vehicle.wheels = wheels;
  vehicle.passengers = passengers;
  vehicle.makeNoise = function(){
    console.log("I am a " + vehicle.name + ". I have " + vehicle.wheels + " wheels. And I can carry " + vehicle.passengers + " passenger(s).")
  }; return vehicle;
}
var Bike = VehicleConstructor('Bike',2,1);
console.log(Bike);
Bike.makeNoise = function(){console.log("ring ring!")};
Bike.makeNoise();

var Sedan = VehicleConstructor('Sedan', 4, 4);
console.log(Sedan);
Sedan.makeNoise = function(){console.log("Honk Honk! Move out the way!")};
Sedan.makeNoise();

var Bus = VehicleConstructor('Bus',6,0);
console.log(Bus);
Bus.pickUpPassenger = function(){this.passengers++};
console.log(Bus.passengers);
Bus.pickUpPassenger();
console.log(Bus.passengers);
Bus.pickUpPassenger();
console.log(Bus.passengers);
Bus.pickUpPassenger();
console.log(Bus.passengers);
