function Ninja(name, age, prevOccupation) {
                                  // PRIVATE STUFF DECLARED HERE
  var privateVar = "This is a private variable";
  var privateMethod = function() {
    console.log("this is a private method");
  }
  // PUBLIC STUFF (ATTRIBUTES) DECLARED HERE
  this.name = name;               // adding properties/attributes to that object
  this.age = age;
  this.prevOccupation = prevOccupation
  this.introduce = function() {   // adding methods to that object
    console.log("Hi my name is " + this.name + ". I used to be a " + this.prevOccupation + " and now I'm a Ninja!");
    privateMethod(); // this works since it is a scope that can access privateMethod!
    console.log(privateVar);      // this works too!
  }
}
var Andrew = new Ninja("Andrew", 24, "TFA Teacher");
Andrew.privateMethod();   // this doesn't work because Andrew doesn't have a "privateMethod" attribute!
privateMethod();          // this doesn't work because privateMethod is scoped to the function
Andrew.privateVar;        // this doesn't work because Andrew doesn't have a "privateVar" attribute

function Ninja(name, age, prevOccupation) {
  // PUBLIC ATTRIBUTES DECLARED HERE
  this.name = name;
  this.age = age;
  this.prevOccupation = prevOccupation

  // PRIVATE VARIABLE DECLARED HERE
  var privateVar = "This is a private variable";
  var self = this; // this is what we need to do to keep track of this
  // PRIVATE METHOD DECLARED HERE
  var privateMethod = function() {
    console.log("this is a private method for " + self.name);     // refer to name via self
  }

  // PUBLIC METHODS DECLARED HERE
  this.introduce = function() {
    console.log("Hi my name is " + this.name + ". I used to be a " + this.prevOccupation + " and now I'm a Ninja!");
    privateMethod();             // this works since it is a scope that can access privateMethod!
    console.log(privateVar);     // this works too!
  }
}
var Andrew = new Ninja("Andrew", 24, "TFA Teacher");
Andrew.introduce();
