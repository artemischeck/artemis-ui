<template>
    <div class="dashboards">
        <div class="header my-4">
            <h4>Dashboards</h4>
        </div>
        <div class="row">
            <div class="col col-md-4" v-for="dashboard in dashboards" :key="dashboard.id">
                <div class="card mb-4">
                    <div class="card-body">
                        {{dashboard.name}}
                    </div>
                    <div class="card-footer">
                        <router-link class="card-action" :to="{name: 'dashboard_design', params:{id: dashboard.id}}">
                            Design
                        </router-link>
                        <router-link class="card-action" :to="{name: 'dashboard', params:{id: dashboard.id}}">
                            View
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Dashboards",
    data() {
        return {
            dashboards: [
                {id: 1, name: "Dashboard 1"},
                {id: 2, name: "Dashboard 2"},
                {id: 3, name: "Dashboard 3"},
                {id: 4, name: "Dashboard 4"},
                {id: 5, name: "Dashboard 5"}
            ]
        }
    },
}
</script>