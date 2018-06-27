const userEmail = "mia@gmail.com"
const userPassword = "12345678"

function userLogin(email, password){
  if (userEmail && userPassword = true) {
location="page2.html"
  }else {
alert("Invalid username or password")
}
}


function fetchBipApi () {
    fetch('http://bip.franciscocapone.com/api/getSaldo/{id_tarjeta}')
      .then((result) => result.json())
      .then((data) => {
        for (let i = 0; i < data.length; i++) {
          let option = document.createElement("option");
          option.text = data[i].id;
          selectCohort.add(option);
        }
      });
  }
