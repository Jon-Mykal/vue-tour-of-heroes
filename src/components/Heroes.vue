<template>
    <div>
        <h2>{{ capitalHeroName }} Details</h2>
        <div><span>id: </span>{{heroItem.id}}</div>
        <div>
            <label for="name">Hero name: </label>
            <input type="text" placeholder="name" v-model="heroItem.name" id="name">
        </div>
    </div>
</template>

<style scoped>

</style>

<script lang="ts">
import {computed, defineComponent, PropType, ref} from 'vue'
import { Hero } from '@/types/hero'
export default defineComponent({
    props: {
        hero: {
            type: Object as PropType<Hero>,
            default: { id: 1, name: 'Windstorm' }
        }
    },
    setup(props, ctx){
        let heroItem = ref(props.hero);
        const capitalHeroName = computed(() => {
            return heroItem.value.name.toUpperCase();
        });
        
        return { capitalHeroName, heroItem }
    }
})
</script>