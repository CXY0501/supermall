<template>
  <div class="shopCart">
    <nav-bar class="navBar">
      <div slot="center">购物车({{cartLength}})</div>
    </nav-bar>
    <cart-list></cart-list>
  </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar'
import cartList from './childComps/CartList'

import { mapGetters } from 'vuex'

export default{
  name:'shopcart',
  components:{
    NavBar,
    cartList,
  },
  data(){
    return{}
  },
  methods:{
  },
  computed:{
    ...mapGetters([
      'cartLength',
      'cartList'
    ])
  }
}
</script>

<style scoped>
.navBar{
  background-color: var(--color-tint);
  color:#fff;
  /* font-weight: 700 */
}
.shopCart{
  height: 100vh;
}
</style>
