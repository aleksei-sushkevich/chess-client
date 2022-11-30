<template>
  <router-view v-slot="slotProps">
    <transition name="route" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
</template>

<script setup>
import {useStore} from "vuex";

const store = useStore();


store.dispatch('auth/tryLogin');
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
  background-image: url(/public/background/background3.png);
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  width: 100%;
}

body {
  margin: 0;
  height: 100%;
  width: 100%;
}

#app {
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.route-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.route-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-active {
  transition: all 0.3s ease-in;
}

.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
