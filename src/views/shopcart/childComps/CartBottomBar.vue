<template>
  <div class="cartBottomBar">
    <div class="check-content">
      <check-button class="checkall"/>
      <span>全选</span>
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
  }
}
</script>

<style scoped>
.cartBottomBar{
  height: 40px;
  background-color:#eee;
  position: relative;
  bottom: 135px;
  z-index: 9;
  line-height: 40px;
  
  
}
.check-content{
  display: flex;
  align-items: center;
  margin-left: 10px;
}
.checkall{
  width: 20px;
  height: 20px;
  line-height: 20px;
}

</style>
