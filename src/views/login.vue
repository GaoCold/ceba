<template>
  <div class="login-wrap">
    <h3>密码登陆</h3>
    <el-input
      type="text"
      placeholder="请输入11为手机号码"
      v-model="lusername"
      maxlength="11"
      show-word-limit
      class="username"
      @blur="setfalg"
    ></el-input>
    <br>
    <el-input
      class="pwd"
      placeholder="请输入密码(8-20位，字母+数字)"
      v-model="lpassword"
      show-password
      maxlength="20"
      show-word-limit
      @blur="setfalg1"
    ></el-input>
    <br>
    <el-button :disabled="falg1" type="primary" @click="gotohome">主要按钮</el-button>
  </div>
</template>
<style lang="scss" scoped>
// .login-wrap {
//   position: relative;
//   width: 100%;
//   height: 100%;
//   border-radius: 8px;
//   background-size: cover;
// }
// .login-box {
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   width: 300px;
//   height: 326px;
//   background-color: #fff;
//   border-radius: 4px;
//   box-shadow: 0 0 20px 0 rgba(6, 0, 1, 0.2);
//   padding: 0 40px;
// }
// .login-title {
//   width: 100%;
//   height: 43px;
//   line-height: 35px;
//   margin-top: 23px;
//   border-bottom: 2px solid #ccc;
//   font-size: 18px;
//   color: #666;
// }
// .login-title li {
//   display: inline-block;
//   cursor: pointer;
// }
// .login-title .login-message {
//   margin-right: 46px;
// }
// .content li {
//   display: none;
// }
// .login-content-active {
//   display: block !important;
// }
// .login-active {
//   position: relative;
//   color: #255fc6;
// }
// .login-active::before {
//   position: absolute;
//   bottom: -10px;
//   content: "";
//   width: 93px;
//   height: 3px;
//   background-color: #255fc6;
// }
// .login-content,
// .pwd-content {
//   position: relative;
//   width: 100%;
//   height: 41px;
//   background-color: #f8f8f8;
//   border-radius: 4px;
//   border: 1px solid #eee;
//   margin-top: 30px;
// }
// .pwd-content {
//   margin-top: 20px;
// }
// .account-num,
// .pwd,
// .account-pwd-num {
//   width: 100%;
//   height: 100%;
//   box-sizing: border-box;
//   background-color: #f8f8f8;
//   padding: 0 20px 0 10px;
// }
// .pwd {
//   padding: 0 35px 0 10px;
// }
// .msg-btn,
// .pwd-btn {
//   width: 100%;
//   height: 40px;
//   background-color: #255fc6;
//   border-radius: 4px;
//   text-align: center;
//   line-height: 40px;
//   margin-bottom: 12px;
//   cursor: pointer;
// }
// .errTips {
//   display: none;
//   position: absolute;
//   top: 80px;
//   font-size: 12px;
//   color: red;
// }
// .account-num:focus,
// .verification-code:focus,
// .pwd:focus,
// .account-pwd-num:focus {
//   background-color: #fff;
// }
// .verificationCode {
//   margin-bottom: 37px;
// }
// .forgetPwd {
//   width: 100%;
//   padding: 10px 0;
//   color: #255fc6;
//   font-size: 12px;
//   text-align: right;
//   cursor: pointer;
// }

// .agreement {
//   display: flex;
//   align-items: center;
// }
// .checked {
//   position: relative;
//   display: inline-block;
//   width: 12px;
//   height: 12px;
//   margin-right: 10px;
//   border: 1px solid #c5c5c5;
//   cursor: pointer;
// }
// .read {
//   font-size: 14px;
//   color: #999;
// }
// .agreement-content {
//   font-size: 14px;
//   color: #255fc6;
//   cursor: pointer;
// }
// .toLogin,
// .toReg,
// .to-login {
//   float: right;
//   color: #255fc6;
//   font-size: 12px;
//   margin-left: 74px;
//   cursor: pointer;
// }
// .checked-img {
//   position: absolute;
//   left: 50%;
//   top: 50%;
//   transform: translate(-50%, -50%);
// }
// .verificationCode,
// .reg-pwd {
//   margin-top: 20px;
//   position: relative;
// }
// .verification-code {
//   width: 195px;
//   height: 100%;
//   padding: 0 10px;
//   box-sizing: border-box;
//   background-color: #f8f8f8;
// }
// .count-down {
//   display: inline-block;
//   font-size: 14px;
//   color: #999;
//   width: 95px;
//   height: 38px;
//   border: none;
//   text-align: center;
//   cursor: pointer;
//   background-color: #f8f8f8;
//   padding: 0;
//   outline: none;
// }
// .input-common {
//   width: 100%;
//   height: 40px;
//   border: 1px solid #eee;
//   background-color: #f8f8f8;
//   border-radius: 4px;
// }
// .close {
//   position: absolute;
//   top: 16px;
//   right: 24px;
//   display: inline-block;
//   width: 16px;
//   height: 16px;
//   background: url(../image/close-layer.png);
//   cursor: pointer;
// }
// .changePwd-wrap {
//   position: relative;
//   height: 100%;
//   padding: 0 40px;
// }
// .changePwd-title {
//   width: 100%;
//   height: 72px;
//   line-height: 72px;
//   text-align: center;
//   border-bottom: 1px solid #ccc;
//   font-size: 18px;
//   color: #173d82;
// }
// .viewPassWord {
//   position: absolute;
//   top: 50%;
//   right: 10px;
//   transform: translateY(-50%);
//   cursor: pointer;
// }
// ::-ms-clear,
// ::-ms-reveal {
//   display: none;
// }
</style>
<style lang="scss" scoped>
.login-wrap {
  width: 400px;
  margin: 0 auto;
  text-align: left;
  padding-left: 15px;
  h3 {
    font-size: 20px;
    margin: 15px 0;
  }
}
.username,
.pwd {
  width: 300px;
  margin: 15px 0;
}
</style>
<script>
// import http from "../utils";
// import axios from "axios";
// import http from "../utils";
export default {
  data() {
    return {
      lusername: "",
      lpassword: "",
      falg: true,
      falg1: true,
      ay: ""
    };
  },

  mounted() {
    // http
    //   .get("http://192.168.0.242:9000/zcc/local/getRiskWarns", {})
    //   .then(res => {
    //     this.fenxian.push(res.data.content);
    //     console.log(this.fenxian[0][0]);
    //   });
  },
  methods: {
    gotohome() {
      this.$http
        .post("http://192.168.0.242:9000/cli/login/dologin", {
          loginName: this.lusername,
          password: this.lpassword,
          system: "zcc"
        })
        .then(res => {
          console.log(res.data.data.codeToken);
          localStorage.codeToken = res.data.data.codeToken;
          if (res.data.result == true) {
            this.$router.push({ name: "home" });
          }
        });
    },

    setfalg(e) {
      console.log(e.target.value);
      var zx = /^1[34578]\d{9}$/;
      if (zx.test(e.target.value)) {
        this.falg = false;
      } else {
        this.falg = true;
      }
    },
    setfalg1(e) {
      var zx = /[a-zA-Z]{0,10}\d{0,9}$/;
      if (zx.test(e.target.value)) {
        this.falg1 = false;
      } else {
        this.falg = true;
      }
    }
  }
};
</script>



