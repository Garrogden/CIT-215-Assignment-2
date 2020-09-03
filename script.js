var wrapperEle =document.body.querySelector(".wrapper");
var buttonEle =document.body.querySelector(".restart");

function rewriteFunction(){
  var milesDriven = Number(prompt("Enter the estimated number of miles that you drive."));
  var gasCost = Number(prompt("Enter the current cost of gasoline in your area."));
  calculator (milesDriven, gasCost, 12, ".answer1");
  calculator (milesDriven, gasCost, 17, ".answer2");
  calculator (milesDriven, gasCost, 26, ".answer3");
  calculator (milesDriven, gasCost, 29, ".answer4");
}

function calculator (milesDriven, gasCost, mpgRating, ans){
  var answer = Number (milesDriven/mpgRating*gasCost);
  document.querySelector(ans).innerHTML ="To drive a car with an MPG rating of " + mpgRating + " for " + milesDriven +" miles at " +gasCost +" per gallon would cost: "+ answer;
}  

buttonEle.addEventListener("click", function(){
  rewriteFunction();
})