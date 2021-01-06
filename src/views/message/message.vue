<template>
  <div class="message">
    <nav-bar class="top">
      <div slot="left" class="title">
          消息
      </div>
      <div slot="center" class="topcenter">
            <img src="../../assets/img/message/contact.png" alt="">
      </div>
      <div slot="right" class="topright">
            <img src="../../assets/img/message/add.png" alt="">
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
</style>
