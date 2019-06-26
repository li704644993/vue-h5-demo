<template>
  <div id="NavBar">
    <van-nav-bar :title="title" left-arrow @click-left="onClickLeft" />
  </div>
</template>


<script>
export default {
  // title：用来显示当前网页的title
  props: ["title"],
  methods: {
    onClickLeft() {
      // 点击回退的时候当做地址回退
      this.$router.go(-1);
    }
  }
};
</script>

<style lang='scss' scoped>
#NavBar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  height: 80px;
  line-height: 80px;
  .van-nav-bar{
        height: 80px;
        line-height: 80px;
  }
}
</style>