<template>
  <div class="l-layout-default">
    <router-view />
    <div class="l-layout-default__icon-container">
      <Icon icon="folder-pink" name="about" alt="Pink Folder Icon" />
    </div>
    <Taskbar />
  </div>
</template>

<script>
import Icon from "~atoms/icon";
import Taskbar from "~globals/taskbar";

export default {
  name: "LayoutDefault",
  components: {
    Icon,
    Taskbar
  }
};
</script>

<style lang="scss">
@import "./index.scss";
</style>
