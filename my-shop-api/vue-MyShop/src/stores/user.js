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

async fetchUser() {
    this.status = 'fetching';
    console.log(`Bearer ${authToken}`);
    axios({
      url: 'http://localhost/api/users',
      method: 'get',
      headers: {
        'Authorization': `Bearer ${authToken}`
      }
    }).then(response => {
      this.user = response.data;
      this.status = 'done';
    }).catch(error => {
      console.log(error);
      this.status = 'error';
    });
  },
},
}
)
