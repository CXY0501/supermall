<template>
  <div class="message">
    <nav-bar class="top">
      <div slot="left" class="title">
          <div>消息</div>
      </div>
      <div slot="center" class="topcenter">
            <img src="../../assets/img/message/contact.png" alt="">
      </div>
      <div slot="right" class="topright">
            <img src="../../assets/img/message/add.png" alt="">
      </div>
    </nav-bar>
    <div class="noread">你有1300条未读消息</div>
    <nav-bar class="middle">
      <div slot="left" class="logistic">
          <div>交易物流</div>
      </div>
      <div slot="center" class="notification">
          <div>通知消息</div>
      </div>
      <div slot="right" class="interaction">
          <div>互动消息</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar'

export default{
  name:'message',
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
.top{
  background-color: var(--color-tint);
  color: #ffffff;
  font-size: 25px;
  font-weight: bold;
  border: none;
  box-shadow: none;
}
.center img{
  width: 38px;
  height: 38px;
  float:right;
  text-align: center;
  margin-top:3px;
}
.right img{
  width: 26px;
  height: 26px;
  margin-top: 10px;
}
.noread{
  background-color: var(--color-tint);
  height: 150px;
  color: #ffffff;
  padding-left: 8px;
  padding-top: 20px;
}
</style>
