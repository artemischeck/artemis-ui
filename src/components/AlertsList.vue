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
export default {
  name: "AlertsList",
  data() {
    return {
      loading: true,
      alerts: [{ level: "Up", occurance: "10 mins", channels: "Slack, Email" }],
      fields: [
        {
          key: "level",
          label: "Level",
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
  }
};
</script>