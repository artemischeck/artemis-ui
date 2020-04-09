<template>
  <div></div>
</template>
<script>
export default {
  name: "Logout",
  mounted() {
    const self = this;
    this.doLogout()
      .then(function() {
        self.$router.push("/login/");
      })
      .catch(function(err) {
        self.$notify({
          group: "default",
          type: "error",
          title: "Error",
          text: err
        });
      });
  },
  methods: {
    async doLogout() {
      await this.$store.commit("auth/removeAuthToken");
    }
  }
};
</script>