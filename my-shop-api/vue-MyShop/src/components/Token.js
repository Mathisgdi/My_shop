import axios from 'axios';

async function getAuthToken() {
    try {
      const response = await axios.post('http://localhost/authentication_token', {
        email: 'e@e.com',
        password: '123'
      });
      const token = response.data.token;
      return token;
    } catch (error) {
      console.error(error);
    }
  }


// Stocker le token dans une variable globale
let authToken = '';

async function setAuthToken() {
  authToken = await getAuthToken();
  return authToken;
}

// setAuthToken().then(token => {
//     authToken = token; // Affiche le token d'authentification
//   });

// export { authToken };
export { setAuthToken,authToken };