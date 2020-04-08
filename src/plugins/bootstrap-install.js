import Vue from 'vue'
import {
    BootstrapVue,
    IconsPlugin,
    BIconHouse,
    BIconFullscreen,
    BIconFullscreenExit,
    BIconPlus,
    BIconGear,
    BIconPerson,
    BIconBell
} from 'bootstrap-vue'

// Install Bootstrap Vue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.component('BIconHouse', BIconHouse)
Vue.component('BIconFullscreen', BIconFullscreen)
Vue.component('BIconFullscreenExit', BIconFullscreenExit)
Vue.component('BIconPlus', BIconPlus)
Vue.component('BIconGear', BIconGear)
Vue.component('BIconPerson', BIconPerson)
Vue.component('BIconBell', BIconBell)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'