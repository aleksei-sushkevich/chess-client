import { createApp } from 'vue'
import App from './App.vue'
import BaseButton from './components/ui/BaseButton.vue';
import BaseCard from './components/ui/BaseCard.vue';
import BaseDialog from './components/ui/BaseDialog';
import BaseSpinner from './components/ui/BaseSpinner';


import router from './router.js';
import store from './store/index.js';

const app = createApp(App);


app.component('base-dialog', BaseDialog);
app.component('base-button', BaseButton);
app.component('base-card', BaseCard);
app.component('base-spinner', BaseSpinner);
app.use(store);
app.use(router);


app.mount('#app');
