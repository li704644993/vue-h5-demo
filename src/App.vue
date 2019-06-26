<template>
  <div id="app">
    <NavBar v-show="navShow" :title="title"></NavBar>
    <!-- 如果显示NavBar的时候给路由添加一个类让其将NavBar的高度空出来 -->
    <div style="height:100%" :class="{child: navShow}">
      <transition :name="transitionName">
        <router-view class="router"></router-view>
      </transition>
    </div>
  </div>
</template>
<script>
import NavBar from "./components/layout/NavbarLayout";
import { isWeChat } from "./tools/utils";
export default {
  components: {
    NavBar
  },
  data() {
    return {
      transitionName: "fade",
      title: "NavBar",
      navShow: false
    };
  },
  mounted() {
    //检测浏览器类型决定是否展示栏
    let isWe = isWeChat();
    this.navShow = !isWe;
    this.title = this.$route.meta.title;
  },
  // 基于路线变化的动态设置路由切换动画
  watch: {
    $route(to, from) {
      console.log(to);
      this.title = to.meta.title;
      const toDepth = to.path.split("/").length;
      const fromDepth = from.path.split("/").length;
      if (toDepth != fromDepth) {
        this.transitionName =
          toDepth < fromDepth ? "slide-right" : "slide-left";
      } else {
        this.transitionName = "fade";
      }
    }
  }
};
</script>

<style scoped>
#router_box {
  position: relative;
  height: 100%;
}
.router {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  transition: all 500ms ease;
  box-shadow: -2px 0 30px rgba(0, 0, 0, 0.1);
}
.child {
  height: 100%;
  padding-top: 80px;
}
.child > div {
  height: 93%;
  height: calc(100% - 80px);
  overflow: auto;
}

.slide-left-enter,
.slide-right-leave-active {
  transform: translate(100%, 0);
  z-index: 1000;
}
/*解决页面层级显示在滑动上层问题*/
.slide-left-leave-active,
.slide-left-leave-to {
  z-index: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>