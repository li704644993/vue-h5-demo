<template>
<div>
    <div class="el-Header">Header</div>
    <div>
      <div class="login">
        <h1>广告投放后台</h1>
        <div>
          <h4>登录</h4>
          <van-field v-model.trim="telphone" clearable placeholder="请输入手机号码" maxlength="11"></van-field>
          <van-field v-model.trim="password" clearable placeholder="请输入密码" type="password"></van-field>
          <div class="forgetPwd">
            <span>忘记密码?</span>
          </div>
          <br>
          <van-button type="primary" @click="goto" plain>登录</van-button>
        </div>
      </div>
    </div>
</div>
</template>

<script>
import url from "@/axios/url";
import axios from "axios";

export default {
  name: "home",
  data() {
    return {
      telphone: "",
      password: ""
    };
  },
  mounted() {
    // this.getRequest(url.hello).then(res => {
    //   console.log(res);
    // });
    axios
      .get("https://dev1auth.soeasypay.cn/rest/mobile/login", {
        applicationCode: "adsense",
        mobile: "18991840821",
        password: "123",
        gotoUrl: "www.baidu.com"
      })
      .then(res => {
        console.log(res);
      });
  },
  methods:{
    goto () {
      //console.log("111");
      // this.$notify('1111');
      this.$router.push('test');
    }
  },
};
</script>
<style lang="scss" scoped>
.div {
  height: 100%;
}
.el-header {
  background-color: #2c3049;
  // height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  line-height: normal;
}
.login {
  > h1 {
    text-align: center;
  }
  > div {
    width: 400px;
    margin: auto;
    padding: 10px 50px;
    box-sizing: border-box;
    box-shadow: 10px 10px 20px #eee;
    border-radius: 6px;
    height: 300px;
    > h4 {
      text-align: left;
    }
    > .forgetPwd {
      text-align: right;
      font-size: 12px;
      margin-bottom: 10px;
      color: #1980ee;
      > span {
        cursor: pointer;
      }
    }
    > .van-field {
      margin-bottom: 10px;
    }
    > .van-button {
      width: 100%;
    }
  }
}
</style>

