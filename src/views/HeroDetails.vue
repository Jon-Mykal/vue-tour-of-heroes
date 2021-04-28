<template>
    <div>
        <section v-if="foundHero">
            <h2>{{ capitalHeroName }} Details</h2>
            <div><span>id: </span>{{foundHero.id}}</div>
            <div>
                <label for="name">Hero name: </label>
                <input type="text" placeholder="name" v-model="foundHero.name" id="hero-name">
            </div>
        </section>
        <button @click="goBack()">go back</button>
    </div>
</template>

<script lang="ts">
import { Hero } from '@/types/hero'
import { computed, defineComponent, reactive, ref, toRefs } from 'vue'
import isEmpty from 'lodash/isEmpty'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default defineComponent({
    name: "HeroDetails",
    props: {
        id: {
            type: Number,
            required: true
        }
    },
    setup (props, ctx) {
        const router = useRouter();
        let pageFunctions = reactive({
            goBack(){
                router.back();
            }
        })
        let store = useStore();
        let foundHero = ref(store.getters["mdl_heroes/getHeroById"](props.id) as Hero | undefined);
       const capitalHeroName = computed(() => {
            let upperCasedName = "";
            if(foundHero.value) {
                upperCasedName = foundHero.value.name.toUpperCase() || "";
            }
            return upperCasedName;
        });

        return { ...toRefs(pageFunctions), capitalHeroName, isEmpty, foundHero }
    }
})
</script>

<style scoped>
label {
  color: #435960;
  font-weight: bold;
}
input {
  font-size: 1em;
  padding: .5rem;
}
button {
  margin-top: 20px;
  background-color: #eee;
  padding: 1rem;
  border-radius: 4px;
  font-size: 1rem;
}
button:hover {
  background-color: #cfd8dc;
}
button:disabled {
  background-color: #eee;
  color: #ccc;
  cursor: auto;
}
</style>