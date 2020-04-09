<template>
  <div class="full-page-layout bg-dark">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FullPageLayout"
};
</script>