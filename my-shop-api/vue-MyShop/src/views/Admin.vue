<template>
    <div>
      <h1>Admin Dashboard</h1>
      <div class = "button">
        <button class="button_unique" @click="showProducts">Products</button>
        <button class="button_unique" @click="showUsers">Users</button>
        <button class="button_unique" @click="showCategories">Categories</button>
      </div>
      <div v-if="showingProducts">
        <div class="button" >
        <button class="button_unique"  @click="createProduct()">Create new product</button> 
        </div>
        <section v-if="getStatus == 'done' "> <!-- si mon status est done alors on affiche les éléments -->
            <table class = "tableau">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in getProduct.data['hydra:member']" :key="product.id">
              <td>{{ product.name }}</td>
              <td>{{ product.description }}</td>
              <td>{{ product.price }}€</td>
              <td>
                <button class="button_unique" @click="editProduct(product)">Edit</button> <!-- Bouton Edit -->
                <button class="button_unique" @click="deleteProduct(product)">Delete</button> <!-- Bouton Delete -->
              </td>
            </tr>
          </tbody>
        </table>
        </section>
        <section v-else> <!-- sinon on affiche un message de chargement -->
            ...Loading
        </section>
      </div>
      <div v-if="showingUsers">
        <!-- Afficher les utilisateurs ici -->
        <section v-if="getStatus == 'done' "> <!-- si mon status est done alors on affiche les éléments -->
            <table class = "tableau">
          <thead>
            <tr>
              <th>ID</th>
              <th>Email</th>
              <th>Fullname</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in getUser.data['hydra:member']" :key="user.id">
              <td>{{ user.id }}</td>
              <td>{{ user.email }}</td>
              <td>{{ user.fullName }}€</td>
              <td>
                <button class="button_unique" @click="editProduct(product)">Edit</button> <!-- Bouton Edit -->
                <button class="button_unique" @click="deleteProduct(product)">Delete</button> <!-- Bouton Delete -->
              </td>
            </tr>
          </tbody>
        </table>
        </section>
        <section v-else> <!-- sinon on affiche un message de chargement -->
            ...Loading
        </section>
      </div>
      <div v-if="showingCategories">
        <!-- Afficher les catégories ici -->
      </div>
    </div>
  </template>
  
  <script>
    import { mapActions, mapState } from "pinia";
    import {useProductStore} from '../stores/product'
    import {useUserStore} from '../stores/user'


  export default {
    data() {
      return {
        showingProducts: false,
        showingUsers: false,
        showingCategories: false
      };
    },


    async mounted() {
        
      // Continuer avec d'autres actions
            },
        computed: { 
            // Product
            ...mapActions(useProductStore,["fetchProduct"]),
            ...mapState(useProductStore,["getProduct","getStatus"]), 
            // User
            ...mapActions(useUserStore,["fetchUser"]),
            ...mapState(useUserStore,["getUser","getStatus"]),
        },


    methods: {
      showProducts() {
        this.showingProducts = true;
        this.showingUsers = false;
        this.showingCategories = false;
        this.fetchProduct();
      },
      showUsers() {
        this.showingProducts = false;
        this.showingUsers = true;
        this.showingCategories = false;
        this.fetchUser();
      },
      showCategories() {
        this.showingProducts = false;
        this.showingUsers = false;
        this.showingCategories = true;
      },
      createProduct() {
        // Logique pour créer un produit
      },
      editProduct(product) {
      // Logique pour éditer un produit
    },
    deleteProduct(product) {
      // Logique pour supprimer un produit

    },
      
    }
  };


  </script>
  
  <style scoped>
  h1{
    text-align: center;
  }
.button{
        margin: 10px;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
.button_unique{
        margin: 10px;
    }

table {
  border-collapse: collapse;
  margin: 10px;
}
th,
td {
  border: 1px solid black;
  padding: 5px;
}
.tableau {
  margin: 0 auto; /* Ne met aucune marge et le centre au milieu horizontalement automatiquement*/
  /* border-collapse: collapse; */
}

</style>