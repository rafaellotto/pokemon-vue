<script setup>
import {RouterView} from "vue-router";
import {onMounted} from "vue";
import {usePokemonStore} from "@/stores/pokemon.js";

const store = usePokemonStore();

onMounted(() => store.getPokemons());
</script>

<template>
  <RouterView />
</template>
