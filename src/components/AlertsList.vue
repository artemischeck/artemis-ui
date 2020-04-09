<template>
  <div class="card text-dark">
    <div class="card-body">
      <div class="text-center" v-if="loading">
        <b-spinner variant="primary" label="Text Centered"></b-spinner>
        <div>Loading..</div>
      </div>
      <div v-if="!loading">
        <b-table :items="alerts" small fixed hover borderless :fields="fields" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "AlertsList",
  data() {
    return {
      loading: false,
      alerts: [],
      fields: [
        {
          key: "status",
          label: "Status",
          sortable: true
        },
        {
          key: "occurance",
          label: "Occurance",
          sortable: true
        },
        {
          key: "channels",
          label: "Channels"
        }
      ]
    };
  },
  methods: {
    getAlerts() {
      axios
        .get("alerts/", {})
        .then(function(res) {
          self.loading = false;
          self.alerts = res.data.results;
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