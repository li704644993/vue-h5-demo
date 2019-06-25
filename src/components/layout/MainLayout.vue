<template>
  <el-container>
    <el-aside width="150px">
      <div class="logo">
        <img src="../../assets/logo.png" alt>
      </div>
      <el-menu
        :default-active="defaultActive"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        @select="handelSelect"
        background-color="#283453"
        text-color="#8e98b1"
        active-text-color="#fff"
      >
        <div v-for="item in navList" :key="item.index">
          <el-menu-item :index="item.route" v-if="!item.children">
            <i :class="item.icon"></i>
            <span slot="title">{{item.content}}</span>
          </el-menu-item>
          <el-submenu :index="item.index" v-if="item.children">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>{{item.content}}</span>
            </template>
            <el-menu-item
              v-for="childItem in item.children"
              :index="childItem.route"
              :key="childItem.index"
            >{{childItem.content}}</el-menu-item>
          </el-submenu>
        </div>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header>
        <el-dropdown>
          <span class="el-dropdown-link">
            个人信息
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>系统设置</el-dropdown-item>
            <el-dropdown-item>退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>
      <el-main>
        <el-card>
          <router-view/>
        </el-card>
      </el-main>
      <el-footer>
        <p>北京蝉鸣信息科技有限公司</p>
        <p>Copyright © imzhiliao.com. All rights reserved | 京ICP备14061569号</p>
      </el-footer>
    </el-container>
  </el-container>
</template>
<script>
export default {
  name: "Layout",
  data() {
    return {
      defaultActive: "/layout/test",
      navList: [
        {
          index: "0",
          icon: "el-icon-document",
          content: "导航一",
          route: "/layout/test"
        },
        {
          index: "1",
          icon: "el-icon-setting",
          content: "导航二",
          route: "/"
        },
        {
          index: "2",
          icon: "el-icon-menu",
          content: "导航三",
          route: "/layout/test1"
        },
        {
          index: "3",
          icon: "el-icon-location",
          content: "导航四",
          children: [
            {
              index: "3-1",
              content: "导航四-1",
              route: "/layout/test2"
            },
            {
              index: "3-2",
              content: "导航四-2",
              route: "/layout/test3"
            }
          ]
        }
      ]
    };
  },
  methods: {
    handleOpen() {},
    handleClose() {},
    handelSelect(index, indexPath) {
      this.$router.push(index);
    }
  }
};
</script>
<style lang="scss" scoped>
.logo {
  height: 60px;
  line-height: 60px;
  > img {
    height: 80%;
  }
}
.el-container {
  height: 100%;
  background-color: #f3f3f4;
}
.el-aside {
  background: #283453;
  height: 100%;
}
.el-header {
  height: 40px;
  line-height: 40px;
  color: #fff;
  background: #fff;
  border-bottom: 1px solid #e8e8e8;
}
.el-footer {
  text-align: center;
  font-size: 12px;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #999;
  > p {
    padding: 0px;
    margin: 0px;
  }
}
.el-menu {
  border-right: 0;
  font-size: 14px;
  .el-menu-item,
  .el-submenu__title {
    height: 42px;
    line-height: 42px;
  }
  .el-menu-item.is-active {
    background: #3a98f5 !important;
  }
}
.el-dropdown {
  float: right;
  line-height: 60px;
  color: #3a98f5;
}
</style>


