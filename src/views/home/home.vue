<template>
  <div id="home">
    <nav-bar><div slot="center">购物街</div></nav-bar>
  </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar'
export default{
  name:'home',
  components:{
    NavBar
  },
  data(){
    return{}
  },
  methods:{
  }
}
</script>

<style scoped>
  #home{
    background-color: var(--color-tint); 
    color: #ffffff
  }
</style>
