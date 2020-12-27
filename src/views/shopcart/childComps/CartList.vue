<template>
  <div class="cartList">
    <scroll class="CartContent" ref="scroll">
    <!-- <li v-for="item in cartList" :key="item.iid">{{item}}</li> -->
    <cart-list-item v-for="(item,index) in cartList" :item-info="item" :key="index"></cart-list-item>
    </scroll>
  </div>
  
</template>

<script>
import { mapGetters } from 'vuex'
import scroll from '../../../components/common/scroll/scroll.vue'
import cartListItem from './CartListItem'

export default{
  name:'cartList',
  data(){
    return{}
  },
  components:{
    scroll,
    cartListItem
  },
  computed:{
    ...mapGetters(['cartList'])
  },
  methods:{
  },
  activated(){
    this.$refs.scroll.refresh()
  }
}
</script>

<style scoped>
.cartList{
  height: calc(100vh - 49px - 44px - 44px);
  position: relative;
  top: 0;
  bottom: calc(49px + 44px)
}
.CartContent{
  overflow: hidden;
  position: absolute;
  top:0;
  bottom: 0;
  /* padding-bottom: 93px; */
  left: 0;
  right: 0;
}
</style>
