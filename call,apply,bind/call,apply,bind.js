
/*
//call
var person = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
  }
  var person1 = {
    firstName:"John",
    lastName: "Doe"
  }
  person.fullName.call(person1, "Oslo", "Norway")

  console.log(person.fullName.call(person1, "Oslo", "Norway"))
*/

  //apply
//   var person = {
//     fullName: function(city, country) {
//       return this.firstName + " " + this.lastName + "," + city + "," + country;
//     }
//   }
//   var person1 = {
//     firstName:"John",
//     lastName: "Doe"
//   }
//   person.fullName.apply(person1, ["Oslo", "Norway"]);
// console.log(person.fullName())
  
// //bind
var obj = {name:"Nil"};
var greeting = function(a,b,c){
    return "welcome "+this.name+" to "+a+" "+b+" in "+c;
};
var bound = greeting.bind(obj); 
console.log(bound); //returns a function
console.log(bound("Newtown","KOLKATA","WB"));
