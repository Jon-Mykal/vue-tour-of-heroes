<template>
    <div>
        <section v-if="!isEmpty(hero)">
            <h2>{{ capitalHeroName }} Details</h2>
            <div><span>id: </span>{{hero.id}}</div>
            <div>
                <label for="name">Hero name: </label>
                <input type="text" placeholder="name" v-model="hero.name" id="hero-name">
            </div>
        </section>
    </div>
</template>

<script lang="ts">
import { Hero } from '@/types/hero'
import { computed, defineComponent, PropType } from 'vue'
import isEmpty from 'lodash/isEmpty'

export default defineComponent({
    name: "HeroDetail",
    props: {
        hero: {
            type: Object as PropType<Hero>,
            required: false
        }
    },
    setup (props, ctx) {
       const capitalHeroName = computed(() => {
            let upperCasedName = "";
            console.log(!isEmpty(props.hero));
            if(!isEmpty(props.hero)) {
                upperCasedName = props.hero?.name?.toUpperCase() || "";
            }
            return upperCasedName;
        });

        return { capitalHeroName, isEmpty }
    }
})
</script>

<style scoped>

</style>