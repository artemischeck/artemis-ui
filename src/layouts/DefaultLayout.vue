<template>
    <div class="default-layout">
        <div class="sidebar">
            <side-bar />
        </div>
        <div class="content">
            <nav-bar />
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
</style>