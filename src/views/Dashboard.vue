<template>
    <div>
        <h2>Top Heroes</h2>
        <section class="heroes-menu">
            <router-link v-for="hero in heroes" :key="hero.id" :to="{ name: 'HeroDetails', params: { id: +hero.id } }">
                {{ hero.name }}
            </router-link>
        </section>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Hero } from '@/types/hero'
import { useStore } from 'vuex';

export default defineComponent({
    setup () {
        let store = useStore();
        let heroes = store.getters['mdl_heroes/getAllHeroes'] as Hero[];
        heroes = heroes.slice(1, 5);

        return { heroes }
    }
})
</script>

<style scoped>
h2 {
  text-align: center;
}

.heroes-menu {
  padding: 0;
  margin: auto;
  max-width: 1000px;

  /* flexbox */
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: flex-start;
  align-items: flex-start;
}

a {
  background-color: #3f525c;
  border-radius: 2px;
  padding: 1rem;
  font-size: 1.2rem;
  text-decoration: none;
  display: inline-block;
  color: #fff;
  text-align: center;
  width: 100%;
  min-width: 70px;
  margin: .5rem auto;
  box-sizing: border-box;

  /* flexbox */
  order: 0;
  flex: 0 1 auto;
  align-self: auto;
}

@media (min-width: 600px) {
  a {
    width: 18%;
    box-sizing: content-box;
  }
}

a:hover {
  background-color: #000;
}
</style>