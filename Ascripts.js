var A=document.getElementById('first');
var B=document.getElementById('second');

function Alogin(){
  var one=document.getElementById('one');
 if (one) {
   A.style.display = "block";
   B.style.display = "none";
 }else{
   A.style.display = "none";
 }
}
function  Aregister(){
   var two=document.getElementById('two');
  if (two) {
    A.style.display="none";
   B.style.display = "block";
 }else{
   B.style.display = "none";
 }
  }
