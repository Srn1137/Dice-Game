

var randomNumber1= Math.floor(Math.random()*6)+1;
var randomNumber2= Math.floor(Math.random()*6)+1;
console.log(randomNumber1);
var img=["","images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];
var source1= img[randomNumber1];
var source2= img[randomNumber2];

var image1=document.querySelectorAll("img")[0];
var image2=document.querySelectorAll("img")[1];

image1.setAttribute("src",source1);
image2.setAttribute("src",source2);


if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="💋Player 1 Wins";
}else if(randomNumber1==randomNumber2){
  document.querySelector("h1").innerHTML="Draw";
}
else{
  document.querySelector("h1").innerHTML="Player 2 Win💋";
}
