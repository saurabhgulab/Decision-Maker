
var images= ["dice1.png","dice2.png","dice3.png","dice4.png","dice5.png","dice6.png"];
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
