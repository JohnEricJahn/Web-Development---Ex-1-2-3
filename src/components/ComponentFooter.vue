<template>
  <footer class="footer">COPYRIGHT © UDESC - 2022. ALL RIGHTS RESERVED</footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ComponentFooter',
  setup() {
    return {};
  },
});
</script>

<style scoped>
.footer {
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #FFFF;
  font-weight: 600;
  position: absolute;
  bottom: 12px;
  padding: 12px;
}
</style>
