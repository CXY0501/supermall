<template>
  <div class="navbar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default{
  name:"NavBar",
  data(){
    return{}
  },
  methods:{
  }
}
</script>

<style scoped>
  .navbar{
    display: flex;
    line-height: 44px;
    height: 44px;
    background-color:red;
  }
  .left, .right{
    width: 60px;  
    background-color: blue;
  }
  .center{
    flex:1
  }
</style>
