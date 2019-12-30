
/*
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
// Append all items from arr2 onto arr1
Array.prototype.push.apply(arr2,arr1);
console.log(arr1)
console.log(arr2)
console.log(Array)
*/

/*
//prototype
function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
  return eyecolor
}

Person.prototype.name =function () {
    return this.firstName + " " + this.lastName;
  }
var Father = new Person("John", "Doe", 50, "blue");
var Mother = new Person("Sally", "Rally", 48, "green");
console.log(Mother.name())
*/
/*
Person("John", "Doe", 50, "blue"); 
Person.nationality = "English"
Person.prototype.nationality = "English"
console.log(Person())
console.log(Person.age)
console.log(Father.nationality)
console.log(Mother.nationality)
console.log(Mother.age)
*/

/*
function myFunction(v, w, x, y, z,k) {console.log(v,w,x,y,z,k)}
var args = [0, 1];
myFunction(-1, ...args, 2, ...[3,5,6]);

function myFunction(x, y, z) { console.log(x,y,z)}
var args = [0, 1, 2];
myFunction.apply(null,args);

function myFunction(x, y, z) { console.log(x,y,z)}
var args = [0, 1, 5];
myFunction(...args);

 
var args = [0, 1, 5];
console.log(...args);

var obj = {"key1":"value1"};
console.log(...obj);
*/
