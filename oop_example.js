// function Cat (cat_name){
//   //attributes
//   this.name =  cat_name;
//   this.getName = function(){
//     return this.name;
//   };
// }
// // var this = Object.create( Cat.prototype);
// // return this;
//
// // adding a method to the cat prototype
// // adding properties to the cat prototype
// Cat.prototype.sayHi = function(){
//   console.log('meow');
// };
// Cat.prototype.numLegs = 4;
// //this is an instance, attritubes are like cat.color, cat.name
// var muffin = new Cat('muffin');
// var biscuit = new Cat('biscuit');
// console.log(muffin, biscuit);
// // //we access prototype properties the same way as we would access 'own' properties
// muffin.sayHi();
// biscuit.sayHi();
// console.log(muffin.numLegs);

// create a Ninja Class (kind of)
function Ninja(name){
  this.name = name; // creating instance variables
  this.distance_traveled = 0;
}
// creating an instance method
Ninja.prototype.walk = function(){
  console.log(this.name + ' is walking');
  this.distance_traveled += 1;
  return this; // have this method return it's own Object
};
// creating an instance method
Ninja.prototype.run = function(){
  console.log(this.name + ' is running');
  this.distance_traveled += 5;
  this.displayDistanceTraveled();
  return this; // have this method return its own object
}
//another instance method
Ninja.prototype.displayDistanceTraveled =  function(){
  console.log('distance traveled: ', this.distance_traveled);
}
// creating instances/objects
ninja1 = new Ninja('Jay');
ninja2 = new Ninja('Diana');
ninja3 = new Ninja('Mimi');

ninja2.walk().run().walk().run().run(); // because walk/run returns itself, we can chain these methods
// // you can also log ninja1 and study it
// console.log(ninja1);
