<script setup>
import {usePokemonStore} from "@/stores/pokemon.js";
import Pokeball from "@/components/Pokeball.vue";
import PokemonList from "@/components/PokemonList.vue";
import PokemonLogo from "@/components/PokemonLogo.vue";
import NoPokemonFound from "@/components/NoPokemonFound.vue";
import Search from "@/components/Search.vue";

const store = usePokemonStore();
</script>

<template>
  <main>
    <PokemonLogo />

    <Pokeball v-if="store.isLoading" />

    <Search v-else />

    <NoPokemonFound v-if="! store.isLoading && store.pokemonsFilteredList.length === 0" />

    <PokemonList />
  </main>
</template>