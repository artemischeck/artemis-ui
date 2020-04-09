<template>
  <div class="alerts">
    <div class="header my-4">
      <h4>Alert Settings</h4>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="card text-dark">
          <div class="card-body">
            <form @submit.prevent="saveChanges">
              <div class="form-group row">
                <label class="control-label col-md-4">Alert Level</label>
                <div class="col-md-4">
                  <select class="form-control"></select>
                </div>
              </div>
              <div class="form-group row">
                <label class="control-label col-md-4">Notify on occurance and</label>
                <div class="col-md-4">
                  <select class="form-control"></select>
                </div>
              </div>
              <div class="form-group row">
                <div class="col-md-4">Channels</div>
                <div class="col-md-4">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" />
                    <label class="form-check-label">Email</label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" />
                    <label class="form-check-label">SMS</label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" />
                    <label class="form-check-label">Telegram</label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" />
                    <label class="form-check-label">Pusher</label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" />
                    <label class="form-check-label">Slack</label>
                  </div>
                </div>
              </div>
              <div>
                <button class="btn btn-primary" type="submit" :disabled="loading">
                  <span v-if="!loading">Save Changes</span>
                  <span v-if="loading">
                    <b-spinner small></b-spinner>
                    <span class="sr-only">Loading...</span>
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>

        <!-- Alert list -->
        <div class="my-4">
          <alerts-list />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AlertsList from "./AlertsList";
export default {
  name: "Alerts",
  components: {
    AlertsList
  },
  data() {
    return {
      loading: false
    };
  },
  methods: {
    saveChanges() {
      this.loading = !this.loading;
    }
  }
};
</script>