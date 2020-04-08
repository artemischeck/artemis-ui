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
</template>

<script>
export default {
  name: "Services",
  data() {
    return {
      services: [
        {
          id: 1,
          name: "KYC API",
          message: "HTTP Status 200",
          duration: 0.21,
          status: "UP"
        },
        {
          id: 2,
          name: "RabbitMQ Queue 1",
          message: "Timeout error",
          duration: 10,
          status: "DOWN"
        },
        {
          id: 3,
          name: "MySQL Test DB1",
          message: "Ok",
          duration: 2.15,
          status: "WARN"
        },
        {
          id: 4,
          name: "MySQL Test DB2",
          message: "Ok",
          duration: 2.31,
          status: "SLOWER"
        },
        {
          id: 5,
          name: "SMS Service",
          message: "HTTP Status 200",
          duration: 0.33,
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