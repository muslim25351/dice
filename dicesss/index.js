var n = Math.floor(Math.random()*6)+1;
var p= Math.floor(Math.random()*6)+1;
var m="images/dice"+n+".png";
var w="images/dice"+p+".png";
var o =document.querySelector("#fi");
var i =document.querySelector("#se");
o.setAttribute("src",m);
i.setAttribute("src",w);
if (n>p){

    document.querySelector("h1").innerHTML="☪ player 1 wins!";
}
else if (n<p){
    document.querySelector("h1").innerHTML="player 2 wins☪!";
}
else{
    document.querySelector("h1").innerHTML="Draw";   
}