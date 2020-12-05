<template>
  <div class="tab-control1">
    <div v-for="(item,index) in titles" :key="index" 
    class="tabControl-item" :class="{active: index === currentIndex}" @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default{
  name:'tabControl',
  data(){
    return{
      currentIndex:0
    }
  },
  props:{
    titles:{
      type:Array,
      default(){
        return []
      }
    }
  },
  methods:{
    itemClick(index){
      this.currentIndex = index;
      this.$emit('tabClick',index)
      // console.log(index) 
    }
  }
}
</script>

<style scoped>
  .tab-control1{
    display:flex;
    font-size: 15px;
    text-align: center;
    height: 40px;
    line-height: 40px;
    background-color: #fff;
    z-index: 10;
  }
  .tabControl-item{
    flex:1;
  }
  .active{
    color: var(--color-high-text);
  }
  .active span{
    padding: 2px;
    border-bottom: 3px solid var(--color-high-text);
  }
</style>
