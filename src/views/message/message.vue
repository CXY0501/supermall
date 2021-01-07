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
    <div class="noread">
      你有1300条未读消息
    <div class="middle">
      <div class="middlecontent">
        <div class="logistic">
            <div><img src="../../assets/img/message/logistic.png" alt=""></div>
            <div>交易物流</div>
        </div>
        <div class="notification">
            <div><img src="../../assets/img/message/notification.png" alt=""></div>
            <div>通知消息</div>
        </div>
        <div class="interaction">
            <div><img src="../../assets/img/message/interaction.png" alt=""></div>
            <div>互动消息</div>
        </div>
      </div>
    </div>
    </div>
    
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
.middle{
  align-content: center;
  width: 100vw;
  height: 100px;
  position: relative;
  margin-top: 20px;
}
.middlecontent{
  position: absolute;
  width: calc(100vw * 0.9);
  left: 50%;
  margin-left: calc(-100vw * 0.9 / 2);
  text-align: center;
  border-radius:5%;
  background-color: #fff;
  color: gray;
  padding: 10px;
}
.logistic, .interaction, .notification{
  display: inline-block;
  width: calc(100vw * 0.9 * 0.3)
}
.middlecontent img{
  width: 50px;
  height: 50px;
}
</style>
