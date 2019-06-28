// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'vue-awesome-swiper/node_modules/swiper/dist/css/swiper.css'
import './assets/css/init.css'
import './assets/css/style.css'

Vue.config.productionTip = false


import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const i18n = new VueI18n({
    locale: 'zh', // 语言标识
    messages:{
    	'zh': require('./lang/zh'),
    	'en': require('./lang/en')
    }
})


import iView from 'iview';
import 'iview/dist/styles/iview.css';    // 使用 CSS
Vue.use(iView);

import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)


import LazyRender from 'vue-lazy-render'
Vue.use(LazyRender)


import VueLazyload from 'vue-lazyload'
 
// or with options
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'dist/error.png',
  loading: 'dist/loading.gif',
  attempt: 3,
   listenEvents:['scroll','wheel','mousewheel'], //你想让vue监听的事件
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>'
})
