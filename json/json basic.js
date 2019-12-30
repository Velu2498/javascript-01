
/*
f={"name":"guvi",type:"zen",k:function(){console.log("name") 
console.log(this.type)
return "return"
}}
console.log(f.name)
console.log(f.k()) 
*/

/*
// dictnory
f={name:"guvi",type:"zen",k:function(){console.log("name") 
console.log(this.type)
return "return"
}}
 */


/*
 // class
var a=function(){
 f={name:"guvi",type:"zen",k:function(){console.log("name") 
console.log(this.type)
return "return"
}}
return f
}
d=a()
v=a()
console.log(d.type)
console.log(v.name)
*/

/*
var vehicle=()=>{
     r={start:function(){
        console.log("start")
    },stop:function(){
        console.log("stop")
    },print_details:function(){
        console.log("weight")
        console.log("model")
        console.log("name")
    }}
    return r
}
vehicle()
r.start()
vi=vehicle()
vi.start()
vi.stop()
vi.print_details()
*/


/*
// game 
var player=()=>{
    p={setname:function(d){name=d
    //console.log(name)
    return name}, 
    settype:function(d){wep=d 
        if(wep>0 && wep<5){
        //console.log(wep)
        return wep}
        else {
       //console.log(-1)
        return -1}},
    setmedikit:function(d){med=d
        if(med<101){
            return med
        }
        else{
            return -1
        }
    },
    setlevel:function(d){level=d
        if(level>0 && level<6){
            return level
        }
        else{
            return -1
        }
    },
    shoot:function(){
        console.log("shoot with"+" "+this.settype(wep))
    },
    health:function(){
        console.log("my health is at"+" "+p.setmedikit(med))
    },
    level:function(){
        console.log(v.setname(name)+" "+"is at level"+" "+this.setlevel(level))
    }
}
return p
}
v=player()
v.setname("velu")
v.settype(2)
v.setmedikit(88)
v.setlevel(44)
v.shoot()
v.health()
v.level()
*/