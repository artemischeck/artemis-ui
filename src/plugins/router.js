import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Services from "./../components/Services"
import Alerts from "./../components/Alerts"
import Team from "./../components/Team"
import Settings from "./../components/Settings"
import Login from "./../components/Login"
import Logout from "./../components/Logout"

const routes = [{
    path: '',
    component: Services,
    name: 'services',
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
}, {
    path: '/login/',
    component: Login,
    name: 'login',
    meta: {
        layout: 'full-page'
    }
}, {
    path: '/logout/',
    component: Logout,
    name: 'logout'
}]

export default new VueRouter({
    routes
})