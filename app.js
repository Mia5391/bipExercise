const userEmail = "mia@gmail.com"
const userPassword = "12345678"

function userLogin(email, password){
   if (userEmail && userPassword = true) {
location="page2.html"
   }else {
     alert("Invalid username or password")
}
}


function getBipByNumber (num) {
  fetch(`http://www.psep.cl/api/Bip.php?&numberBip=${num}`)
  .then(response => response.json())
  .then(data => {

      console.log(data);

   })
  }

})
}
console.log(getBipByNumber('26947792'))
