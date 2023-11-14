import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import  axios  from  'axios'

export const usePokemonStore = defineStore('pokemon', {
  state : () => {
    return{
      pokemons : [],
      status  : 'init'
      
    }
  },
  getters : {
    getPokemons : state => state.pokemons, // récupère la liste des pokemons qui est dans le state
    getStatus : state => state.status, // récupère le status qui est dans le state
     
  },
  
  
  actions: {

    async fetchPokemons(){
      this.status = 'fetching'
      this.pokemons = await axios({url:'https://pokeapi.co/api/v2/pokemon' , method : "get" }) // le await permet d'attendre que la requête soit terminée pour passer à la suite
      this.status = 'done'
  },


}
})
