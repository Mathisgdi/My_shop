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
//     async fetchUser(){
//       this.status = 'fetching'
//       this.user = await axios({
//       url:'http://localhost/api/users' , 
//       method : "get", 
//       headers: {
//         'Authorization': `Bearer ${authToken}` //authToken est importé du fichier token.js (qui génère le token automatiquement avec une requête POST)
//       }
//     }); // le await permet d'attendre que la requête soit terminée pour passer à la suite
//     const data = response.data;
//     this.user = data;
//     this.status = 'done';
//    catch (error) {
//     console.log(error);
//     this.status = 'error';
//   }
//   },
// async fetchUser() {
//     this.status = 'fetching';
//     try {
//       const response = await axios({
//         url: 'http://localhost/api/users',
//         method: 'get',
//         headers: {
//           'Authorization': `Bearer ${authToken}`
//         }
//       });
//       console.log(response)

//       const data = response.data;
//       console.log(data)
//       data['hydra:member']
//     if (data && data['hydra:member']) { // Vérifie si l'objet existe et contient la propriété hydra:member
//       this.users = data['hydra:member'];
//       this.status = 'done';
//     } else {
//       console.log('Invalid response data:', data);
//       this.status = 'error';
//     }
//   } catch (error) {
//     console.log(error);
//     this.status = 'error';
//     }
//   }
async fetchUser() {
    this.status = 'fetching';
    axios({
      url: 'http://localhost/api/users',
      method: 'get',
      headers: {
        'Authorization': `Bearer ${authToken}`
      }
    }).then(response => {
      this.users = response.data;
      this.status = 'done';
    }).catch(error => {
      console.log(error);
      this.status = 'error';
    });
  }


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
