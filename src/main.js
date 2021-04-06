import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store/index';

const Vue = createApp(App);

Vue.use(router);
Vue.use(store);

Vue.mount('#app');
