/*
//recursion 
var count=0;
(function velu() {
    console.log("hii");
    count+=1;
    //console.log(count)
    if(count==5){
        return 0;
    }
    velu()
})();
console.log(count)
*/

   
/*
//length of string
function strLength(s) {
    var len = 0;
    while (s[len] !== undefined)
      length++;
    return length;
  }
  console.log(strLength("Helghlo"));
  */

/*
// compare length of string
var strLength=(s,l)=> {
    var leno = 0;
    var lent = 0;
    while (s[leno] !== undefined)
      leno++;
    while (l[lent] !== undefined)
      lent++;
    //console.log(leno,lent)
    if(leno==lent){
        console.log("true")
        return "true";
    }
    else{
        console.log("false")
        return "false"
    }
  }
strLength("guvi","guvi")
*/