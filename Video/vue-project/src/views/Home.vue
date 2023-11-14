<template> <!-- On ne peut mettre que un "bloc" dans template par contre on peut mettre autant de chose qu'on veut dans cette section -->

<section>
    <h1>Je suis dans la page Home</h1>
    <!-- <h2> {{ message }}</h2>  Ici on utilise la syntaxe de mustache pour afficher le contenu de la variable message  -->
    <!-- <h2> {{ multply(3,4) }}</h2>  -->
    <!-- <h2> {{ getPokemons}}</h2>  -->
    <!-- <input v-model="text" type="text"> on lie la variable text à l'input -->
    <section v-if="getStatus == 'done' "> <!-- si mon status est done alors on affiche les éléments -->
        <article v-for = "pokemon in getPokemons.data.results" :key="pokemon.name"> <!-- on récupère les pokemons qu'on assimile avec une clé "name" -->
            <h1>{{ pokemon.name }}</h1>
        </article>

    </section>
    <section v-else> <!-- sinon on affiche un message de chargement -->
        ...Loading
    </section>
    <!-- <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/Products">Products</RouterLink> -->
</section>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { usePokemonStore } from "../stores/pokemons";

export default{
    data() { // C'est ici qu'on déclare les variables
        return {
            message: "Hello World",
            pokemons : [],
            // text: "", // on déclare une variable text qui va être lié à l'input
        };
    },
    mounted(){ //instruction lancer avant le chargement de la page
        this.fetchPokemons(); // lance ma requete pour récupérer les pokemons
    },
    computed: { 
        ...mapActions(usePokemonStore,["fetchPokemons"]), // Va importer les actions qui sont dans le store (ici on a que fetchPokemons)
        ...mapState(usePokemonStore,["getPokemons","getStatus"]) // Va importer les states (getter) qui sont dans le store (ici on a que pokemons)
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