<template>
    <div>
      <h1>Admin Dashboard</h1>
      <div class = "button">
        <button @click="showProducts">Products</button>
        <button @click="showUsers">Users</button>
        <button @click="showCategories">Categories</button>
      </div>
      <div v-if="showingProducts">
        <section v-if="getStatus == 'done' "> <!-- si mon status est done alors on affiche les éléments -->
            <article v-for="product in getProduct.data['hydra:member']" :key="product.id"> 
                <p> Nom : {{ product.name }}</p>
                <p> Descritpion : {{ product.description }}</p>
                <p class="bas"> Prix : {{ product.price }}€</p>
                <br>
            </article>
        </section>
        <section v-else> <!-- sinon on affiche un message de chargement -->
            ...Loading
        </section>
      </div>
      <div v-if="showingUsers">
        <!-- Afficher les utilisateurs ici -->
      </div>
      <div v-if="showingCategories">
        <!-- Afficher les catégories ici -->
      </div>
    </div>
  </template>
  
  <script>
    import { mapActions, mapState } from "pinia";
    import {useProductStore} from '../stores/product'


  export default {
    data() {
      return {
        showingProducts: false,
        showingUsers: false,
        showingCategories: false
      };
    },


    async mounted() {
        await this.fetchProduct;
      // Continuer avec d'autres actions
            },
        computed: { 
            ...mapActions(useProductStore,["fetchProduct"]), // Va importer les actions qui sont dans le store 
            ...mapState(useProductStore,["getProduct","getStatus"]) // Va importer les states (getter) qui sont dans le store 
        },


    methods: {
      showProducts() {
        this.showingProducts = true;
        this.showingUsers = false;
        this.showingCategories = false;
      },
      showUsers() {
        this.showingProducts = false;
        this.showingUsers = true;
        this.showingCategories = false;
      },
      showCategories() {
        this.showingProducts = false;
        this.showingUsers = false;
        this.showingCategories = true;
      }
    }
  };


  </script>
  
  <style>
  h1{
    text-align: center;
  }
    .button{
        margin: 10px;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    button{
        margin: 10px;
    }
p{
    border-bottom: 1px solid black;
}
.bas{
    border-bottom: 3px solid black
}
</style>