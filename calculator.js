window.onload = function() {

  document.getElementById("calculate").onclick = function(){
    let card = document.getElementById("card-select").value;
    let tariff = document.getElementById("tariff-select").value;
    let balance = getBalanceNumber(getBipBalanceByNumber(card));
    document.getElementById("balance").innerHTML = calculateJourney(balance, tariff);
  }

  function getBipBalanceByNumber (num) {
    let cardBalance = '';
    fetch(`http://www.psep.cl/api/Bip.php?&numberBip=${num}`)
      .then(response => response.json())
      .then(data => {
        //console.log(data);
        Object.keys(data).forEach(function(key) {
          if(key === 'Saldo  tarjeta'){
            cardBalance = data[key];
          }
        });
    });
    return cardBalance;
  }

  function getBalanceNumber(balanceText) {
    return balanceText.replace('$','').replace('.','');
  }

  function calculateJourney(cardBalance, tariff){
    return cardBalance-tariff;
  }
}
