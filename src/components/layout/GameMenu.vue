<template>
  <div class="menu">
    <div class="container">
      <base-button @click="startNewGame">Start New Game</base-button>
    </div>
    <div class="container">
      <base-button @click="showOnlineGame">Online Game</base-button>
    </div>
    <div class="container">
      <base-button @click="showSaveGame">Save Game</base-button>
      <save-history :show="isSaveGame" @close-menu="showSaveGame"></save-history>
    </div>
    <div class="container">
      <base-button @click="showHistory">Download Game</base-button>
      <games-history :show="isHistory" @close-menu="showHistory"></games-history>
    </div>
    <div class="container">
      <base-button @click="showSettings">Settings</base-button>
      <the-settings :show="isSettings" @close-menu="showSettings"></the-settings>
    </div>
    <div class="container">
      <base-button @click="logout">Logout</base-button>
    </div>
  </div>
</template>

<script setup>
import {useStore} from "vuex";
import {useRouter} from "vue-router";
import SaveHistory from "@/components/menu/SaveHistory";
import GamesHistory from "@/components/menu/GamesHistory";
import TheSettings from "@/components/menu/TheSettings";
import {ref} from "vue";

const store = useStore();
const router = useRouter();

const isSaveGame = ref(false);
const isHistory = ref(false);
const isSettings = ref(false);

function startNewGame() {
  store.commit('game/startNewGame');
}

function showSaveGame() {
  isSaveGame.value = !isSaveGame.value;
}


function showOnlineGame() {
  console.log('hohoho');
}

async function showHistory(){
  await store.dispatch('game/downloadHistory');
  isHistory.value = !isHistory.value;
}

function showSettings() {
  isSettings.value = !isSettings.value;
}

function logout() {
  store.commit('auth/logout');
  router.replace('/auth');
}

</script>

<style scoped>
.menu {
  border-radius: 12px;
  padding: 1rem;
  margin: 2rem auto;
  max-width: 40rem;
}

.menu *:last-child{
  margin-bottom: 0;
}

.container {
  margin-bottom: 30px;
}
</style>