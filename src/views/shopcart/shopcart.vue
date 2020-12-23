<template>
  <div>
    <nav-bar class="navBar">
      <div slot="center">购物车({{cartLength}})</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar'

import { mapGetters } from 'vuex'

export default{
  name:'shopcart',
  components:{
    NavBar
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
</style>
