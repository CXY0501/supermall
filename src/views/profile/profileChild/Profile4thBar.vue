<template>
  <div class="FourthBar">
    <div class="FourthBarTable myshopcart" @click="MyShoppingCart">
      <span>
        <img src="../../../assets/img/profile/shoppingcart.png" alt="">
      </span>
      <span>我的购物车</span>
    </div>
    <div class="FourthBarTable app">
      <span>
        <img src="../../../assets/img/profile/app.png" alt="">
      </span>
      <span>下载购物APP</span>
    </div>
  </div>
</template>

<script>
export default{
  name:'Profile4thBar',
  data(){
    return{}
  },
  methods:{
    MyShoppingCart(){
      console.log('点击我的购物车')
    }
  }
}
</script>

<style scoped>
.FourthBar{
  background-color: #fff;
  bottom: 49px;
  color: rgb(70, 68, 68);
}
.FourthBarTable{
  height: 35px;
  line-height: 35px;
}
.FourthBarTable img{
  height: 15px;
  width: 15px;
  margin-left: 10px;
  margin-right: 10px;
}
.myshopcart{
  border-bottom: 2px rgb(230, 228, 228) solid;
}
.app{
  height: 1000px;
}
</style>
