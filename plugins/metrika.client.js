import Vue from 'vue'
import VueYandexMetrika from 'vue-yandex-metrika' 
Vue.use(VueYandexMetrika, {
    id: 91991922,
    env: process.env.NODE_ENV,
    debug: true,
    clickmap:true,
    options: {
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
    }
})