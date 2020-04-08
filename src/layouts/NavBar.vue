<template>
    <div ref="navbar">
        <b-navbar toggleable="lg" type="dark" variant="primary" fixed="top">
        <b-navbar-brand href="#">API Monitor</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
            <b-nav-item href="#" @click="openFullscreen" v-if="!fullscreen">
                <b-icon-fullscreen></b-icon-fullscreen>&nbsp;Enter Fullscreen
            </b-nav-item>
            <b-nav-item href="#" @click="closeFullscreen" v-if="fullscreen">
                <b-icon-fullscreen-exit></b-icon-fullscreen-exit>&nbsp;Exit Fullscreen
            </b-nav-item>
        </b-navbar-nav>
        </b-collapse>
    </b-navbar>
    </div>
</template>

<script>
export default {
    name: "NavBar",
    props: {
        openFullscreen: {
            required: true,
            type: Function
        },
        closeFullscreen: {
            required: true,
            type: Function
        },
        fullscreen: {
            type: Boolean,
            required: true
        }
    }
}
</script>