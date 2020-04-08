<template>
    <div>
        <span class="py-2 px-3">
            Menu
        </span>
        <div class="menu-items">
            <ul class="list-unstyled my-4">
                <li class="list-item">
                    <router-link :to="{name: 'dashboards'}" class="py-2 px-3">
                        <b-icon-house></b-icon-house> Dashboards
                    </router-link>
                </li>
                <li class="list-item">
                    <router-link :to="{name: 'new_dashboard'}" class="py-2 px-3">
                        <b-icon-plus></b-icon-plus> New Dashboard
                    </router-link>
                </li>
                <li class="list-item">
                    <a href="#" class="py-2 px-3">
                        <b-icon-bell></b-icon-bell> Alerts
                    </a>
                </li>
                <li class="list-item">
                    <a href="#" class="py-2 px-3">
                        <b-icon-person></b-icon-person> Team
                    </a>
                </li>
                <li class="list-item">
                    <a href="#" class="py-2 px-3">
                        <b-icon-gear></b-icon-gear> Settings
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name: "SideBar"
}
</script>

<style scoped>
a {
    display: block;
    color: #444;
}

a:hover, a:focus {
    display: block;
    color: #444;
    text-decoration: none;
    background: #efefef;
}
</style>