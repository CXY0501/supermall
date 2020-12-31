<template>
  <div class="ProfileTopBar">
    <div class="myProfile">我的档案</div>
    <div class="Detail">
      <div class="account left">
        <img src="../../../assets/img/profile/account.png" alt="">
      </div>
      <div class="middle">
        <div @click="Login">登录/注册</div>
        <div class="mobile">
          <img src="../../../assets/img/profile/mobile.png" alt="">
          暂无绑定手机号
        </div>
      </div>
        <div class="rightArrow right" @click="Login">
          <img src="../../../assets/img/profile/rightArrow.png" alt="">
      </div>
    </div>
    
    
  </div>
</template>

<script>
export default{
  name:'ProfileTopBar',
  data(){
    return{}
  },
  methods:{
    Login(){
      // console.log('我要注册')
      this.$router.replace('/login')
    }
  }
}
</script>

<style scoped>
.ProfileTopBar{
  padding-top: 8px;
  height: 120px;
  background-color: var(--color-tint);
  color: #fff;
  
}
.myProfile{
  font-size: 20px;
  text-align: center;
  margin-bottom: 18px;
}
.account img{
  height: 60px;
  width: 60px;
}
.mobile img{
  height: 15px;
  width: 15px;
}
.rightArrow img{
  height: 20px;
  width: 20px;
}
.Detail{
  display:flex;
  margin-left: 10px;
  /* line-height: 30px; */
}
.mobile{
  height: 20px;
  font-size: 12px;
  line-height: 20px;
  display: flex;
  align-items: center;
  /* padding:15px 0 */
}
.mobile img{
  align-items: center;
}
.right{
  margin-right: 10px;
  margin-top: 20px;
  width: 30px;
}
.left{
    margin-left: 15px;
    width: 80px;  
  }
.middle{
  flex:1;
  margin-top: 10px;
}
</style>
