import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Services from "./../components/Services"
import Alerts from "./../components/Alerts"
import Team from "./../components/Team"
import Settings from "./../components/Settings"

const routes = [{
    path: '',
    component: Services,
    name: 'services'
}, {
    path: '/team/',
    component: Team,
    name: 'team'
}, {
    path: '/alerts/',
    component: Alerts,
    name: 'alerts'
}, {
    path: '/settings/',
    component: Settings,
    name: 'settings'
}]

export default new VueRouter({
    routes
})