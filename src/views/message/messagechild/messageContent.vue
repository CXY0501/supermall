<template>
  <div class="messageContent">
      <nav-bar class="bar">
        <div slot="left" class="logo">
          <img src="../../../assets/img/message/promotion.png" alt="">
        </div>
        <div slot="center" class="content">
          <div class="main">活动优惠</div>
          <div class="detail">亲，新款上了,来看看有没有您需要的？</div>
        </div>
        <div slot="right" class="reminder">
          <div class="number">3</div>
        </div>
      </nav-bar>
      <nav-bar class="bar">
        <div slot="left" class="logo">
          <img src="../../../assets/img/message/FIRE.png" alt="">
        </div>
        <div slot="center" class="content">
          <div class="main">xx官方旗舰店</div>
          <div class="detail">[专属客服为您服务]</div>
        </div>
        <div slot="right" class="reminder">
          <div class="number">1</div>
        </div>
      </nav-bar>
  </div>
</template>

<script>
import NavBar from '../../../components/common/navbar/NavBar'

export default{
  name:'MessageContent',
  data(){
    return{}
  },
  components:{
    NavBar
  },
  methods:{
  }
}
</script>

<style scoped>
.bar{
  margin-top: 15px;
  height: 60px;
}
.logo img{
  height: 30px;
}
.number{
  height: 35px;
  width: 35px;
  background-color: var(--color-high-text);
  border-radius:50px;
  color: #fff;
  font-size: 18px;
}
.center div{
  text-align: left;
  line-height: 20px;
}
.main{
  font-size: 18px;
}
.detail{
  font-size: 14px;
  color: grey;
}
</style>
