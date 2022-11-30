<template>
  <div class="container">
    <base-dialog :show="!!error" title="An error occurred" @close="handleError">
      <p>{{ error }}</p>
    </base-dialog>
    <base-dialog :show="isLoading" title="Authenticating..." fixed>
      <base-spinner></base-spinner>
    </base-dialog>
    <base-card>
      <div class="form-control">
        <label for="email">E-Mail</label>
        <input type="email" id="email" v-model.trim="email"/>
      </div>
      <div class="form-control">
        <label for="password">Password</label>
        <input type="password" id="password" v-model.trim="password"/>
      </div>
      <p
          v-if="!formIsValid"
      >Please enter a valid email and password (must be at least 6 characters long).</p>
      <div class="button-wrapper">
        <base-button @click="submitForm">{{ submitButtonCaption }}</base-button>
      </div>
      <div class="button-wrapper">
        <base-button @click="switchAuthMode">{{ switchModeButtonCaption }}</base-button>
      </div>
    </base-card>
  </div>
</template>

<script setup>
import {ref, computed} from "vue";
import {useStore} from "vuex";
import {useRoute, useRouter} from "vue-router";

const store = useStore();
const route = useRoute();
const router = useRouter();

const email = ref('');
const password = ref('');
const formIsValid = ref(true);
const mode = ref('login');
const isLoading = ref(false);
const error = ref(null);

const submitButtonCaption = computed(() => {
  if (mode.value === 'login') {
    return 'Auth';
  } else {
    return 'Signup'
  }
});

const switchModeButtonCaption = computed(() => {
  if (mode.value === 'login') {
    return 'Switch on Signup';
  } else {
    return 'Switch on Auth';
  }
})

async function submitForm() {
  formIsValid.value = true;
  if (email.value === '' ||
      !email.value.includes('@') ||
      password.value.length < 6) {
    formIsValid.value = false;
    return;
  }
  isLoading.value = true;
  const actionPayload = {
    email: email.value,
    password: password.value
  }
  try {
    if (mode.value === 'login') {
      await store.dispatch('auth/login', actionPayload);
    } else {
      await store.dispatch('auth/signup', actionPayload);
    }
    const redirectUrl = '/' + (route.query.redirect || 'game');
    await router.replace(redirectUrl);
  } catch (err) {
    error.value = err.message || 'Failed to authenticate, try later';
  }
  isLoading.value = false;
}

function switchAuthMode() {
  handleError();
  mode.value = mode.value === 'login' ? 'signup' : 'login';
}

function handleError() {
  error.value = null;
  console.log(error.value);
}


</script>

<style scoped>
.button-wrapper {
  width: 350px;
  margin-top: 30px;
}
form {
  margin: 1rem;
  padding: 1rem;
}

p {
  margin-top: 30px;
  width: 350px;
  color: darkred;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}
</style>