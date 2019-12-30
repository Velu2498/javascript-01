
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

var obj1 = { foo: 'bar', x: 42 };
var obj2 = { foo: 'baz', y: 13 };

var clonedObj = { ...obj1 };
// Object { foo: "bar", x: 42 }

var mergedObj = { ...obj1, ...obj2 };
// Object { foo: "baz", x: 42, y: 13 }




