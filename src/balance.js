window.onload = function() {

document.getElementById("balance-button").onclick = function(){
  getBipByNumber(document.getElementById("card-select").value);
}

function getBipByNumber (id) {
  fetch(`http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=${id}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      Object.keys(data).forEach(function(key) {
        if(key === 'Saldo  tarjeta'){
          document.getElementById('balance').innerHTML = data[key];
        }
      });
   })
  }
}
