<template>
  <div class="login">
    <nav-bar class="loginBar">
      <div slot="left" class="left" @click="close">
        <img src="../../assets/img/common/cross.png" alt="">
      </div>
      <div slot="center" class="title">
        登录
      </div>
    </nav-bar>
    <login-detail/>
  </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar.vue'
import LoginDetail from './loginChild/loginDetail.vue'


export default{
  
  name:'Login',
  data(){
    return{}
  },
  components: { 
    NavBar,
    LoginDetail
  },
  methods:{
    close(){
      // console.log('关闭登录页面')
      this.$router.replace('./profile')
    }
  }
}
</script>

<style scoped>
.login{
  background-color: var(--color-background);
  height: 100vh;
}
.loginBar{
  background-color: var(--color-tint);
  color:#eee;
  font-size: 20px;
}
.left img{
  height: 32px;
}
.left{
  line-height: 44px;
  margin-top: 6px;
}
</style>
