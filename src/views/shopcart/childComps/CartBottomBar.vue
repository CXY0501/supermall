<template>
  <div class="cartBottomBar">
    <div class="check-content">
      <check-button class="checkall" :isChecked="selectAll" @click.native="checkClickAll"/>
      <span>全选</span>
    </div>
    <div class="price">
      总价格：{{totalPrice}}
    </div>
    <div class="calculate" @click="calculateClick">
      去计算({{checkLength}})
    </div>
  </div>
</template>

<script>
import checkButton from '../../../components/content/checkButton/checkButton'

export default{
  name:'CartBottomBar',
  data(){
    return{}
  },
  components:{
    checkButton
  },
  methods:{
    checkClickAll(){
      // console.log(this.selectAll)
      if(this.selectAll){
        this.$store.state.cartList.forEach(item => item.checked=false);
      }else{
        this.$store.state.cartList.forEach(item => item.checked=true);
      }
    },
    calculateClick(){
      // console.log(this.selectNone)
      if(this.selectNone){
        this.$toast.show('请选择购买的商品')
      }
    }
  },
  computed:{
    totalPrice(){
      return '¥'+this.$store.state.cartList.filter(item=>{
        return item.checked
      }).reduce((preValue,item)=>{
        return preValue+item.price*item.count
      },0).toFixed(2)
    },
    checkLength(){
      return this.$store.state.cartList.filter(item => item.checked).length
    },
    selectNone(){
      // console.log(this.$store.state.cartList.length)
      if(this.$store.state.cartList.filter(item => item.checked).length === 0){
        return true
      } else {
        return false
      }
    },
    selectAll(){
      if(this.$store.state.cartList.length === 0){
        return false
      }
      return !(this.$store.state.cartList.filter(item => !item.checked).length)
    }
  }
}
</script>

<style scoped>
.cartBottomBar{
  height: 40px;
  background-color:#eee;
  /* position: relative; */
  /* bottom: 135px; */
  z-index: 999;
  line-height: 40px;
  display: flex;
  font-size: 14px;
}
.check-content{
  display: flex;
  align-items: center;
  margin-left: 10px;
  width: 60px;
}
.checkall{
  width: 20px;
  height: 20px;
  line-height: 20px;
  margin-right: 5px;
}
.price{
  width: 150px;
  margin-left: 25px;
  flex:1;
}
.calculate{
  /* margin-left: 45px; */
  width: calc(100vw - 60px - 150px);
  background-color:red;
  color: #eee;
  text-align: center;
}
</style>
