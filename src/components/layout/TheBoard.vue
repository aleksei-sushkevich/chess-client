<template>
  <div>
    <transition name="white-board">
      <div class="board" v-show="reverse">
        <div class="horizontal-top">
          <horizontal-line></horizontal-line>
        </div>
        <div class="middle-area">
          <div class="vertical-left">
            <vertical-line></vertical-line>
          </div>
          <div class="play-area-wrapper">
            <play-area></play-area>
          </div>
          <div class="vertical-right">
            <vertical-line></vertical-line>
          </div>
        </div>
        <div class="horizontal-bottom">
          <horizontal-line></horizontal-line>
        </div>
      </div>
    </transition>
    <transition name="black-board">
        <div class="board" v-show="!reverse">
          <div class="horizontal-top">
            <horizontal-line></horizontal-line>
          </div>
          <div class="middle-area">
            <div class="vertical-left">
              <vertical-line></vertical-line>
            </div>
            <div class="play-area-wrapper">
              <play-area></play-area>
            </div>
            <div class="vertical-right">
              <vertical-line></vertical-line>
            </div>
          </div>
          <div class="horizontal-bottom">
            <horizontal-line></horizontal-line>
          </div>
        </div>
    </transition>
  </div>
</template>

<script setup>

import HorizontalLine from "@/components/board/coordinates/HorizontalLine";
import VerticalLine from "@/components/board/coordinates/VerticalLine";
import PlayArea from "@/components/board/items/PlayArea";
import {useStore} from "vuex";
import {computed} from "vue";

const store = useStore();

const reverse = computed(() => store.getters["game/round"] === 'White');



</script>

<style scoped>

.board {
  user-select: none;
  display: block;
  box-shadow: 1px 2px 13px #070d18;
  width: max-content;
  height: max-content;
}

.middle-area {
  display: flex;
}

.play-area-wrapper {
  display: flex;
  background-color: #000000;
  width: 800px;
  height: 800px;
}

.horizontal-top {
  padding-left: 13px;
  background-image: linear-gradient(92.83deg, #181515 0, #050404 100%);
}

.horizontal-bottom {
  padding-left: 13px;
  background-image: linear-gradient(92.83deg, #181515 0, #050404 100%);
}


.black-board-enter-from{
  rotate: -180deg;
}
.white-board-enter-from {
  rotate: 180deg;
}

.black-board-leave-to{
  rotate: -180deg;
}
.white-board-leave-to {
  rotate: 180deg;
}

.black-board-enter-active,
.white-board-enter-active {
  transition: all 0.1s linear;
}

.black-board-leave-active,
.white-board-leave-active {
}

.black-board-enter-to{
  transform: rotate(-360deg);
}
.white-board-enter-to{
  transform: rotate(360deg);
}



</style>