<script setup>
import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";
import axios from "axios";
import {usePokemonStore} from "@/stores/pokemon.js";
import Pokeball from "@/components/Pokeball.vue";

const router = useRoute();
const store = usePokemonStore();

const pokemon = ref({});
const pokemonDetails = ref([]);
const isLoading = ref(true);

onMounted(() => {
  pokemon.value = store.findById(router.params.id);

  if (pokemon.value) {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${router.params.id}`)
        .then(({data}) => pokemonDetails.value = data)
        .finally(() => isLoading.value = false);
  }
});
</script>

<template>
  <main class="w-full max-w-screen-sm mx-auto">
    <div class="text-center mb-5">
      <RouterLink to="/" class="border block rounded-full px-3 py-2 bg-white hover:bg-gray-200">
        Return home
      </RouterLink>
    </div>

    <template v-if="isLoading">
      <Pokeball />
    </template>

    <template v-else>
      <section class="border rounded-lg bg-white grid grid-cols-2 items-center p-5 mb-5">
        <div class="flex justify-center items-center">
          <img :src="pokemon.sprite" alt="" width="192" height="192" />
        </div>

        <div>
          <p class="my-1">No. {{ pokemon.id }}</p>
          <hr />
          <h1 class="capitalize my-1">Name: {{ pokemon.name }}</h1>
          <hr />
          <p v-if="pokemonDetails.types" class="my-1">Type: {{ pokemonDetails.types.map(item => item.type.name).join(', ') }}</p>
          <hr />
          <p v-if="pokemonDetails.weight" class="my-1">Weight: {{ pokemonDetails.weight / 10 }} kg</p>
          <hr />
          <p v-if="pokemonDetails.height" class="my-1">Height: {{ pokemonDetails.height / 10 }} m</p>

          <audio v-if="pokemonDetails.cries.latest" class="mt-3" controls>
            <source :src="pokemonDetails.cries.latest" type="audio/ogg" />
          </audio>
        </div>
      </section>

      <section class="border rounded-lg bg-white grid grid-cols-2 lg:grid-cols-4 p-5 gap-5">
        <div v-if="pokemonDetails.sprites.front_default" class="text-center">
          <img class="mx-auto" :src="pokemonDetails.sprites.front_default" alt="" width="96" height="96" />
          <small>Male (front)</small>
        </div>

        <div v-if="pokemonDetails.sprites.back_default" class="text-center">
          <img class="mx-auto" :src="pokemonDetails.sprites.back_default" alt="" width="96" height="96" />
          <small>Male (back)</small>
        </div>

        <div v-if="pokemonDetails.sprites.front_female" class="text-center">
          <img class="mx-auto" :src="pokemonDetails.sprites.front_female" alt="" width="96" height="96" />
          <small>Female (front)</small>
        </div>

        <div v-if="pokemonDetails.sprites.back_female" class="text-center">
          <img class="mx-auto" :src="pokemonDetails.sprites.back_female" alt="" width="96" height="96" />
          <small>Female (back)</small>
        </div>
      </section>
    </template>
  </main>
</template>
