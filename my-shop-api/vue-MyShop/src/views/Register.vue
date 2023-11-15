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
          <form class="login-form">
            <input id= "email" type="email" placeholder="email" required/>
            <input id = "password" type="password" placeholder="password" min = "4" required/>
            <input id= "fullname" class="input" type="text" placeholder="fullname" required/>
            <button class="submit" v-on:click ="registerUser"> register</button>
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

<!-- <script >

</script> -->


<script>
import axios from 'axios';
import { setAuthToken, authToken } from '../components/Token.js'; // Importe la fonction et la variable qui stocke le token

setAuthToken()
export default {
  methods: {
    registerUser() {
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const fullname = document.getElementById('fullname').value;

      axios.post('http://localhost/api/users', {
        email: email,
        password: password,
        fullName: fullname
      }, 
      {
        headers: {
          'Authorization': `Bearer ${authToken}` //authToken est importé du fichier token.js
        }
      })
      .then(response => {
        // Gérer la réponse de l'API si nécessaire
      })
      .catch(error => {
        // Gérer l'erreur de l'API si nécessaire
      });
    }
  }
}

</script>





<style>

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