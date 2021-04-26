<template>
  <Heroes />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import Heroes from '@/components/Heroes.vue'

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld,
    Heroes
  },
});
</script>
