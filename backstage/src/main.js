import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
    document.title = to.meta.title || 'Sighting';
    next();
});

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
