<script setup>
import {usePokemonStore} from "@/stores/pokemon.js";

const store = usePokemonStore();
</script>

<template>
  <section class="grid grid-cols-2 sm:grid-cols-3 gap-x-5 gap-y-5 w-full max-w-screen-sm mx-auto">
    <RouterLink :to="`/pokemon/${pokemon.id}`" v-for="pokemon in store.pokemonPaginatedList" :key="pokemon.id"  class="group">
      <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200">
        <img
            class="mx-auto group-hover:opacity-75"
            :src="pokemon.sprite"
            :alt="pokemon.name"
            width="96"
            height="96"
        />
      </div>

      <h2 class="mt-2 text-sm text-gray-700 capitalize group-hover:underline" v-text="pokemon.name"></h2>
      <small class="text-gray-600">#{{ pokemon.id }}</small>
    </RouterLink>
  </section>
</template>
