<template>
  <div class="ThirdBar">
    <div class="ThirdBarTable">
      <span>
        <img src="../../../assets/img/profile/message.png" alt="">
      </span>
      <span @click="message">我的消息</span>
    </div>
    <div class="ThirdBarTable points">
      <span>
        <img src="../../../assets/img/profile/points.png" alt="">
      </span>
      <span>积分商城</span>
    </div>
    <div class="ThirdBarTable">
      <span>
        <img src="../../../assets/img/profile/member.png" alt="">
      </span>
      <span>会员卡</span>
    </div>
  </div>
</template>

<script>
export default{
  name:'Profile3rdBar',
  data(){
    return{}
  },
  methods:{
  }
}
</script>

<style scoped>
.ThirdBar{
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: #fff;
  color: rgb(70, 68, 68);
}
.ThirdBarTable img{
  height: 15px;
  width: 15px;
  margin-left: 10px;
  margin-right: 10px;
}
.ThirdBarTable{
  height: 35px;
  line-height: 35px;
}
.points{
  border-top: 2px rgb(230, 228, 228) solid;
  border-bottom: 2px rgb(230, 228, 228) solid;
}
</style>
