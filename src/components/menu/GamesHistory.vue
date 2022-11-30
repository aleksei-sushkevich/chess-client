<template>
  <base-dialog :show="show" title="History of saved games">
    <div class="form-control">
        <div v-for="item in history" :key="item" class="history">
          <div class="history-name">{{item.name}}</div>
          <div class="history-date">{{new Date(item.date).toUTCString()}}</div>
        </div>
    </div>
    <template v-slot:actions>
      <base-button @click="exit">Close</base-button>
    </template>
  </base-dialog>
</template>

<script setup>
import {defineProps, defineEmits, computed} from "vue";
import {useStore} from "vuex";
const store = useStore();

defineProps({
  show: {
    type: Boolean,
    required: true
  }
})

const history = computed(() => {
  return store.getters["game/gamesHistory"]
});

const emit = defineEmits(['close-menu']);

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

.history{
  display: flex;
  justify-content: space-between;
  height: 40px;
  align-items: center;
  border: 1px solid black;
  border-radius: 5px;
  background-color: #9261dd;
  color: white;
  margin-top: 5px;
  padding: 0 5px;
}

.history:hover{
  background-color: #3d008d;
  cursor: pointer;
}

.form-control {
  margin: 0.5rem 0;
}

</style>