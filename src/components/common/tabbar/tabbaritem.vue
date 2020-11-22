<template>
    <div class="tab-bar-item" @click="itemClick">
      <div v-if="!isActive" ><slot name="itemicon"></slot></div>
      <div v-else><slot name="itemicon_active"></slot></div>
      <div :class={active:isActive}><slot name="itemname"></slot></div>
    </div>
</template>

<script>
export default{
  name:'tabbaritem',
  props:{
    path: String
  },
  data(){
    return{
      // isActive:true
    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path) !== -1
    }
  },
  methods:{
    itemClick(){
      // console.log(this.$router)
      this.$router.replace(this.path)
    }
  }
}
</script>

<style scoped>
  .tab-bar-item{
   flex: 1;
   text-align: center;
   height: 49px;
   font-size: 14px;
 }
  .tab-bar-item img{
    height: 24px;
    width: 24px;
    margin-top: 3px;
    vertical-align: middle;
  }
  .active{
    color:#d81e06;
  }
</style>
