<template>
  <div class="services">
    <div class="header my-4">
      <h4>Services</h4>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="card bg-dark text-light">
          <div class="card-body">
            <div class="text-center" v-if="loading">
              <b-spinner variant="primary" label="Text Centered"></b-spinner>
              <div>Loading..</div>
            </div>
            <div v-if="!loading">
              <b-table
                :items="services"
                small
                fixed
                hover
                borderless
                head-variant="dark"
                :fields="fields"
                :tbody-tr-class="statusStyle"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Services",
  data() {
    return {
      loading: false,
      services: [],
      fields: [
        {
          key: "label",
          label: "Service",
          sortable: true
        },
        {
          key: "message",
          label: "Message",
          sortable: true
        },
        {
          key: "duration",
          label: "Duration(secs)",
          sortable: true
        },
        {
          key: "status",
          label: "Status",
          sortable: true
        }
      ]
    };
  },
  created() {
    this.getServices();
  },
  methods: {
    statusStyle(item, type) {
      if (!item || type !== "row") return;
      if (item.status === 1) return "table-success";
      if (item.status === 2) return "table-danger";
      if (item.status === 3) return "table-warning";
      if (item.status === 4) return "table-warning";
    },
    getServices() {
      var self = this;
      self.loading = true;
      axios
        .get("services/", {})
        .then(function(res) {
          self.loading = false;
          self.services = res.data.results;
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
