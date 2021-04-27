<template>
    <div>
    <h2>My Heroes</h2>
    <ul class="heroes">
        <li v-for="hero in heroes" :key="hero.id" @click="onSelect(hero)" :class="{ selected: hero === selectedHero}">
            <span class="badge">{{ hero.id }}</span> {{hero.name}}
        </li>
    </ul>
    <HeroDetail :hero="selectedHero" />
    </div>
</template>

<style scoped>
/* HeroesComponent's private CSS styles */
.heroes {
  margin: 0 0 2em 0;
  list-style-type: none;
  padding: 0;
  width: 15em;
}
.heroes li {
  cursor: pointer;
  position: relative;
  left: 0;
  background-color: #EEE;
  margin: .5em;
  padding: .3em 0;
  height: 1.6em;
  border-radius: 4px;
}
.heroes li:hover {
  color: #2c3a41;
  background-color: #e6e6e6;
  left: .1em;
}
.heroes li.selected {
  background-color: black;
  color: white;
}
.heroes li.selected:hover {
  background-color: #505050;
  color: white;
}
.heroes li.selected:active {
  background-color: black;
  color: white;
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
  margin-right: .8em;
  border-radius: 4px 0 0 4px;
}

input {
  padding: .5rem;
}
</style>

<script lang="ts">
import {computed, defineComponent, PropType, ref} from 'vue'
import { Hero } from '@/types/hero'
import { useStore } from 'vuex';
import HeroDetail from '@/components/HeroDetail.vue'

export default defineComponent({
    components: {
        HeroDetail
    },
    setup(props, ctx){

        let store = useStore();
        let heroes = store.getters['mdl_heroes/getAllHeroes'] as Hero[];
        let selectedHero = ref({} as Hero);
        const capitalHeroName = computed(() => {
            let upperCasedName = "";
            if(selectedHero.value.name) {
                upperCasedName = selectedHero.value.name.toUpperCase();
            }
            return upperCasedName;
        });

        const onSelect = (hero: Hero) => {
            selectedHero.value = hero;
        };
        
        return { capitalHeroName, selectedHero, heroes, onSelect }
    }
})
</script>