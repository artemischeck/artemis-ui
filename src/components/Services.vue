<template>
  <div class="services">
    <div class="header my-4">
      <h4>Services</h4>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="card bg-dark text-light">
          <div class="card-body">
            <b-table
              :items="services"
              small
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
</template>

<script>
import moment from "moment";
export default {
  name: "Services",
  data() {
    return {
      services: [
        {
          id: 1,
          name: "Service 1",
          updated_at: moment().format("Do MMM, YYYY hh:mm a"),
          duration: 10,
          status: "UP"
        },
        {
          id: 2,
          name: "Service 2",
          updated_at: moment().format("Do MMM, YYYY hh:mm a"),
          duration: 10,
          status: "DOWN"
        },
        {
          id: 3,
          name: "Service 3",
          updated_at: moment().format("Do MMM, YYYY hh:mm a"),
          duration: 10,
          status: "WARN"
        },
        {
          id: 4,
          name: "Service 4",
          updated_at: moment().format("Do MMM, YYYY hh:mm a"),
          duration: 10,
          status: "SLOWER"
        },
        {
          id: 5,
          name: "Service 5",
          updated_at: moment().format("Do MMM, YYYY hh:mm a"),
          duration: 10,
          status: "UP"
        }
      ],
      fields: [
        {
          key: "name",
          label: "Service",
          sortable: true
        },
        {
          key: "updated_at",
          label: "Last Update",
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
  methods: {
    statusStyle(item, type) {
      if (!item || type !== "row") return;
      if (item.status === "UP") return "table-success";
      if (item.status === "DOWN") return "table-danger";
      if (item.status === "SLOWER") return "table-warning";
      if (item.status === "WARN") return "table-warning";
    }
  }
};
</script>