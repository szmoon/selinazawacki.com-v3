<template>
  <div class="l-layout-default">
    <router-view />
    <Taskbar />
  </div>
</template>

<script>
import Taskbar from "@globals/taskbar";
export default {
  name: "LayoutDefault",
  components: {
    Taskbar
  }
};
</script>

<style lang="scss">
@import "./index.scss";
</style>
