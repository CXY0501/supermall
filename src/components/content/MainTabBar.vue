<template>
  <div>
    <tabbar>
     <tabbaritem path="/home">
       <img slot="itemicon" src="../../assets/img/tabbar/首页 (1).png" alt="">
       <img slot="itemicon_active" src="../../assets/img/tabbar/首页.png" alt="">
       <div slot="itemname">首页</div>
     </tabbaritem>
     <tabbaritem path="/category">
       <img slot="itemicon" src="../../assets/img/tabbar/类目 品类 分类 类别 (1).png" alt="">
       <img slot="itemicon_active" src="../../assets/img/tabbar/类目 品类 分类 类别.png" alt="">
       <div slot="itemname">品类</div>
     </tabbaritem>
     <tabbaritem path="/shopcart">
       <img slot="itemicon" src="../../assets/img/tabbar/购物车空 (1).png" alt="">
       <img slot="itemicon_active" src="../../assets/img/tabbar/购物车空.png" alt="">
       <div slot="itemname">购物车</div>
     </tabbaritem>
     <tabbaritem path="/profile">
       <img slot="itemicon" src="../../assets/img/tabbar/我的 (1).png" alt="">
       <img slot="itemicon_active" src="../../assets/img/tabbar/我的.png" alt="">
       <div slot="itemname">我的</div>
     </tabbaritem>
   </tabbar>
  </div>
</template>

<script>
import tabbar from '../common/tabbar/tabbar'
import tabbaritem from '../common/tabbar/tabbaritem'

export default{
  name:'MainTabBar',
  data(){
    return{}
  },
  components:{
    tabbar,
    tabbaritem
  },
  methods:{
  }
}
</script>

<style scoped>
</style>
