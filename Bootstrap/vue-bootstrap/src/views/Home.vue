<template>
<section>
    <h1>Home</h1>
    <h1>Voici les noms de mes produits avec leur description:</h1>
    <section v-if="getStatus == 'done' "> <!-- si mon status est done alors on affiche les éléments -->
        <article v-for="product in getProduct.data['hydra:member']" :key="product.id"> 
            <h1> {{ product.name }}</h1>
            <h1> {{ product.description }}</h1>
        </article>
    </section>
    <section v-else> <!-- sinon on affiche un message de chargement -->
        ...Loading
    </section>

</section>


</template>

<script>
import { mapActions, mapState } from "pinia";
import {useProductStore} from '../stores/product'


export default{
    data() { // C'est ici qu'on déclare les variables
        return {
            message: "Hello World",
            product : [],
            // text: "", // on déclare une variable text qui va être lié à l'input
        };
    },
   

    async mounted() {
    await this.fetchProduct;
  // Continuer avec d'autres actions
},
    computed: { 
        ...mapActions(useProductStore,["fetchProduct"]), // Va importer les actions qui sont dans le store (ici on a que fetchPokemons)
        ...mapState(useProductStore,["getProduct","getStatus"]) // Va importer les states (getter) qui sont dans le store (ici on a que pokemons)
    },
    method: { // C'est ici qu'on déclare les fonctions
        
    },
}


</script>



<style>

</style>