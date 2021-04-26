<template>
    <div>
        <h2>{{ capitalHeroName }} Details</h2>
        <div><span>id: </span>{{hero.id}}</div>
        <div>
            <label for="name">Hero name: </label>
            <input type="text" placeholder="name" v-model="hero.name" id="name">
        </div>
    </div>
</template>

<style scoped>

</style>

<script lang="ts">
import {computed, defineComponent, PropType} from 'vue'
import { Hero } from '@/types/hero'
export default defineComponent({
    props: {
        hero: {
            type: Object as PropType<Hero>,
            default: { id: 1, name: 'Windstorm' }
        }
    },
    setup(props, ctx){
        const capitalHeroName = computed(() => {
            return props.hero.name.toUpperCase();
        });

        return { capitalHeroName }
    }
})
</script>