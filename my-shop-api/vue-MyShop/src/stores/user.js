import { defineStore } from 'pinia'
import  axios  from  'axios'
import { setAuthToken, authToken } from '../components/Token.js'; // Importe la fonction et la variable qui stocke le token

setAuthToken()
export const useUserStore = defineStore('user', {
  state : () => {
    return{
      user : [],
      status  : 'init'
      
    }
  },
  getters : {
    getUser : state => state.user, // récupère la liste des pokemons qui est dans le state
    getStatus : state => state.status, // récupère le status qui est dans le state
     
  },
  
  
  actions: {
    async fetchUser(){
      this.status = 'fetching'
      this.user = axios({
      url:'http://localhost/api/users' , 
      method : "get", 
      headers: {
        'Authorization': `Bearer ${authToken}` //authToken est importé du fichier token.js (qui génère le token automatiquement avec une requête POST)
      }
    }) // le await permet d'attendre que la requête soit terminée pour passer à la suite
      this.status = 'done'
  },
// async fetchUser() {
//     this.status = 'fetching';
//     axios({
//       url: 'http://localhost/api/users',
//       method: 'get',
//       headers: {
//         'Authorization': `Bearer ${authToken}`
//       }
//     })
//     .then(response => {
//         const status = response.status;
//         console.log(status)
//         if (status == 200){ // Si le status est 200 alors ça veut dire que les informations rentré par l'utilisateur sont correctes 
//           router.push('/test');
//         }
//     })
//     .catch(error => {
//       console.error(error);
//       this.status = 'error';
//     });
  




},
}
)
