<template>
    <div class="default-layout">
        <div class="sidebar">
            <side-bar />
        </div>
        <div class="content" ref="contentArea">
            <nav-bar :openFullscreen.sync="openFullscreen" :closeFullscreen.sync="closeFullscreen" :fullscreen.sync="fullscreen" />
            <div class="content-view">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-12">
                            <router-view></router-view>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import NavBar from "./NavBar.vue"
import SideBar from "./SideBar.vue"

export default {
    name: "DefaultLayout",
    components: {
        NavBar,
        SideBar
    },
    data() {
        return {
            fullscreen: false
        }
    },
    methods: {
        openFullscreen() {
            var elem = this.$refs.contentArea
            if (elem.requestFullscreen) {
                elem.requestFullscreen();
                this.fullscreen = true;
            } else if (elem.mozRequestFullScreen) {
                elem.mozRequestFullScreen();
                this.fullscreen = true;
            } else if (elem.webkitRequestFullscreen) { 
                elem.webkitRequestFullscreen();
                this.fullscreen = true;
            } else if (elem.msRequestFullscreen) {
                elem.msRequestFullscreen();
                this.fullscreen = true;
            }
        },
        closeFullscreen() {
            if (document.exitFullscreen) {
                document.exitFullscreen();
                this.fullscreen = false;
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
                this.fullscreen = false;
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
                this.fullscreen = false;
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
                this.fullscreen = false;
            }
        }
    }
}
</script>

<style scoped>
.default-layout {
    display: flex;
    flex-direction: row;
}
.sidebar {
    height: 100vh;
    width: 240px;
    background: #fff;
    border-right: 1px solid #efefef;
    padding: 21px 0;
}
.content {
    flex: 1;
}
.content-view {
    background: #efefef;
}
</style>