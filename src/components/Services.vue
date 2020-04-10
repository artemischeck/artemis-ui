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
                dark
                :fields="fields" 
              >
              <template v-slot:cell(status)="data">
                <div class="text-center">
                  <span v-if="data.value == 1">UP</span>
                  <span v-if="data.value == 2">SLOW</span>
                  <span v-if="data.value == 3">WARN</span>
                  <span v-if="data.value == 4">DOWN</span>
                  <span v-if="data.value == 5">NO SIGNAL</span>
                </div>
            </template>
            </b-table>
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
          sortable: true,
          stickyColumn: true
        },
        {
          key: "host",
          label: "Host",
          sortable: true
        },
        {
          key: "message",
          label: "Message",
          sortable: true
        },

        // {
        //   key: "date_time",
        //   label: "Last Update",
        //   sortable: true
        // },
        {
          key: "duration",
          label: "Duration(secs)",
          sortable: true
        },
        {
          key: "status",
          label: "Status",
          sortable: true,
          tdClass: this.statusStyle,
          stickyColumn: true
        }
      ]
    };
  },
  created() {
    this.getServices();
  },
  methods: {
    statusStyle(value, key, item) {
      if (item.status === 1) return "bg-success";
      if (item.status === 2) return "bg-warning";
      if (item.status === 3) return "bg-warning";
      if (item.status === 4) return "bg-danger";
      if (item.status === 5) return "bg-secondary";
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
