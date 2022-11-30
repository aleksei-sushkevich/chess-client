<template>
  <base-dialog :show="show" title="Save Game">
  <div class="form-control">
    <label for="name">Name</label>
    <input type="text" id="name" v-model.trim="name"/>
  </div>
  <template v-slot:actions>
    <div class="dialog-actions">
      <div class="dialog-button">
        <base-button @click="saveGame">Save</base-button>
      </div>
      <div class="dialog-button">
        <base-button @click="exit">Close</base-button>
      </div>
    </div>
  </template>
  </base-dialog>
</template>

<script setup>
import {useStore} from "vuex";
import {ref, defineProps, defineEmits} from "vue";

const store = useStore();
const name = ref('');

defineProps({
  show: {
    type: Boolean,
    required: true
  }
})

const emit = defineEmits(['close-menu']);

function saveGame() {
  store.dispatch('game/writeHistory', name.value);
  name.value = '';
  emit('close-menu');
}

function exit() {
  emit('close-menu');
}

</script>

<style scoped>
.dialog-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.dialog-button {
  width: 200px;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #3d008d;
  padding: 0.15rem;
  background-image: linear-gradient(92.83deg, #cbcbd9 0, #b9b0cb 100%);
}

input:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}
</style>





