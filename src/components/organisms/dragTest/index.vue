<template>
  <div>
    <div class="box" @mousedown="start" id="id1">box1</div>
    <div class="box" @mousedown="start" id="id2">box2</div>
  </div>
</template>

<script>
export default {
  name: 'LayoutDefault',
  data() {
    return {
      draggedElem: undefined
    };
  },
  methods: {
    start(e) {
      console.log('start', e.target.id);
    },
    drag() {
      console.log('drag');
    },
    end() {
      console.log('end');
    }
  }
};
</script>

<style lang="scss">
// @import './index.scss';
.box {
  height: 100px;
  width: 100px;
  background-color: papayawhip;
  margin: 20px;
}
</style>
