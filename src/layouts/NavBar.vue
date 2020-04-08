<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="primary">
        <b-navbar-brand href="#">API Monitor</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
            <b-nav-item href="#">
                <b-icon-fullscreen></b-icon-fullscreen>&nbsp;Enter Fullscreen
            </b-nav-item>
            <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
                Felix Cheruiyot
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
        </b-navbar-nav>
        </b-collapse>
    </b-navbar>
    </div>
</template>

<script>
export default {
    name: "NavBar"
}
</script>