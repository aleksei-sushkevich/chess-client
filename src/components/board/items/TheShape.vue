<template>
  <div :class="shape.selected ? 'selected' : 'container'">
    <img :src="shape.url" alt="oops" height="70" width="70" class="shape" draggable="false" @click="selectShape">
  </div>
</template>

<script setup>
import {computed, defineProps, ref, watch} from "vue";
import {useStore} from "vuex";

const props = defineProps({
  shape: {
    type: Object,
    required: true
  }
});

const store = useStore();
const round = ref(computed(() => store.getters["game/round"]));


watch(props.shape, async (newShape, oldShape) => {
  if (newShape.name === 'King' && !newShape.live) {
    store.commit('game/finishGame', oldShape);
  }
})

function selectShape() {
  let canSelect = (round.value === 'White' && props.shape.color === 'White') || (round.value === 'Black' && props.shape.color === 'Black');

  if (canSelect) {
    store.commit('shapes/selectShape', props.shape);
  }
}

</script>

<style scoped>
.shape:hover,
.shape:active {
  cursor: pointer;
  filter: drop-shadow(1px 2px 13px black);
}

.selected {
  filter: drop-shadow(1px 2px 13px #c965ba);
}

</style>