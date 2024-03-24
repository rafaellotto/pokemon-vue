<script setup>
import {usePokemonStore} from "@/stores/pokemon.js";

const store = usePokemonStore();
</script>

<template>
  <div class="w-full max-w-screen-sm mx-auto my-10 rounded-md shadow-sm">
    <input
        v-model="store.searchText"
        class="block w-full rounded-md border-0 px-3 py-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400"
        type="search"
        placeholder="Search by name or number"
    >
  </div>
</template>
