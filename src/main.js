import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  watch:{
    '$route' (to) {
       if(to.currentRoute.meta.reload==true){window.location.reload()}
   }},
  render: h => h(App)
}).$mount('#app')
