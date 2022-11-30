<template>
  <div class="playing-area">
    <the-square v-for="square in squares" :key="square" :square="square" :shape="getShapeByPos(square.name)">
    </the-square>
  </div>
</template>

<script setup>
import {useStore} from 'vuex';
import {reactive} from "vue";
import TheSquare from "@/components/board/items/TheSquare";

const store = useStore();
const squares = reactive(store.getters["squares/squares"]);
const shapes = reactive(store.getters["shapes/shapes"])

function getShapeByPos(pos) {
  const shape = shapes.find(shape => shape.position === pos);
  const square = squares.find(squares => squares.name === pos);
  if (shape) {
    store.commit("squares/placeShape", {position: square.name, shape});
  }
  return shape !== undefined ? shape : new Object(null);
}

</script>

<style scoped>
.playing-area {
  display: flex;
  flex-wrap: wrap;
}
</style>