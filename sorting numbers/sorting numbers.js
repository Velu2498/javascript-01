/*
//sorting numbers
var sort=(points)=> {
   //points.sort()
   //console.log(points)
  points.sort(function(a, b){
       //console.log(a,b)
       //console.log(b)
       //console.log(a-b)
       return a-b});
   console.log(points);
   return points;
 }

 sort([40, 100, 1,5])
 */


/*

//sorting numbers
var sort=(points)=> {
   points.sort(function(a, b){return a-b});
    return points;
  }
sort([40, 100, 1,5])

*/

//sorting
 var st=function(numb){
     numb.sort(function(a,b){
         if(a<b){
             return -1
         }
         else if(b<a){
            return 1
         }
         else{
             return 0
         }
     })
     //console.log(numb)
     return numb
 }
 
st([11,22,3,1,5,88,77])
//console.log(st([11,22,3,1,1,5,88,77]))
 
