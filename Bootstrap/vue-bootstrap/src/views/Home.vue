<template>
<section>
    <h1>Home</h1>
    <p>Home page cogntentt</p>
    <section v-if="getStatus == 'done' "> <!-- si mon status est done alors on affiche les éléments -->
        
        <!-- <article v-for = "product in getProduct.data['hydra:member']" :key="product.id"> 
            <h1>{{ getProduct.data['hydra:member'] }}</h1>
            
        </article> -->
        <!-- <article v-for = "product in getProduct.data+'hydra:member.description'" :key="product.id"> 
            <h1>{{ getProduct.data }}</h1>
            
        </article> -->
        <article v-for="product in getProduct.data['hydra:member']" :key="product.id"> 
    <h1>{{ product.name }}</h1>
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
            pokemons : [],
            // text: "", // on déclare une variable text qui va être lié à l'input
        };
    },
    mounted(){ //instruction lancer avant le chargement de la page
        this.fetchProduct(); // lance ma requete pour récupérer les pokemons
    },
    computed: { 
        ...mapActions(useProductStore,["fetchProduct"]), // Va importer les actions qui sont dans le store (ici on a que fetchPokemons)
        ...mapState(useProductStore,["getProduct","getStatus"]) // Va importer les states (getter) qui sont dans le store (ici on a que pokemons)
    },
    method: { // C'est ici qu'on déclare les fonctions
        multply(arg1, arg2){
            return arg1 * arg2;
        }
    },
}


</script>



<style>

</style>