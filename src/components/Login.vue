<template>
  <div class="login">
    <div class="card">
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
            <button class="btn btn-primary" type="submit">Log In</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      form: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    doLogin() {
      const self = this;
      //   self.$q.loading.show({});
      axios
        .post("authenticate/", this.form)
        .then(function(res) {
          self.$store.commit("auth/setAuthToken", res.data.details.token);
          //   self.$q.loading.hide();
          self.$router.push("/customers/");
        })
        .catch(function(err) {
          //   self.$q.loading.hide();
          let errorMessage = err.statusText;
          if (err.response.data) {
            if (err.response.data.details) {
              errorMessage = err.response.data.details;
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