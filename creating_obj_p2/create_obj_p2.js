// Modify your vehicleConstructor (from Creating Objects Part I) to use this & new (and follow the JS conventions talked about in the previous chapters) to recap, here were the requirements from Part I:
//
// Create a vehicleConstructor that takes in the name, number of wheels, and number of passengers
// Each vehicle should have a makeNoise method
// Using the constructor, create a Bike
// redefine the Bike's makeNoise method to print "ring ring!"
// Using the constructor, create a Sedan
// redefine the Sedan's makeNoise method to print "Honk Honk!"
// Using the constructor, create a Bus
// Give the bus a pickUpPassengers method that takes in the number of passengers to pick up and adds them to the passenger count
// Then make the following modifications:
//
// Have the Vehicle constructor also take in a "speed"
// Store the speed as an attribute
// Create a private variable called distance_travelled that starts at 0
// Create a private method called updateDistanceTravelled that increments distance travelled by speed
// Add a method to the Vehicle called "move" that calls updateDistanceTravelled and then makeNoise
// Add a method called checkMiles that console.logs the distance_travelled

function VehicleConstructor(name, wheels, passengers,speed){
  var self = this;
  this.name = name;
  this.wheels = wheels;
  this.passengers = passengers;
  this.speed = speed;
  this.makeNoise = function(){console.log("")};
  var distance_travelled = 0;
  this.updateDistanceTravelled = function(){distance_travelled+=this.speed;};
  this.checkMiles = function(){console.log("Distance Traveled: ", distance_travelled)};
  this.move = function(){this.updateDistanceTravelled(); this.makeNoise();this.checkMiles()};

}
var Bike = new VehicleConstructor('Bike',2,1);
Bike.makeNoise = function(){console.log("ring ring!")};
Bike.move();

Bike.move();
Bike.move();

var Sedan = new VehicleConstructor('Sedan', 4, 4);
Sedan.makeNoise = function(){console.log("Honk Honk! Move out the way!")};
Sedan.move();
Sedan.move();
Sedan.move();

var Bus = new VehicleConstructor('Bus',6,0);
console.log(Bus);
Bus.pickUpPassenger = function(){this.passengers++};
console.log(Bus.passengers);
Bus.pickUpPassenger();
console.log(Bus.passengers);
Bus.pickUpPassenger();
console.log(Bus.passengers);
Bus.pickUpPassenger();
console.log(Bus.passengers);
Bus.move();
Bus.move();
Bus.move();
