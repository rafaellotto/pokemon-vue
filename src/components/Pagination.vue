<script setup>
import {usePokemonStore} from "@/stores/pokemon.js";

const store = usePokemonStore();
</script>

<template>
  <div class="w-full max-w-screen-sm mx-auto flex justify-between items-center mb-5">
    <button
        class="border rounded-lg px-3 py-2 bg-white hover:bg-gray-200"
        @click="store.previousPage()"
    >Previous</button>

    <div>
      <p>Page {{ store.page }} of {{ store.lastPage }}</p>
    </div>

    <button
        class="border rounded-lg px-3 py-2 bg-white hover:bg-gray-200"
        @click="store.nextPage()"
    >Next</button>
  </div>
</template>
