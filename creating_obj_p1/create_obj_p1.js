function NinjaConstructor(name, age, prevOccupation){
  var ninja = {};
  ninja.name = name;
  ninja.age = age;
  ninja.prevOccupation = prevOccupation
  ninja.introduce = function()  {
    console.log("Hi my name is " + ninja.name + ". I used to be a "+ ninja.prevOccupation + " and now I'm a ninja! :p " + "And I am " + ninja.age + " years old!");
  }
  return ninja;
}

var Diana = NinjaConstructor("Diana", 24, "Marine");
Diana.introduce = function() {
  console.log("I am the one!")
}
var Michael = NinjaConstructor("Michael", 34, "Founder");
Michael.introduce = function() {
  console.log("I am the Sensei!")
}
Michael.introduce();
