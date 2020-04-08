import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Dashboards from "./../components/Dashboards"
import NewDashboard from "./../components/NewDashboard"
import DashboardDesign from "./../components/DashboardDesign"
import Dashboard from "./../components/Dashboard"
import Alerts from "./../components/Alerts"
import Team from "./../components/Team"
import Settings from "./../components/Settings"

const routes = [{
    path: '/',
    component: Dashboards,
    name: 'dashboards'
}, {
    path: '/new/',
    component: NewDashboard,
    name: 'new_dashboard'
}, {
    path: '/design/:id/',
    component: DashboardDesign,
    name: 'dashboard_design'
}, {
    path: '/dashboard/:id/',
    component: Dashboard,
    name: 'dashboard'
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