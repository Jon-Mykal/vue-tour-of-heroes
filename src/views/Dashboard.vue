<template>
    <div>
        <h2>Top Heroes</h2>
        <section class="heroes-menu">
            <a href="" v-for="hero in heroes" :key="hero.id">
                {{ hero.name }}
            </a>
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

</style>