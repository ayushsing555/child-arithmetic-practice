 var check=document.getElementById("check");
document.getElementById("first").value=Math.floor(Math.random()*100);
document.getElementById("second").value=Math.floor(Math.random()*100);
var c=document.getElementById("answer");

c.addEventListener("keyup",()=>{
   var a=document.getElementById("first").value;
 var b=document.getElementById("second").value;
     var e=document.getElementById("answer").value;
    var d=parseInt(a)+parseInt(b);
    if(e==d)
       {
           c.style.color="green";
           document.getElementById("first").value=Math.floor(Math.random()*100);
           document.getElementById("second").value=Math.floor(Math.random()*100);
           document.getElementById("answer").value="";
           
       }
       else{
           c.style.color="red";
       }
})
check.addEventListener("click",()=>{
    var a=document.getElementById("first").value;
 var b=document.getElementById("second").value;
    var d=parseInt(a)+parseInt(b);
    alert(`Answer is ${d},better luck next time`);
    document.getElementById("first").value=Math.floor(Math.random()*100);
           document.getElementById("second").value=Math.floor(Math.random()*100);
           document.getElementById("answer").value="";
            

})