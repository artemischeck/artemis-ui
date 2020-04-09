<template>
  <div id="app" class="bg-dark">
    <notifications group="default" />
    <DefaultLayout v-if="!isFullPage" />
    <FullPageLayout v-if="isFullPage" />
  </div>
</template>

<script>
import DefaultLayout from "./layouts/DefaultLayout.vue";
import FullPageLayout from "./layouts/FullPageLayout.vue";

export default {
  name: "App",
  components: {
    DefaultLayout,
    FullPageLayout
  },
  computed: {
    isFullPage() {
      if (!this.$route.meta) return false;
      return this.$route.meta.layout === "full-page";
    }
  }
};
</script>

<style>
#app {
  min-height: 100vh;
  color: #dfdfdf;
}
.text-dark,
.spinner-border.text-primary,
.text-primary {
  color: #343a60 !important;
}
.btn-primary,
.btn-primary:hover,
.btn-primary:focus,
.alert-primary,
.alert-info {
  background: #343a60 !important;
  border-color: #343a60 !important;
}
.bg-primary {
  background: #343a60 !important;
}
.btn {
  text-transform: uppercase;
  font-size: 0.9em !important;
}
.bg-danger,
.table-danger > td {
  background: #f44336 !important;
}
.bg-success,
.table-success > td {
  background: #388e3c !important;
  color: #dfdfdf;
}
.bg-warning,
.table-warning > td {
  background: #ffc107 !important;
}
.card,
.btn {
  border-radius: 0 !important;
}
h4 {
  font-size: 1.3rem;
  font-weight: 400;
}
</style>
