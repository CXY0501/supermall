<template>
  <div class="backTop">
    <img src="../../../assets/img/common/backTop.svg" alt="">
  </div>
</template>

<script>
export default{
  name:'backTop',
  data(){
    return{}
  },
  methods:{
  }
}
</script>

<style scoped>
  .backTop{
    position: fixed;
    right:10px;
    bottom: 60px;
    z-index: 9;
  }
  .backTop img{
    height: 40px;
    width: 40px;
    -webkit-filter: drop-shadow(5px 5px 5px #222);
    filter: drop-shadow(5px 5px 5px #222);
    /* background-color: #fff; */
  }
</style>
