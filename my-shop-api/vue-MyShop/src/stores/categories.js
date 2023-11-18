import { defineStore } from 'pinia'
import  axios  from  'axios'
import { setAuthToken, authToken } from '../components/Token.vue'; // Importe la fonction et la variable qui stocke le token

setAuthToken()
export const useCategoriesStore = defineStore('categories', {
  state : () => {
    return{
      categories : [],
      status  : 'init'
      
    }
  },
  getters : {
    getCategories : state => state.categories, // récupère la liste des pokemons qui est dans le state
    getStatus : state => state.status, // récupère le status qui est dans le state
     
  },
  
  
  actions: {
    async fetchCategories() {
        this.status = 'fetching';
        try {
            const response = await axios.get(`http://localhost/api/categories`, {
                headers: {
                    'Authorization': `Bearer ${authToken}`
                }
            });
            this.categories = response.data; // Assigne les données reçues à la propriété categories
            this.status = 'done';
            return response; // Retourne la réponse pour une utilisation éventuelle dans le composant
        } catch (error) {
            this.status = 'error'; // En cas d'erreur, met le statut à 'error'
            console.error('Error fetching categories:', error);
            throw error; // Propage l'erreur pour qu'elle puisse être gérée au niveau supérieur
        }
    }    
    }      
})
// async deleteProduct(id) {
//     axios.delete(`http://localhost/api/products/${id}`, {
// headers: {
// 'Authorization': `Bearer ${authToken}`
// }