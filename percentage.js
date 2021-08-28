var check=document.getElementById("check");
document.getElementById("first").value=Math.floor(Math.random()*100);
document.getElementById("second").value=Math.floor(Math.random()*1000);
var c=document.getElementById("answer");

c.addEventListener("keyup",()=>{
   var a=document.getElementById("first").value;
 var b=document.getElementById("second").value;
     var e=document.getElementById("answer").value;
    var d=(a*b) / 100;
    d=Math.floor(d);
    if(e==d)
       {
           c.style.color="green";
           document.getElementById("first").value=Math.floor(Math.random()*100);
           document.getElementById("second").value=Math.floor(Math.random()*1000);
           document.getElementById("answer").value="";
           
       }
       else{
           c.style.color="red";
       }
})
check.addEventListener("click",()=>{
    var a=document.getElementById("first").value;
 var b=document.getElementById("second").value;
    var d=(a*b);
    d=(d / 100);
    d=Math.floor(d);
    alert(`Answer is ${d},better luck next time`);
    document.getElementById("first").value=Math.floor(Math.random()*100);
           document.getElementById("second").value=Math.floor(Math.random()*1000);
           document.getElementById("answer").value="";
            

})