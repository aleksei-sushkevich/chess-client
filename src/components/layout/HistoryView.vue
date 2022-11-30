<template>
  <div class="history-wrapper">
    <div class="buttons">
      <div class="container">
        <base-button :disabled="disabledBack" @click="onBack">
          <img src="/icons/img.png" alt="oops" class="arrow-left">
        </base-button>
      </div>
      <div class="container">
        <base-button :disabled="disabledForward" @click="onForward">
          <img src="/icons/img.png" alt="oops" class="arrow-right">
        </base-button>
      </div>
    </div>
    <div class="history-view">
      <h2>Game History:</h2>
      <hr>
      <div class="scroll-wrapper">
        <ul v-if="history">
          <li v-for="item in history" :key="item" :class="item.class">{{ message(item) }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import {useStore} from "vuex";
import {computed, ref} from "vue";

const store = useStore();

const history = computed(() => store.getters["game/history"]);

const disabledBack = computed(()=> {
  let exist = false;
  history.value.forEach(el => {
    if(el.class === 'active'){
      exist = true;
    }
  });
  return !exist;
});


const disabledForward = ref(true);

const message = (item) => {
  let message = `${item.player} ${item.chess} moved from ${item.fromPosition} to ${item.toPosition}`;
  if (item.swallowed) {
    message += ` and swallowed the ${item.swallowed}`;
  }
  return message;
}

function onBack() {
  store.commit("shapes/goBackHistory");
  disabledForward.value = false;
}

function onForward() {
  store.commit("shapes/goForwardHistory");
  disabledForward.value = history.value[0].class === 'active';
}

</script>

<style scoped>
.history-wrapper {
  display: flex;
  flex-direction: column;
}

.buttons {
  display: flex;
  width: 100%;
  justify-content: space-around;
  margin-bottom: 10px;
}

.active {
  text-decoration: underline;
  list-style-type: circle;
}

.container {
  width: 150px;
}

.history-view {
  background-image: linear-gradient(92.83deg, #8045d0 0, #0d0113 100%);
  color: white;
  width: 400px;
  height: 591px;
  overflow: hidden;
  border: 1px solid black;
  box-shadow: 1px 2px 13px #070d18;
}

li {
  color: #b6afaf;
  list-style-type: none;
  margin-bottom: 5px;
}

.scroll-wrapper {
  width: 100%;
  max-height: 520px;
  overflow-y: scroll;
  padding-right: 17px;
  box-sizing: content-box;
}

h2 {
  text-align: center;
}

.arrow-right {
  transform: rotate(90deg);
  height: 40px;
  width: 40px;
}

.arrow-left {
  transform: rotate(270deg);
  height: 40px;
  width: 40px;
}
</style>