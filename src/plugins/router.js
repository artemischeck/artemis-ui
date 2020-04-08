import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Dashboards from "./../components/Dashboards"
import NewDashboard from "./../components/NewDashboard"

const routes = [{
    path: '/',
    component: Dashboards,
    name: 'dashboards'
}, {
    path: '/new/',
    component: NewDashboard,
    name: 'new_dashboard'
}]

export default new VueRouter({
    routes
})