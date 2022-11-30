<template>
  <div class="container">
    <div class="menu-wrapper">
      <game-menu></game-menu>
    </div>
    <div class="board-wrapper">
      <the-board></the-board>
    </div>
    <div class="history-wrapper">
      <history-view></history-view>
    </div>
    <winner-view :winner="winner" :show="!!winner"></winner-view>
  </div>
</template>

<script setup>

import TheBoard from "@/components/layout/TheBoard";
import GameMenu from "@/components/layout/GameMenu";
import HistoryView from "@/components/layout/HistoryView";

import {useStore} from "vuex";
import WinnerView from "@/components/menu/WinnerView";
import {computed} from "vue";

const store = useStore();

const winner = computed(() => {
  return store.getters["game/winner"];
})

store.dispatch('settings/getSettings');

</script>

<style scoped>
.container {
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.menu-wrapper {
  margin-top: 5%;
  padding: 10px;
  width: 16%;
}
.board-wrapper {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56%;
}

.history-wrapper {
  display: flex;
  align-items: center;
}
</style>