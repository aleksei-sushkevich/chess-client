<template>
  <base-dialog :show="show" title="End of the game">
    <div class="form-control">
      {{ winner }} lost!!
    </div>
    <template v-slot:actions>
      <div class="dialog-actions">
        <div class="dialog-button">
          <base-button @click="startNewGame">Close</base-button>
        </div>
      </div>
    </template>
  </base-dialog>
</template>

<script setup>
import {defineProps} from "vue";
import {startNewGame} from "@/hooks/game";


defineProps({
  show: {
    type: Boolean,
    required: true
  },
  winner: {
    type: String,
    required: false
  }
})



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

</style>





