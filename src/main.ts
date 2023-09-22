import { createApp } from 'vue';
// import { BootstrapVue } from 'bootstrap-vue'; // Import BootstrapVue
import App from './App.vue';
import router from './router';
import store from './store';
import i18n from './composables/lang';
import {BootstrapVue3} from "bootstrap-vue-3";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";

const app = createApp(App);


app.use(BootstrapVue3);
// Use other plugins and mount the app
app.use(store)
    .use(router)
    .use(i18n)
    .mount('#app');
