window.onload = function() {
  
function getBipByNumber (num) {
  fetch(`http://www.psep.cl/api/Bip.php?&numberBip=${num}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
   })
  }
console.log(getBipByNumber('26947792'));

}
