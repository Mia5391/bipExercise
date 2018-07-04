window.onload = function() {
  const defaultUserEmail = "mia@gmail.com";
  const defaultUserPassword = "123";

  document.getElementById("login").onclick = function (email, password){
    let userEmailInput = document.getElementById("user-email").value;
    let userPasswordInput = document.getElementById("user-password").value;
    if (validateEmailAndPassword(userEmailInput, userPasswordInput)) {
      let userName = document.getElementById('user-name').value;
      localStorage.setItem('user-name', userName);
      document.getElementById('user-name').innerHTML = 'Mia';
      location="page2.html";
    } else {
      alert("Invalid username or password");
    }
  }

  function validateEmailAndPassword(email, password) {
    if (defaultUserEmail === email && defaultUserPassword === password){
      return true;
    } else {
      return false;
    }
  }

  function isValidEmailFormat(userInput) {
    if (userInput.includes('@')){
      if (substr(userInput.indexOf('@')).includes('.')) {
        return true;
      }else{
        return false;
      }
    }else{
      return false;
    }
  }

  function isValidPasswordFormat(userInput) {
    if (userInput.lenght <= 8 && isInteger(userInput)){
      return true;
    } else {
      return false;
    }
  }

  function isInteger(userInput){
    let inputIsANumber = parseInt(userInput) != NaN;
    let inputIsAnInteger = userInput % 1 === 0;
    return inputIsANumber && inputIsAnInteger;
  }

}
