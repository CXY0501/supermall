<template>
  <div class="loginDetail">
    <div class="account distance">账号登录</div>
    <input type="text" class="input distance" placeholder="邮箱/手机号" v-model="account">
    <input type="password" class="input distance" placeholder="密码">
    <div class="findpw">找回密码？</div>
    <button class="distance" @click="login">登录</button>
    <div class="registernow">立即注册</div>
    <div class="thirdparty">________第三方登录________</div>
    <div class="social">
      <span><img src="../../../assets/img/login/wechat.png" alt=""></span>
      <span><img src="../../../assets/img/login/weibo.png" alt=""></span>
      <span><img src="../../../assets/img/login/facebook.png" alt=""></span>
    </div>
  </div>
</template>

<script>
export default{
  name:'LoginDetail',
  data(){
    return{
      account:''
    }
  },
  methods:{
    login(){
      // console.log('login account'+this.account)
      this.$bus.$emit('account',this.account)
      this.$router.push({
       path:'/profile'
      })
    }
  }
}
</script>

<style scoped>
.input{
  display: block;
}
.loginDetail{
  color: var(--color-high-text);
  padding:50px;
}
.distance{
  margin-top: 40px;
  margin-bottom: 40px;
}
.account{
  font-size: 14px;
}
input::-webkit-input-placeholder{
  color:rgb(157, 159, 161);
  font-size:14px;
}
input{
  height: 40px;
  width: 275px;
  border: 0.5px solid #ff5777;
  box-shadow: 0px 0px 2px gray inset;
}
button{
  height: 40px;
  width: 275px;
  background-color: #ff8198;
  color: #fff;
  border: none;
  box-shadow: 0px 0px 5px gray
}
.findpw{
  font-size: 12px;
  text-align: right;
  color: grey;
}
.registernow{
  font-size: 15px;
  text-align: center;
  text-decoration: underline;
}
.thirdparty{
  margin-top: 50px;
  text-align: center;
  color: gray;
  font-size: 14px;
}
span img{
  height: 50px;
  width: 50px;
  display: block;
  margin: 0 auto;
}
.social{
  margin-top: 30px;
  display:flex
}
.social span{
  flex:1;
  align-items: center;
  
}
</style>
