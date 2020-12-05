<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>

import BScroll from 'better-scroll'

export default{
  name:'scroll',
  data(){
    return{
      scroll: null
    }
  },
  methods:{
  },
  mounted(){
    // this.refresh,
    this.scroll = new BScroll(this.$refs.wrapper,{
      observeDOM:true,
      probeType: 3,
      pullUpLoad:true,
      click:true,
      tap:true,
      mouseWheel: true
    }),
    this.scroll.on('scroll',(position)=>{
      console.log(position)
    })
  }
}
</script>

<style scoped>
</style>
