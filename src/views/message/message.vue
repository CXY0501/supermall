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
    <scroll class="msgcontent" 
            ref="bscroll"
            :probe-type="3">
      <message-content></message-content>
    </scroll>
  </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar'
import midBar from './messagechild/middleBar'
import scroll from '../../components/common/scroll/scroll'
import MessageContent from './messagechild/messageContent'

export default{
  name:'message',
  data(){
    return{}
  },
  components:{
    NavBar,
    midBar,
    scroll,
    MessageContent
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
.msgcontent{
  margin-top: 50px;
  height: calc(100vh - 44px - 140px - 40px);
  overflow: hidden;
}
</style>
