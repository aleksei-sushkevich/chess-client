<template>
  <div class="container">
    <div
        class="content"
        v-for="letter in letters"
        :key="letter"
    >
      {{ letter }}
    </div>
  </div>
</template>

<script setup>
import {computed, ref} from "vue";
import {useStore} from "vuex";
const store = useStore();

const letters = ref(computed(() => store.getters["squares/verticalCoordinates"]));
</script>

<style scoped>
.container {
  height: 800px;
  width: 13px;
  background-image: linear-gradient(92.83deg, #181515 0, #050404 100%);
}

.content {
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  height: 100px;
}
</style>