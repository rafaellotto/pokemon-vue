import {defineStore} from "pinia";
import {ref, watch} from "vue";
import axios from "axios";

export const usePokemonStore = defineStore('pokemon', () =>{
    const pokemonsList = ref([]);
    const pokemonsFilteredList = ref([]);
    const isLoading = ref(true);
    const searchText = ref('');

    watch(searchText, () => {
        pokemonsFilteredList.value = ! searchText
            ? pokemonsList.value
            : pokemonsList.value.filter(item =>
                item.id.toString() === searchText.value ||
                item.name.includes(searchText.value.toLowerCase())
            );
    });

    function findById(id) {
        return pokemonsList.value.find(pokemon => pokemon.id.toString() === id)
    }

    function getPokemons() {
        axios.get('https://raw.githubusercontent.com/PokeAPI/pokeapi/master/data/v2/csv/pokemon.csv')
            .then(({data}) => {
                let list = data.split("\n");

                list.shift();

                pokemonsList.value = list.map(line => {
                    let item = line.split(',');

                    let id = parseInt(item[0]);
                    let name = item[1];

                    return {
                        id: id,
                        name: name,
                        sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
                        isFavorite: false,
                    };
                }).filter(item => item.id && item.name);
            })
            .catch(() => {
                pokemonsList.value = [];
            })
            .finally(() => {
                pokemonsFilteredList.value = pokemonsList.value;

                isLoading.value = false;
            });
    }

    return {
        findById,
        getPokemons,
        isLoading,
        pokemonsList,
        pokemonsFilteredList,
        searchText,
    };
});