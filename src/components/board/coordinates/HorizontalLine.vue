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

const letters = ref(computed(() => store.getters["squares/horizontalCoordinates"]));

</script>

<style scoped>
.container {
  display: flex;
  height: 16px;
  width: 800px;
  background-image: linear-gradient(92.83deg, #1a1818 0, #0e0c0c 100%);
}

.content {
  display: flex;
  color: white;
  align-items: center;
  justify-content: center;
  align-content: center;
  width: 100px;
  height: 13px;
}
</style>