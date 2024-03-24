<script setup>
import {usePokemonStore} from "@/stores/pokemon.js";
import Pokeball from "@/components/Pokeball.vue";
import PokemonList from "@/components/PokemonList.vue";
import PokemonLogo from "@/components/PokemonLogo.vue";
import NoPokemonFound from "@/components/NoPokemonFound.vue";
import Search from "@/components/Search.vue";
import Pagination from "@/components/Pagination.vue";

const store = usePokemonStore();
</script>

<template>
  <main>
    <PokemonLogo />

    <Pokeball v-if="store.isLoading" />

    <Search v-else />

    <Pagination />

    <NoPokemonFound v-if="! store.isLoading && store.pokemonPaginatedList.length === 0" />

    <PokemonList />
  </main>
</template>