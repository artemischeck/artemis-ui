<template>
    <div>
        <span class="py-2 px-3">
            Menu
        </span>
        <div class="menu-items">
            <ul class="list-unstyled my-4">
                <li class="list-item">
                    <router-link :to="{name: 'services'}" class="py-2 px-3">
                        <b-icon-house></b-icon-house> Services
                    </router-link>
                </li>
                <li class="list-item">
                    <router-link :to="{name: 'alerts'}" href="#" class="py-2 px-3">
                        <b-icon-bell></b-icon-bell> Alerts
                    </router-link>
                </li>
                <li class="list-item">
                    <router-link :to="{name: 'team'}" href="#" class="py-2 px-3">
                        <b-icon-people></b-icon-people> Team
                    </router-link>
                </li>
                <li class="list-item">
                    <router-link :to="{name: 'team'}" href="#" class="py-2 px-3">
                        <b-icon-person></b-icon-person> Profile
                    </router-link>
                </li>
                <li class="list-item">
                    <router-link :to="{name: 'settings'}" href="#" class="py-2 px-3">
                        <b-icon-gear></b-icon-gear> Settings
                    </router-link>
                </li>
                <li class="list-item">
                    <router-link :to="{name: 'logout'}" href="#" class="py-2 px-3">
                        <b-icon-gear></b-icon-gear> Logout
                    </router-link>
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
    color: #dfdfdf;
}

a:hover, a:focus {
    display: block;
    color: #efefef;
    text-decoration: none;
    background: #343a40;
}
</style>