/*
//ass 01
k=[]
mydata={math:80,sci:90,history:100,evs:70};
for(i in mydata){
    k.push(mydata[i])
};
console.log(k);

//ass 02
l=[]
mydata={math:80,sci:90,history:100,evs:70};
for(i in mydata){
  l.push(i) 
};
console.log(l)

//ass 03
mydata={math:80,sci:90,history:100,evs:70};
p=[];
for(i in mydata){
    p.push([i,mydata[i]])
};
console.log(p)

//ass 04
var myarr=["guvi","dsv","sdvsf","geek"]
q={};
q[myarr[0]]=myarr[myarr.length-1];
console.log(q)

//ass 05
var narr=[["one","two"],["three","four"],["five","six"]];
m={}
for(i=0;i<narr.length;i++){
    v=narr[i];
    m[v[0]]=v[1]
};
console.log(m)

*/
/*
//ass 06
b=[]
var narr=[[["one","two"],["three","four"],["five","six"]],[[1,2],[3,4],[5,6]]];
for(i=0;i<narr.length;i++){
    v=narr[i];
    o={}
    for(j=0;j<v.length;j++){
        k=v[j]
        o[k[0]]=k[1]
        //console.log(o)
    };

    b.push(o)
};
console.log(b)
*/
/*
//07
var expected = {foo: 5, bar: 6};
var actual = {foo: 7 , bar: 6};
var actstr= JSON.stringify(expected);
var actstr2= JSON.stringify(actual);
if (actstr==actstr2){
    console.log("detects that two objects are equal")
}
else{
    console.log("FAILED [my test] Expected"+ actstr + "but got"+ actstr2)
}

*/