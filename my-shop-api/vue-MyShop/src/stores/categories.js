import { defineStore } from 'pinia'
import  axios  from  'axios'
import { setAuthToken, authToken } from '../components/Token.js'; // Importe la fonction et la variable qui stocke le token


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
        return axios.get(`http://localhost/api/categories`, {
          headers: {
            'Authorization': `Bearer ${authToken}`
          }
        });
      }
    }      
})
// async deleteProduct(id) {
//     axios.delete(`http://localhost/api/products/${id}`, {
// headers: {
// 'Authorization': `Bearer ${authToken}`
// }