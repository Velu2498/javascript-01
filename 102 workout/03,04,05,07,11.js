
//03
arr=[11,22,22,11,22,33,11,22,44,2]
//console.log(arr.length)
for(i=0;i<arr.length;i++){
// console.log(arr[i])
for(j=i+1;j<arr.length;j++){
    if(arr[i]==arr[j]){
        arr[j]=1
        }
    }
}
//console.log(arr)
for(i=0;i<arr.length;i++){
    if(arr[i]==1){
        arr.splice(i,1)
        i--
       //console.log(i)
    }
      }
//console.log(arr)
var sort=function(points) {
    points.sort(function(a, b){ return a-b});
     console.log(points);
     return points;
   }
sort(arr)
console.log(arr)


/*
//04
arr=[1,2,5,4]
var sort=function(points) {
    points.sort(function(a, b){ return a-b});
     console.log(points);
     return points;
   }
sort(arr)
console.log(arr)
e=arr.length
console.log(e)
if(e%2==0){
    m=e/2
    v=(arr[m]+arr[m-1])/2
    //console.log(m)
    console.log(v)
}
else{
    m=parseInt(e/2)
    v=arr[m]
    //console.log(m)
    console.log(arr[m])
}
*/


/*
//05
arr=["apple","car","cat","ap","cvbn"]
c=[]
g=[]
d={}
for (i=0;i<arr.length;i++){
    v=arr[i]
    c.push(v[0])
    //console.log(v[0])
}
for (i=0;i<arr.length;i++){
    v=arr[i]
    if(c[i]==v[0]){
        d[c[i]]=[v]   
    }
}
console.log(d)
console.log(p)
*/

/*
//07
arr=[6, -6, 8, -8, 9, -10, 0, 0, 1]
target=0
p=[]
for(i=0;i<arr.length;i++){
    //console.log(i)
    for(j=i+1;j<arr.length;j++){
        //console.log(j)
        //console.log(arr[i]+arr[j])
        v=[]
        if((arr[i]+arr[j])==target){
            v.push(arr[i],arr[j])
            p.push(v)
        }
    }
}
console.log(p)
*/

/*
//11 with sort fun
arr1=[3, 2, 2,8]
arr2=[9,4, 5, 5]
p=arr1.concat(arr2)
console.log(p)
p.sort()
for(i=0;i<p.length;i++){
    for(j=i+1;j<p.length;j++){
        if(p[i]==p[j]){
            p[j]=0
        }
    }
}
for(i=0;i<p.length;i++){
    if(p[i]==0){
        p.splice(i,1)
    }
}
console.log(p)
*/

/*
//11 with out sort fun
arr1=[3, 2, 2,8]
arr2=[9,4, 5, 5]
p=arr1.concat(arr2)
console.log(p)
o=[]
for(i=0;i<p.length;i++){
    for(j=i+1;j<p.length;j++){
        if(p[i]<p[j]){
            o.push(p[i])
        }
        else{
            o.push(p[j])
        }
    }
}
console.log(o)
for(i=0;i<o.length;i++){
    for(j=i+1;j<o.length;j++){
        if(o[i]==o[j]){
            o[j]=0
        }
    }
}
console.log(o)
for(i=0;i<o.length;i++){
    if(o[i]==0){
        o.splice(i,1)
        i--
    }
}
console.log(o)
*/
