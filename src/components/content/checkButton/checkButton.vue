<template>
  <div class="checkButton" :class={check:isChecked}>
    <img src="../../../assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default{
  name:'checkButton',
  data(){
    return{}
  },
  props:{
    isChecked:{
      type: Boolean,
      default: false
    }
  },
  methods:{
  }
}
</script>

<style scoped>
.checkButton{
  border-radius: 50%;
  border: 2px solid #aaa
}
.check{
  background-color: pink;
  border-color: pink;
}
</style>
