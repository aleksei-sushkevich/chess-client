<template>
  <div :class="variant" :id="square.name" @click="moveShape(square.name)">
    <transition name="shape">
      <the-shape v-if="square.hasShape" :shape="shape"></the-shape>
    </transition>
  </div>
</template>

<script setup>
import {useStore} from "vuex";
import {computed, defineProps, ref} from "vue";
import TheShape from "@/components/board/items/TheShape";

const props = defineProps({
  square: {
    type: Object,
    required: true
  },
  shape: {
    type: Object,
    required: true
  }
});

const store = useStore();

const active = ref(computed(() => store.getters["shapes/active"]));

const variant = ref(computed(() => active.value ? props.square.variant + 'Active' : props.square.variant + 'Passive'));


function moveShape() {
  if (active.value) {
    if (!props.square.hasShape) {
      store.commit('shapes/moveShape', props.square);
      return;
    }
    if (!props.shape.selected) {
      store.commit('shapes/fightShape', {
        killedShape: props.shape,
        newPlaceForWinner: props.square
      });
    }
  }
}

</script>

<style scoped>
.blackPassive,
.blackActive {
  width: 100px;
  height: 100px;
  background-image: linear-gradient(92.83deg, #9865e5 0, #0e0c1d 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.whitePassive,
.whiteActive {
  width: 100px;
  height: 100px;
  background-image: linear-gradient(92.83deg, #cbcbd9 0, #b9b0cb 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.whiteActive:hover,
.blackActive:hover {
  border: 1px solid black;
  cursor: pointer;
}

.shape-enter-from,
.shape-leave-to {
  opacity: 0.4;
}

.shape-enter-active {
  transition: opacity 0.5s ease-in;
}

.shape-leave-active {
  transition: opacity 0.5s ease-in;
}

.shape-enter-to,
.shape-leave-from {
  opacity: 0.8;
}
</style>