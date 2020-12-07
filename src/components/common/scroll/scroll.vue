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
  props:{
    pullUpLoad:{
      type: Boolean,
      default: false
    }
  },
  methods:{
    finishPullUp(){
      this.scroll.finishPullUp()
    },
    refresh(){
      this.scroll && this.scroll.refresh()
    }
  },
  mounted(){
    // this.refresh,
    this.scroll = new BScroll(this.$refs.wrapper,{
      observeDOM:true,
      probeType: 3,
      pullUpLoad:this.pullUpLoad,
      click:true,
      tap:true,
      mouseWheel: true
    }),
    this.scroll.on('scroll',(position)=>{
      this.$emit('scrollPosition',position)
    }),
    this.scroll.on('pullingUp',()=>{
      this.$emit('pullingUp')
    })
  }
}
</script>

<style scoped>
</style>
