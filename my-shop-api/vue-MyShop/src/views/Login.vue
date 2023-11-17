<template>
  
    <body>
      <div class="login-page">
        <div class="form">
          <div class="login">
            <div class="login-header">
              <h3>LOGIN</h3>
              <p>Please enter your credentials to login.</p>
            </div>
          </div>
          <form id = "login-form" >
            <input id= "email" type="text" placeholder="email" />
            <input id = "password" type="password" placeholder="password" />
            <button class="submit" v-on:click="loginUser"> login </button>
            <p id="error" class="error"> </p>

            <p class="message">
              Not registered?
              <RouterLink to="/register">  Create an account </RouterLink>
            </p>
            
          </form>
        </div>
      </div>
    </body>
  
</template>





<script>
import axios from 'axios';
// import { setAuthToken, authToken } from '../components/Token.js'; // Importe la fonction et la variable qui stocke le token
import router from '../router'; //Importr les routes pour pouvoir rediriger l'utilisateur vers la page 'login' après l'inscription

// setAuthToken()

export default {
// methods: {
//   loginUser() {
//     const registerForm = document.getElementById('register-form');
//     registerForm.addEventListener('submit', event => {
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;
//     console.log("test")
//     const response = axios.post('http://localhost/authentication_token', {
//         email: email,
//         password: password,
//       });
//       const status = response.data.status;
//       if (status == 200) {
//         router.push('/test');
//       }
//     } 
//     )
//   }


    
//     }
//   }

  methods: {
  loginUser() {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', event => {
      event.preventDefault();

      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      axios.post('http://localhost/authentication_token', {
        email: email,
        password: password,
      })
      .then(response => {
        const status = response.status;
        console.log(status)
        if (status == 200){ // Si le status est 200 alors ça veut dire que les informations rentré par l'utilisateur sont correctes 
          router.push('/adminorusers'); //Redirige sur la page AdminOrUsers
         }
        }
      )
      .catch(error => {
        if (error.response.status === 401) { // Si le status est 401 -> informations rentré par l'utilisateur sont incorrectes car le status 401 correspond à une erreur d'authentification
          document.querySelector("#error").innerHTML = "The email or password is incorrect";
        } else {
          console.log(error);
        }
      });
    });
  }
}
}

</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Roboto:300);

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
  background-color: #0077b6;
  background-image: linear-gradient(45deg, #0077b6, #00b4d8);
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
  color: #0077b6;
  text-decoration: none;
}

.container {
  position: relative;
  z-index: 1;
  max-width: 300px;
  margin: 0 auto;
}
</style>