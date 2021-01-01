<template>
  <div class="SecondBar">
    <div class="left2">
      <div>
        <span class="highlight">{{balance}}</span>
        <span>元</span>
      </div>
      <div>我的余额</div>
    </div>
    <div class="middle2">
      <div>
        <span class="highlight">{{promotion}}</span>
        <span>个</span>
      </div>
      <div>我的优惠</div>
    </div>
    <div class="right2">
      <div>
        <span class="highlight">{{points}}</span>
        <span>分</span>
      </div>
      <div>我的积分</div>
    </div>
  </div>
</template>

<script>
export default{
  name:'Profile2ndBar',
  data(){
    return{
      balance: '0.00',
      promotion: 0,
      points: 0,
      Account: ''
    }
  },
  methods:{
  },
  mounted(){
    this.$bus.$on('account',(data)=>{
      // console.log(data)
      this.Account = data
      this.balance = '1588.28'
      this.promotion = 2
      this.points = 288
    })
  }
}
</script>

<style scoped>
.SecondBar{
  height: 80px;
  display: flex;
  box-shadow: 0 2px 1px rgba(100,100,100,.2);
  background-color: #fff;
}
.left2, .right2, .middle2{
  flex:1;
  text-align: center;
  padding-top: 20px;
  color: rgb(70, 68, 68);
  font-size: 13px;
}
.middle2{
  border-left: 2px rgb(230, 228, 228) solid;
  border-right: 2px rgb(230, 228, 228) solid;
}
.highlight{
  color: red;
  font-size: 25px;
}
</style>
