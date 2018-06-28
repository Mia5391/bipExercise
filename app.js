window.onload = function() {
  const userEmail = "mia@gmail.com";
  const userPassword = "12345678";


  document.getElementById("login").onclick = function (email, password){
    let userEmailInput = document.getElementById("user-email").value;
    let userPasswordInput = document.getElementById("user-password").value;
    if (userEmail === userEmailInput && userPassword === userPasswordInput) {
      location="page2.html"} else {
      alert("Invalid username or password");
    }
  }

  function getBipByNumber (num) {
    fetch(`http://www.psep.cl/api/Bip.php?&numberBip=${num}`).then(response => response.json()).then(data => {

        console.log(data);

     })
    }
  console.log(getBipByNumber('26947792'));

}
