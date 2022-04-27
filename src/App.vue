<template>
  <ComponentHeader />

  <router-view />

  <ComponentFooter />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import ComponentHeader from '@/components/ComponentHeader.vue';
import ComponentFooter from '@/components/ComponentFooter.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    ComponentHeader,
    ComponentFooter,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

body {
  margin: 0;
  padding: 12px 0 12px 0;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  box-sizing: border-box;
  background-color: #9180d9;
  width: 100vw;
  height: 100vh;
}

.btn-primary {
  background-color: #7A5CFA;
  border-radius: 8px;
  color: #FFFF;
  cursor: pointer;
  transition: 1ms;
  padding: 10px;
  font-weight: 600;
  text-transform: uppercase;
}

.btn-primary:hover {
  background-color: #624AC8;
}
</style>
