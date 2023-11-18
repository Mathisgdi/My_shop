import { defineStore } from 'pinia'
import  axios  from  'axios'


export const useProductStore = defineStore('product', {
  state : () => {
    return{
      product : [],
      status  : 'init'
      
    }
  },
  getters : {
    getProduct : state => state.product, // récupère la liste des pokemons qui est dans le state
    getStatus : state => state.status, // récupère le status qui est dans le state
     
  },
  
  actions: {
    async fetchProduct(){
      this.status = 'fetching'
      this.product = await axios({url:'http://localhost/api/products' , method : "get" }) // le await permet d'attendre que la requête soit terminée pour passer à la suite
      this.status = 'done'
  },


}
})
