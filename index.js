function play(){
  var ranndomnumber1 = Math.floor(Math.random()*6)+1;
  var randomDiceImage1 = "images/dice"+ranndomnumber1+".png";
  document.querySelectorAll("img")[0].setAttribute("src",randomDiceImage1);

  var ranndomnumber2 = Math.floor(Math.random()*6)+1;
  var randomDiceImage2 = "images/dice"+ranndomnumber2+".png";
  document.querySelectorAll("img")[1].setAttribute("src",randomDiceImage2);

  if(ranndomnumber1 === ranndomnumber2)
  {
    document.querySelector("h1").innerHTML = "Draw";
  }
  else if(ranndomnumber1>ranndomnumber2)
  {
    document.querySelector("h1").innerHTML = "Player 1 wins!";
  }
  else
  {
    document.querySelector("h1").innerHTML = "player 2 wins!";
  }
}
