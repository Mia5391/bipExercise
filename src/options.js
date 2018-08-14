window.onload = function(){

  printUserName();

  document.getElementById("balance").onclick = function (){
    location="balance.html"
  }

  document.getElementById("calculator").onclick = function (){
    location="calculator.html"
  }

  function printUserName(){
    let welcomeMessage = localStorage.getItem('user-name');
    document.getElementById('welcomeMessage').innerHTML = "Welcome " + welcomeMessage;
  }
}
