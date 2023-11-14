import { defineStore } from 'pinia'
import  axios  from  'axios'

// Configure Axios avec un intercepteur pour l'authentification
axios.interceptors.request.use(config => {
  // Ajoute le token d'authentification à chaque requête sortante
  config.headers.Authorization = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2OTk5NzAxMjUsImV4cCI6MTY5OTk3MzcyNSwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6Im1hdGJkeDMzMzhAZ21haWwuY29tIn0.aBhyokUuIH1Sbp0jlSyY6fG3trKThYUDW1gItT5OIFLStI0Gr2GVWHluPZVkh7NHnqpsQe2H6FanOJ5ScpDT3d6T0flHjuTuhmxEqhnU6E2FGtAbsVDxhPzInhtr_jUoCQbJYPuFubrUs7j5hp8eFXLJ-xnD33jKWQzs_38Q8R4OZDg03Cv57mMCLAYyFEVbx9H6BEuK2NSwZtt8rXHctEDlsoEBKhU7EMlqNbo0LezdF6mnTieLkIKyD6_lDs6vI4LJtQSdo7zycvPirHsIbdYDAVxOMVrxda1qTLrr8esfwNMHnT2S89UJ4xWVhBg1GxELa7tLzRh3SHW3_bIEPA';
  return config;
});

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
