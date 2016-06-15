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

// Now modify your code to use Prototype and the recommended way of OOP we showed in the previous chapter. You may have to change some private variables/methods to attributes to make all of the functionality work. Then make the following adds:
//Have each vehicle generate a random VIN number (study Math.random & Math.floor) -- also don't worry about duplicates for now
//Create an instance method (using prototype) that returns the VIN number

function Vehicle(name, wheels, passengers,speed){
  this.name = name;
  this.wheels = wheels;
  this.passengers = passengers;
  this.speed = speed;
  this.distance_travelled = 0;
  this.VinNum = Math.floor(Math.random() * 900000) +1;
};
Vehicle.prototype.makeNoise = function(){console.log("")
};
Vehicle.prototype.updateDistanceTravelled = function(){
  this.distance_travelled+=this.speed;
};
Vehicle.prototype.checkMiles = function(){
  console.log("Distance Traveled: ", this.distance_travelled)
};
Vehicle.prototype.move = function(){
  this.updateDistanceTravelled();
  this.makeNoise();
  this.checkMiles();
  return this;
};
  Vehicle.prototype.getVin = function(){
  console.log("VIN:", this.VinNum);
  return this;
};

var Bike = new Vehicle('Bike',2,1,20);
Bike.makeNoise = function(){
  console.log("ring ring!")};
Bike.getVin().move().makeNoise();

console.log("111111111");

var Sedan = new Vehicle('Sedan',4,4,60);
Sedan.makeNoise = function(){console.log("Honk Honk! Move out the way!")};
Sedan.getVin().move().makeNoise();

console.log('222222222')

var Bus = new Vehicle('Bus',6,0,45);
console.log(Bus);
Bus.pickUpPassenger = function(){this.passengers++};
console.log(Bus.passengers);
Bus.getVin().move().move().pickUpPassenger();
