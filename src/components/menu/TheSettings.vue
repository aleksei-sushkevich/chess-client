<template>
  <base-dialog :show="show" title="Save Game">
    <div class="form-control">
      <div class="checkbox-container">
        <div class="label">
          Board Reversal
        </div>
        <div class="checkbox">
          <input type="checkbox" id="highload1" name="highload1" v-model="isReversal">
          <label for="highload1" data-onlabel="on" data-offlabel="off" class="lb1"></label>
        </div>
      </div>
      <div class="checkbox-container">
        <div class="label">
          Auto Save History
        </div>
        <div class="checkbox">
          <input type="checkbox" id="highload2" name="highload2" v-model="isAutoSave">
          <label for="highload2" data-onlabel="on" data-offlabel="off" class="lb2"></label>
        </div>
      </div>
      <div class="checkbox-container">
        <div class="label">
          Keep authorization
        </div>
        <div class="checkbox">
          <input type="checkbox" id="highload3" name="highload3" v-model="isKeepAuth">
          <label for="highload3" data-onlabel="on" data-offlabel="off" class="lb3"></label>
        </div>
      </div>
    </div>
    <template v-slot:actions>
      <div class="dialog-actions">
        <div class="dialog-button">
          <base-button @click="saveSettings">Save</base-button>
        </div>
        <div class="dialog-button">
          <base-button @click="exit">Close</base-button>
        </div>
      </div>
    </template>
  </base-dialog>
</template>

<script setup>
import {defineProps, defineEmits, ref} from "vue";
import {useStore} from "vuex";

const store = useStore();

defineProps({
  show: {
    type: Boolean,
    required: true
  }
})

const emit = defineEmits(['close-menu']);

const isReversal = ref(store.getters["settings/isReversal"]);
const isAutoSave = ref(store.getters["settings/isAutoSave"]);
const isKeepAuth = ref(store.getters["settings/isKeepAuth"]);

console.log(isReversal.value);
console.log(isAutoSave.value);
console.log(isKeepAuth.value);



function exit() {
  emit('close-menu');
}

function saveSettings() {
  store.dispatch('settings/setSettings', {
    isAutoSave : isAutoSave.value,
    isReversal : isReversal.value,
    isKeepAuth : isKeepAuth.value
  })
  emit('close-menu');
}

</script>

<style scoped>
.dialog-button {
  width: 200px;
}

.dialog-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.form-control {
  margin: 0.5rem 0;
}

.lb1 {
  margin: 2em;
}

#highload1 {
  display: none;
}

#highload1 + .lb1, #highload1 + .lb1::before, #highload1 + .lb1::after {
  transition: all .3s;
}

#highload1 + .lb1 {
  display: inline-block;
  position: relative;
  width: 140px;
  height: 60px;
  border-radius: 30px;
  cursor: pointer;
}

#highload1 + .lb1::before {
  display: block;
  content: attr(data-offlabel);
  position: absolute;
  top: 18px;
  right: 10px;
  color: black;
  font-family: 'Open Sans', sans-serif;
  font-size: 19px;
}

#highload1 + .lb1::after {
  border-radius: 50%;
  content: '';
  position: absolute;
  top: 3px;
  left: 3px;
  width: 54px;
  height: 54px;
  background-color: white;
}

#highload1:checked + .lb1::before {
  content: attr(data-onlabel);
  left: 16px;
  right: auto;
  color: #fff;
}

#highload1:checked + .lb1::after {
  left: 83px;
  background-color: #f7f7f7;
}

#highload1 + .lb1 {
  background-image: linear-gradient(92.83deg, #c5afe3 0, #9865e5 100%);
}

#highload1:checked + .lb1 {
  background-image: linear-gradient(92.83deg, #9865e5 0, #0e0c1d 100%);
}

#highload1:checked + .lb1::before {
  color: #fff;
}

.lb2 {
  margin: 2em;
}

#highload2 {
  display: none;
}

#highload2 + .lb2, #highload2 + .lb2::before, #highload2 + .lb2::after {
  transition: all .3s;
}

#highload2 + .lb2 {
  display: inline-block;
  position: relative;
  width: 140px;
  height: 60px;
  border-radius: 30px;
  cursor: pointer;
}

#highload2 + .lb2::before {
  display: block;
  content: attr(data-offlabel);
  position: absolute;
  top: 18px;
  right: 10px;
  color: black;
  font-family: 'Open Sans', sans-serif;
  font-size: 19px;
}

#highload2 + .lb2::after {
  border-radius: 50%;
  content: '';
  position: absolute;
  top: 3px;
  left: 3px;
  width: 54px;
  height: 54px;
  background-color: white;
}

#highload2:checked + .lb2::before {
  content: attr(data-onlabel);
  left: 16px;
  right: auto;
  color: #fff;
}

#highload2:checked + .lb2::after {
  left: 83px;
  background-color: #f7f7f7;
}

#highload2 + .lb2 {
  background-image: linear-gradient(92.83deg, #c5afe3 0, #9865e5 100%);
}

#highload2:checked + .lb2 {
  background-image: linear-gradient(92.83deg, #9865e5 0, #0e0c1d 100%);
}

#highload2:checked + .lb2::before {
  color: #fff;
}

.lb3 {
  margin: 2em;
}

#highload3 {
  display: none;
}

#highload3 + .lb3, #highload1 + .lb3::before, #highload1 + .lb3::after {
  transition: all .3s;
}

#highload3 + .lb3 {
  display: inline-block;
  position: relative;
  width: 140px;
  height: 60px;
  border-radius: 30px;
  cursor: pointer;
}

#highload3 + .lb3::before {
  display: block;
  content: attr(data-offlabel);
  position: absolute;
  top: 18px;
  right: 10px;
  color: black;
  font-family: 'Open Sans', sans-serif;
  font-size: 19px;
}

#highload3 + .lb3::after {
  border-radius: 50%;
  content: '';
  position: absolute;
  top: 3px;
  left: 3px;
  width: 54px;
  height: 54px;
  background-color: white;
}

#highload3:checked + .lb3::before {
  content: attr(data-onlabel);
  left: 16px;
  right: auto;
  color: #fff;
}

#highload3:checked + .lb3::after {
  left: 83px;
  background-color: #f7f7f7;
}

#highload3 + .lb3 {
  background-image: linear-gradient(92.83deg, #c5afe3 0, #9865e5 100%);
}

#highload3:checked + .lb3 {
  background-image: linear-gradient(92.83deg, #9865e5 0, #0e0c1d 100%);
}

#highload3:checked + .lb3::before {
  color: #fff;
}

.checkbox-container {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 75px;
}

.label {
  font-size: 20px;
  font-weight: bold;
  width: 200px;
}
</style>