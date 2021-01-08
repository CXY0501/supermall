<template>
  <div class="middleBar">
    <div class="noread">你有1300条未读消息</div>
      <div class="middle">
        <div class="middlecontent">
          <div class="logistic">
              <div><img src="../../../assets/img/message/logistic.png" alt=""></div>
              <div>交易物流</div>
          </div>
          <div class="notification">
              <div><img src="../../../assets/img/message/notification.png" alt=""></div>
              <div>通知消息</div>
          </div>
          <div class="interaction">
              <div><img src="../../../assets/img/message/interaction.png" alt=""></div>
              <div>互动消息</div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default{
  name:'midBar',
  data(){
    return{}
  },
  methods:{
  }
}
</script>

<style scoped>
.noread{
  background-color: var(--color-tint);
  height: 40px;
  color: #ffffff;
  width: 100vw;
  padding-left: 8px;
  padding-top: 20px;
}
.middle{
  background-color: var(--color-tint);
  align-content: center;
  width: 100vw;
  height: 100px;
  position: relative;
  
}
.middlecontent{
  margin-top: 40px;
  position: absolute;
  width: calc(100vw * 0.9);
  left: 50%;
  margin-left: calc(-100vw * 0.9 / 2);
  text-align: center;
  border-radius:15px;
  background-color: #fff;
  color: gray;
  padding: 10px;
  box-shadow: 0 1px 5px gray;
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
