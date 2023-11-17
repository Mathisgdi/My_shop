<template>
    <div>
      <h1>Admin Dashboard</h1>
      
      <div class = "button">
        <button class="button_unique" @click="showProducts">Products</button>
        <button class="button_unique" @click="showUsers">Users</button>
        <button class="button_unique" @click="showCategories">Categories</button>
      </div>
      <div v-if="showingProducts">
        <button class="button" @click="showCreateProduct = true">Créer un nouveau produit</button>
        <div v-if="showCreateProduct">
        <form id = "register-form" @submit.prevent="createProduct">
            <input id= "name" type="text" placeholder="name" />
            <input id = "description" type="text" placeholder="description" />
            <input id= "price" class="input" type="text" placeholder="price" />
            <input id= "categories" class="input" type="text" placeholder="categories" />
            <p class="error"></p>
            <button class="submit"> Create</button>
            <button class = "discard" @click="discardForm" > Discard</button>
        </form>
      </div>
        <section v-if="getStatus == 'done' "> <!-- si mon status est done alors on affiche les éléments -->
            <table class = "tableau">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Categories</th>
              <th>ID</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in getProduct.data['hydra:member']" :key="product">
              <td>{{ product.name }}</td>
              <td>{{ product.description }}</td>
              <td>{{ product.price }}€</td>
              <td> {{ product.categories }}</td>
                <td>{{ product.id }}</td>
                <button class="button_unique" @click="editProduct(product)">Edit</button> <!-- Bouton Edit -->
                <button class="button_unique" @click="deleteProduct(product.id)">Delete</button> <!-- Bouton Delete -->
            </tr>
          </tbody>
        </table>
        </section>
        <section v-else> <!-- sinon on affiche un message de chargement -->
            ...Loading
        </section>
        
      </div>
    
      <div v-if="showingUsers">
        <!-- <div v-if="typeof users === 'object'"> -->
        <!-- <div v-if="data && data['hydra:member']"> -->


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
      import axios from 'axios';
    import { mapActions, mapState } from "pinia";
    import {useProductStore} from '../stores/product'
    import {useUserStore} from '../stores/user'
    import { setAuthToken, authToken } from '../components/Token.js';

setAuthToken()
  export default {
    data() {
      return {
        showingProducts: false,
        showingUsers: false,
        showingCategories: false,
        showCreateProduct: false,

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
        this.fetchProduct;
      },
      showUsers() {
        this.showingProducts = false;
        this.showingUsers = true;
        this.showingCategories = false;
        this.fetchUser;
      },
      showCategories() {
        this.showingProducts = false;
        this.showingUsers = false;
        this.showingCategories = true;
      },
      createProduct() {
    const registerForm = document.getElementById('register-form');
    registerForm.addEventListener('submit', event => {
    const name = document.getElementById('name').value;
    const description = document.getElementById('description').value;
    const price = parseInt(document.getElementById('price').value);
    const categories = document.getElementById('categories').value.split(',');

      if (name == "") {
        document.querySelector(".error").innerHTML = "Name must not be empty";
        event.preventDefault(); // Empêche la soumission du formulaire
      } 
       else if (description == "" ) {
        document.querySelector(".error").innerHTML = "Description must not be empty";
        event.preventDefault(); 
      } else if (price == "") {
        document.querySelector(".error").innerHTML = "Price must not be empty";
        event.preventDefault(); 
      } 
      else if (categories == "") {
        document.querySelector(".error").innerHTML = "Categories must not be empty";
        event.preventDefault(); 
      }
      
      else {
        axios.post('http://localhost/api/products', {
        name: name,
        description: description,
        price: price,
        categories: categories,
        },
       
      {
        headers: {
          'Authorization': `Bearer ${authToken}` //authToken est importé du fichier token.js (qui génère le token automatiquement avec une requête POST)
        }
        // .then(response => {
        //     // console.log(response.data);
        //     showCreateProduct = false;
        // }).catch(error => {
        // console.log(error);
        // })
      }
        )
      }
    })
    },

    discardForm() {
      this.showCreateProduct = false;
    },

    editProduct(product) {
      // Logique pour éditer un produit
    },
    async deleteProduct(id) {
        axios.delete(`http://localhost/api/products/${id}`, {
  headers: {
    'Authorization': `Bearer ${authToken}`
  }
})
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