<template>
  <div class="login auth">
    <div class="row">
      <div class="col-12 col-md-4 offset-md-4">
        <div class="card text-dark">
          <div class="card-body">
            <h1>Log In</h1>
            <form @submit.prevent="doLogin">
              <div class="form-group">
                <label class="control-label">Account</label>
                <input class="form-control" type="text" v-model="form.username" />
              </div>
              <div class="form-group">
                <label class="control-label">Password</label>
                <input class="form-control" type="password" v-model="form.password" />
              </div>
              <div>
                <button class="btn btn-primary" type="submit" :disabled="loading">
                  <span v-if="!loading">Log In</span>
                  <span v-if="loading">
                    <b-spinner small></b-spinner>
                    <span class="sr-only">Loading...</span>
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      loading: false,
      form: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    doLogin() {
      const self = this;
      self.loading = true;
      axios
        .post("authenticate/", this.form)
        .then(function(res) {
          self.$store.commit("auth/setAuthToken", res.data.token);
          self.loading = false;
          self.$router.push({name: 'services'});
        })
        .catch(function(err) {
          self.loading = false;
          let errorMessage = err;
          if (err.response) {
            if (err.response.data) {
              if (err.response.data.details) {
                errorMessage = err.response.data.details;
              }
            }
          }
          self.$notify({
            group: "default",
            type: "error",
            title: "Error",
            text: errorMessage
          });
        });
    }
  }
};
</script>

<style scoped>
.auth {
  margin: 10% auto;
}
</style>