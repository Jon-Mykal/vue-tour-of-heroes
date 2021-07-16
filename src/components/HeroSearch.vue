<template>
    <div>
        <section id="search-component">
            <label for="search-box">Hero Search</label>
            <input id="search-box" v-model="searchTerm" />

            <ul class="search-result">
                <li v-for="hero in heroes" >
                    <router-link :to="{ name: 'HeroDetails', params: { id: hero.id } }">
                        {{hero.name}}
                    </router-link>
                </li>
            </ul>
        </section>
    </div>
</template>

<script lang="ts">
import { useStore } from 'vuex'
import { defineComponent, ref, watch } from 'vue'
import { Hero } from '@/types/hero';
import debounce from 'lodash/debounce'

export default defineComponent({
    name: 'HeroSearch',
    setup () {
        const store = useStore();
        let heroes = ref([] as Hero[]);
        let loadingMessage = ref("Loading...")
        const searchTerm = ref('');
        watch(searchTerm, (newValue, oldValue) => {
            
            let runSearch = debounce(() => {
                if (oldValue !== newValue) {
                    store.dispatch('mdl_heroes/searchHeroes', newValue, { root: true }).then((res: Hero[]) => {
                        heroes.value = res;
                    });
                }
                  
            }, 300);
          runSearch();
        });
        return { loadingMessage, heroes, searchTerm };
    }
})
</script>

<style scoped>
/* HeroSearch private styles */

label {
  display: block;
  font-weight: bold;
  font-size: 1.2rem;
  margin-top: 1rem;
  margin-bottom: .5rem;

}
input {
  padding: .5rem;
  width: 100%;
  max-width: 600px;
  box-sizing: border-box;
  display: block;
}

input:focus {
  outline: #336699 auto 1px;
}

li {
  list-style-type: none;
}
.search-result li a {
  border-bottom: 1px solid gray;
  border-left: 1px solid gray;
  border-right: 1px solid gray;
  display: inline-block;
  width: 100%;
  max-width: 600px;
  padding: .5rem;
  box-sizing: border-box;
  text-decoration: none;
  color: black;
}

.search-result li a:hover {
  background-color: #435A60;
  color: white;
}

ul.search-result {
  margin-top: 0;
  padding-left: 0;
}
</style>