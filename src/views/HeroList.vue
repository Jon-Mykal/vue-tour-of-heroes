<template>
      <div>
      <h2>My Heroes</h2>
      <ul class="heroes">
          <li v-for="hero in heroes" :key="hero.id">
            <router-link :to="{ name: 'HeroDetails', params: { id: hero.id } }">
              <span class="badge"> {{ hero.id }} </span>{{ hero.name }} 
            </router-link>
            <button class="delete" @click="deleteHero(hero)">x</button>
          </li>
      </ul>
      </div>
    <section>
      <label id="new-hero">Hero name: {{ heroName }}</label>
      <input for="new-hero" v-model="heroName"/>

      <!-- (click) passes input value to add() and then clears the input -->
      <button class="add-button" @click="addHero(heroName)">
        Add hero
      </button>
    </section>
</template>

<style scoped>
/* HeroesComponent's private CSS styles */
.heroes {
  margin: 0 0 2em 0;
  list-style-type: none;
  padding: 0;
  width: 15em;
}

input {
  display: block;
  width: 100%;
  padding: .5rem;
  margin: 1rem 0;
  box-sizing: border-box;
}

.heroes li {
  position: relative;
  cursor: pointer;
}

.heroes li:hover {
  left: .1em;
}

.heroes a {
  color: #333;
  text-decoration: none;
  background-color: #EEE;
  margin: .5em;
  padding: .3em 0;
  height: 1.6em;
  border-radius: 4px;
  display: block;
  width: 100%;
}

.heroes a:hover {
  color: #2c3a41;
  background-color: #e6e6e6;
}

.heroes a:active {
  background-color: #525252;
  color: #fafafa;
}

.heroes .badge {
  display: inline-block;
  font-size: small;
  color: white;
  padding: 0.8em 0.7em 0 0.7em;
  background-color:#405061;
  line-height: 1em;
  position: relative;
  left: -1px;
  top: -4px;
  height: 1.8em;
  min-width: 16px;
  text-align: right;
  margin-right: .8em;
  border-radius: 4px 0 0 4px;
}

.add-button {
 padding: .5rem 1.5rem;
 font-size: 1rem;
 margin-bottom: 2rem;
}

.add-button:hover {
  color: white;
  background-color: #42545C;
}

button.delete {
  position: absolute;
  left: 210px;
  top: 5px;
  background-color: white;
  color:  #525252;
  font-size: 1.1rem;
  padding: 1px 10px 3px 10px;
}

button.delete:hover {
  background-color: #525252;
  color: white;
}
</style>

<script lang="ts">
import {computed, defineComponent, PropType, Ref, ref} from 'vue'
import { Hero } from '@/types/hero'
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import Heroes from '@/components/Heroes.vue'

export default defineComponent({
    name: 'HeroList',
    setup(props, ctx){
        let router = useRouter();
        let store = useStore();
        let heroes: Ref<Hero[]> = ref([] as Hero[]); 
        let loadHeroes = () => {
          store.dispatch('mdl_heroes/getAllHeroes', null, {root: true}).then((res) => {
            heroes.value = res;
          });
        };
        loadHeroes();
        let selectedHero = ref({} as Hero);
        const capitalHeroName = computed(() => {
            let upperCasedName = "";
            if(selectedHero.value.name) {
                upperCasedName = selectedHero.value.name.toUpperCase();
            }
            return upperCasedName;
        });
      let heroName = ref("");
        const addHero = (name: string) => {
            if (!name) { return; }
            store.dispatch('mdl_heroes/addHero', {name} as Hero, {root: true});
        };
        const deleteHero = (hero: Hero) => {
          store.dispatch("mdl_heroes/deleteHero", hero, {root: true}).then(() => {
              loadHeroes();
          });
        }
        
        return { capitalHeroName, selectedHero, heroes, addHero, deleteHero, heroName }
    }
})
</script>