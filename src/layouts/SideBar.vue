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
                        <b-icon-person></b-icon-person> Team
                    </router-link>
                </li>
                <li class="list-item">
                    <router-link :to="{name: 'settings'}" href="#" class="py-2 px-3">
                        <b-icon-gear></b-icon-gear> Settings
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
    color: #444;
}

a:hover, a:focus {
    display: block;
    color: #444;
    text-decoration: none;
    background: #efefef;
}
</style>