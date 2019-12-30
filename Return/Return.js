/*
//return 01
var a=function(a){
    if(a){
        console.log(a+a)
        return a*a
        console.log(a*a)
    }
    else{
        //console.log(a)
        console.log("in else")
        return -1
    }
    console.log("fun end")
    console.log(t)
};
a(true)
a(false)
a(0)
a(4)
a(-4)
f=a(0)
console.log(f)
console.log(a(4))
*/

/*
//return 02
var b=function(a,b){
    var sum=0
    for (i=0;i<a;i=i+2){
        if((b%2)==0){
            return sum;
        }
        else{
            sum=sum+i+2;
            console.log(a,i);
            //return sum
        }
    }
    return sum

}
console.log(b(5,3))
//console.log(b(6,2))
*/


//return 03
var b=function(a,b){
    var sum=0
    for (i=0;i<a;i=i+2){
        for(j=0;j<b;j++){
            if((j%2)==1){
                sum+=1
                //return sum
            }
            else{
                sum=sum+2
                //return sum
            }
        }
    }
    return sum
}
console.log(b(5,3))
console.log(b(6,2))


