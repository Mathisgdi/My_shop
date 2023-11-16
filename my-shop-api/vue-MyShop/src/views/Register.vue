<template>
    <body>
      <div class="login-page">
        <div class="form">
          <div class="login">
            <div class="login-header">
              <h3>Register</h3>
              <p>Please enter your credentials to register.</p>
            </div>
          </div>
          <form id = "register-form" @submit.prevent="registerUser">
            <input id= "email" type="text" placeholder="email" />
            <input id = "password" type="password" placeholder="password" />
            <input id= "fullname" class="input" type="text" placeholder="fullname" />
            <button class="submit"> register</button>
            <p id="error" class="error"></p>
            <p class="message">
              Do you already have an account?
                <br>
              <RouterLink to="/login"> Connect to yours</RouterLink>
            </p>
          </form>
        </div>
      </div>
    </body>
</template>



<script>
import axios from 'axios';
import { setAuthToken, authToken } from '../components/Token.js'; // Importe la fonction et la variable qui stocke le token
import router from '../router'; //Importr les routes pour pouvoir rediriger l'utilisateur vers la page 'login' après l'inscription

setAuthToken()

export default {
    
//   methods: {
//     registerUser() {
//       const email = document.getElementById('email').value;
//       const password = document.getElementById('password').value;
//       const fullname = document.getElementById('fullname').value;
//       //Pour vérifier le mot de passe
//       var numbers = /[0-9]/g;
//       var lowerCaseLetters = /[a-zA-Z]/g;


//     if (email && password && fullname)
//     axios.post('http://localhost/api/users', {
//         email: email,
//         password: password,
//         fullName: fullname
//       }, 
//       {
//         headers: {
//           'Authorization': `Bearer ${authToken}` //authToken est importé du fichier token.js
//         }
//       }
//     )
// }
// }
// }
    //   .then(response => {
    //     // Gérer la réponse de l'API si nécessaire
    //   })
    //   .catch(error => {
    //     // Gérer l'erreur de l'API si nécessaire
    //   });
    

    
    // if (email == "" ){
    //     document.querySelector(".error").innerHTML = "Email must not be empty"
    // }
    
    // else if (!/@.*\..*/.test(email)) {
    //     document.querySelector("#error").textContent = "Email is badly formatted";
    //   }
    
    // else if (password.length >= 8){ 
    //     document.querySelector(".error").innerHTML = "Password must be at least 8 characters long and contain at least a letter and a number"
    //     if (password.match(lowerCaseLetters)){
    //         if( password.match(numbers)  ){
    //             document.querySelector(".error").innerHTML = ""
    //         }
    //     }
    //     else{
    //         document.querySelector(".error").innerHTML = "Password must be at least 8 characters long and contain at least a letter and a number"
    //     }
    // }
    // else if (fullname == ""){
    //     document.querySelector(".error").innerHTML = "Fullname must not be empty"
    // }
    
// if (email == "") {
//   document.querySelector(".error").innerHTML = "Email must not be empty";
// } else if (!/@.*\..*/.test(email)) {
//   document.querySelector("#error").textContent = "Email is badly formatted";
// } else if (password.length < 8 || !lowerCaseLetters.test(password) || !numbers.test(password)) {
//   document.querySelector(".error").innerHTML = "Password must be at least 8 characters long and contain at least a letter and a number";
// } else if (fullname == "") {
//   document.querySelector(".error").innerHTML = "Fullname must not be empty";
// } else {
//   // Tous les champs sont valides, faire la requête POST
//   axios.post('http://localhost/api/users', {
//         email: email,
//         password: password,
//         fullName: fullname
//       }, 
//       {
//         headers: {
//           'Authorization': `Bearer ${authToken}` //authToken est importé du fichier token.js
//         }
//       })
// }
// }
//   }
// }
methods: {
  registerUser() {
    const registerForm = document.getElementById('register-form');
    registerForm.addEventListener('submit', event => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const fullname = document.getElementById('fullname').value;

      if (email == "") {
        document.querySelector(".error").innerHTML = "Email must not be empty";
        event.preventDefault(); // Empêche la soumission du formulaire
      } else if (!/@.*\..*/.test(email)) {
        document.querySelector("#error").textContent = "Email is badly formatted";
        event.preventDefault(); 
      } else if (password.length < 4 ) {
        document.querySelector(".error").innerHTML = "Password must be at least 4 characters long";
        event.preventDefault(); 
      } else if (fullname == "") {
        document.querySelector(".error").innerHTML = "Fullname must not be empty";
        event.preventDefault(); 
      } 
      
      else {
        axios.post('http://localhost/api/users', {
        email: email,
        password: password,
        fullName: fullname
      }, 
      {
        headers: {
          'Authorization': `Bearer ${authToken}` //authToken est importé du fichier token.js
        }
      }
      
    )
    .then(response => {
  // Handle the response
  router.push('/login'); // Redirige l'utilisateur vers la page de connexion
    })
      }
    });
  }
}}
</script>


<style>

@import url(https://fonts.googleapis.com/css?family=Roboto:300);

.error{
    color: red;
}

.login-page {
  width: 360px;
  padding: 8% 0 0;
  margin: auto;
}
.login-page .form .login {
  margin-top: -31px;
  margin-bottom: 26px;
}
.form {
  position: relative;
  z-index: 1;
  background: #ffffff;
  max-width: 360px;
  margin: 0 auto 100px;
  padding: 45px;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}
.form input {
  font-family: "Roboto", sans-serif;
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  margin: 0 0 15px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
}
.form button {
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  outline: 0;
  background-color: #a2d2ff;
  background-image: linear-gradient(45deg, #a2d2ff, #bde0fe);
  width: 100%;
  border: 0;
  padding: 15px;
  color: #ffffff;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
}
.form .message {
  margin: 15px 0 0;
  color: #b3b3b3;
  font-size: 12px;
}
.form .message a {
  color: #4caf50;
  text-decoration: none;
}

.container {
  position: relative;
  z-index: 1;
  max-width: 300px;
  margin: 0 auto;
}
</style>