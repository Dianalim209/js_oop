// we're creating a function that takes some info about the ninja to create
function Ninja(name, age, preOccupation){ //ninja is like a class

//PUBLIC STUFF (ATTRIBUTES) DECLARED HERE
  this.name = name; // adding properties/attributes to that object
  this.age = age;
  this.preOccupation = preOccupation;

// PRIVATE STUFF DECLARED HERE
  var privateVar = "This is a private variable";
  var self = this; // this is what we need to do to keep track of this
  // private method declared here
  var privateMethod = function()  {
    console.log("this is private method for " + self.name + ".");
    // refer to name via self
    // if we put this.name, it refers to the Window Object, you will need to store a value of this in a private variable
  }

// public methods declared here
  this.introduce = function(){
    console.log("Hi my name is " + this.name + ". I used to be a "+ this.preOccupation + " and now I'm a Ninja!");
    privateMethod(); // this works since its a scope that can access privateMethod
    console.log(privateVar); // this works
  }
}
// we're going to create Diana this
var Diana =  new Ninja("Diana", 24, "Marine"); //this is like an instance of the class
Diana.introduce(); // the Diana.introduce is like an attribute
// Diana.privateMethod(); // doesnt work bcuz Diana doesnt have a "privateMethod" attrubute
// privateMethod(); // doesnt work bcuz privateMethod is scoped to the function
// Diana.privateVar; // doesnt work bcuz Diana doesnt have a "privateVar" attribute
// var Michael = new Ninja("Michael", 34, "Founder");
// Michael.introduce = function(){
//   console.log("I am the Sensei!")
// };
// Michael.introduce();
// we changed michael's introduce to the new console.log
