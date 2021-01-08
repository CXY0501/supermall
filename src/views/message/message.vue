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
    <mid-bar></mid-bar>
    
  </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar'
import midBar from './messagechild/middleBar'

export default{
  name:'message',
  data(){
    return{}
  },
  components:{
    NavBar,
    midBar
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
  height: 130px;
  color: #ffffff;
  width: 100vw;
  padding-left: 8px;
  padding-top: 20px;
}
.middle{
  align-content: center;
  width: 100vw;
  height: 100px;
  position: relative;
  margin-top: 40px;
  
}
.middlecontent{
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
