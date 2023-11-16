<template>
    <div>
      <h1>Voici les noms de mes produits avec leur description:</h1>
      <section v-if="getStatus == 'done' ">
        <Carte v-for="product in getProduct.data['hydra:member']" :key="product.id" :product="product" />
      </section>
      <section v-else>
        ...Loading
      </section>
    </div>
  </template>
  
  <script>
  import { mapActions, mapState } from "pinia";
  import { useProductStore } from "../stores/product";
  import Carte from "./Carte.vue";
  
  export default {
    components: {
      Carte
    },
    computed: {
      ...mapActions(useProductStore, ["fetchProduct"]),
      ...mapState(useProductStore, ["getProduct", "getStatus"])
    },
    mounted() {
      this.fetchProduct();
    }
  };
  </script>