
var images= ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];
var x = Math.random() * 6;
var y = Math.random() * 6;
var randomNumber1 = Math.floor(x);
var randomNumber2 = Math.floor(y);
document.getElementsByTagName("img")[0].setAttribute("src",images[randomNumber1]);
document.getElementsByTagName("img")[1].setAttribute("src",images[randomNumber2]);
if(randomNumber1 === randomNumber2){
  document.querySelector("h1").innerHTML="Take Your Time.";
} else if(randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML="Go for Option 2!";
} else {
  document.querySelector("h1").innerHTML="Go For Option 1!";
}
