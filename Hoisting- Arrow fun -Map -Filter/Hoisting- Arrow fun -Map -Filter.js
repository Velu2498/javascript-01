
/*
//hoisting
f();
//var name;
console.log(name);
function f(){
    console.log(name);
    var name=10;
    console.log(name);
};
//name;
*/

/*
//with out arrow function
var arrmul=function(arr){
    for(i=0;i<arr.length;i++){
       arr[i]=arr[i]*2
    };
    console.log(arr);  
};
arrmul([1,2,3,4,5]);

//arrow function
fun=()=>{
    console.log("arrow function")
    return 1
}
fun()

//mutiply intiger
var intmul= e=> e=e*2
console.log(intmul(44))

//mutiply array
arr1=[2,2,1]
arr1=arr1.map(a=>a*2)
console.log(arr1)

//condition checking
arr2=[1,2,3,4,5,6]
arr2=arr2.filter(s =>{if(s%2==0){return s};})
console.log(arr2)
*/



/*
//map using arrow fun
arr=["asdfghj","dfghjk","dfghjkl"];
arr=arr.map(a=>a.length);
console.log(arr);

//filter using arrow fun
arr=["asd","dfghjk","dfghjkl"];
arr=arr.filter(a=>a.length>4);
console.log(arr);

//filter using annanamus fun
var f=function(k){
    p=[];
    if(k.length>4){
        return k;
    };
};
arr=["asd","dfghjk","dfghjkl"];
arr=arr.filter(f);
console.log(arr);


//map using normal function
 function k(m){
     return m.length
 }
arr=["asd","dfghjk","dfghjkl"];
arr=arr.map(k);
console.log(arr);

// map with normal function
arr=["asdfghj","dfghjk","dfghjkl"];
arr=arr.map(name);
console.log(arr);

function name(a){
if(a.length>4);
   return a;
}
*/


/*
// grades
//arr=[10,20,30,40,50,60,70,8];  
h=[]
function mark(arr){
for(i=0;i<arr.length;i++){
       if(arr[i]<30){
           arr[i]=arr[i]+30;
       };
       h.push(arr[i])
};
for(i=0;i<arr.length;i++){
       if(arr[i]>=10 && arr[i]<30){
           arr[i]="D";
       };
       if(arr[i]>=30 && arr[i]<60){
        arr[i]="C";
       };
       if(arr[i]>=60 && arr[i]<80){
           arr[i]="B";
       }
       if(arr[i]>=80 && arr[i]<=100){
           arr[i]="A";
       }
};
console.log(h);
console.log(arr);
arr=arr.filter(a=>a=="A" || a=="B");
console.log(arr);
};
mark([1,20,30,40,50,60,70,80,90]);
*/
