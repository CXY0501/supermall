<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles" :key="item" 
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
      this.currentIndex = index
    }
  }
}
</script>

<style scoped>
  .tab-control{
    display:flex;
    font-size: 15px;
    text-align: center;
    height: 40px;
    line-height: 40px;
    background-color: #fff;
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
