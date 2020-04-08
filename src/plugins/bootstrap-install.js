import Vue from 'vue'
import {
    BootstrapVue,
    IconsPlugin,
    BIconServer,
    BIconFullscreen,
    BIconFullscreenExit,
    BIconPlus,
    BIconGear,
    BIconPeople,
    BIconPerson,
    BIconBell
} from 'bootstrap-vue'

// Install Bootstrap Vue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.component('BIconHouse', BIconServer)
Vue.component('BIconFullscreen', BIconFullscreen)
Vue.component('BIconFullscreenExit', BIconFullscreenExit)
Vue.component('BIconPlus', BIconPlus)
Vue.component('BIconGear', BIconGear)
Vue.component('BIconPerson', BIconPerson)
Vue.component('BIconPeople', BIconPeople)
Vue.component('BIconBell', BIconBell)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'