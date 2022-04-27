<template>
  <header class="header">
    <h1>WEB DEVELOPMENT</h1>
    <nav class="nav">
      <ul>
        <li><router-link to="/" class="btn-primary">HOME</router-link></li>
        <li><router-link to="/contact" class="btn-primary">CONTACT</router-link></li>
        <li><router-link to="/others" class="btn-primary">OTHERS</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ComponentHeader',
  setup() {
    return {};
  },
});
</script>

<style scoped>
h1 {
  margin: 0;
}

.header {
  box-sizing: border-box;
  padding: 8px 12px 8px 12px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #FFFF;
  margin-bottom: 32px;
}

.nav ul {
  display: flex;
  list-style: none;
}

.nav ul li {
  margin-right: 12px;
}

.nav ul li:last-child {
  margin-right: 0px;
}

.nav ul li a {
  text-decoration: none;
}
</style>
