import {defineStore} from "pinia";
import {computed, ref, watch} from "vue";
import axios from "axios";

export const usePokemonStore = defineStore('pokemon', () =>{
    const pokemonsList = ref([]);
    const isLoading = ref(true);
    const searchText = ref('');
    const page = ref(1);
    const perPage = ref(12);
    const lastPage = computed(() => {
       return Math.ceil(pokemonsFilteredList.value.length / perPage.value);
    });

    const pokemonsFilteredList = computed(() =>
        pokemonsList.value
            .filter(item => {
                if (! searchText) {
                    return true;
                }

                return item.id.toString() === searchText.value ||
                    item.name.includes(searchText.value.toLowerCase())
            })
    );

    const pokemonPaginatedList = computed(() =>
        pokemonsFilteredList.value.slice(
            (page.value - 1) * perPage.value,
            page.value * perPage.value
        )
    );

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
                isLoading.value = false;
            });
    }

    function previousPage() {
        if (page.value - 1 < 1) {
            return;
        }

        page.value -= 1;
    }

    function nextPage() {
        if (page.value + 1 > lastPage.value) {
            return;
        }

        page.value += 1;
    }

    watch(searchText, () => page.value = 1);

    return {
        findById,
        getPokemons,
        isLoading,
        lastPage,
        nextPage,
        page,
        pokemonsList,
        pokemonPaginatedList,
        previousPage,
        searchText,
    };
});