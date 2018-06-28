window.onload = function() {

function getBipByNumber (num) {
  fetch(`http://www.psep.cl/api/Bip.php?&numberBip=${num}`)
    .then(response => response.json())
    .then(data => {
      //console.log(data);
      Object.keys(data).forEach(function(key) {
        if(key === 'Saldo  tarjeta'){
          document.getElementById('balance').innerHTML = data[key];
        }
      });
   })
  }

}
