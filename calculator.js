window.onload = function() {

  document.getElementById("calculate").onclick = function(){
    let card = document.getElementById("card-select").value;
    getBipBalanceByNumber (card);
  }

  function getBipBalanceByNumber (num) {
    fetch(`http://www.psep.cl/api/Bip.php?&numberBip=${num}`)
      .then(response => response.json())
      .then(data => {
        Object.keys(data).forEach(function(key) {
          if(key === 'Saldo  tarjeta'){
            let cardBalance = data[key];
            let tariff = document.getElementById("tariff-select").value;
            let newBalance = calculateJourney(getBalanceNumber(cardBalance),tariff);
            document.getElementById("journey-price").innerHTML = '$'+tariff;
            document.getElementById("balance").innerHTML = '$'+newBalance;
          }
        });
    });
  }

  function getBalanceNumber(balanceText) {
    return balanceText.replace('$','').replace('.','');
  }

  function calculateJourney(cardBalance, tariff){
    return cardBalance-tariff;
  }
}
