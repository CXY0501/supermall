<template>
  <div>
    <div id="tabbar">
     <slot></slot>
   </div>
  </div>
</template>

<script>
// import tabbaritem from './tabbaritem'
export default{
  name:'tabbar',
  // components:{
  //   tabbaritem
  // },
  data(){
    return{}
  },
  methods:{
  }
}
</script>

<style scoped>
 #tabbar{
   display: flex;
   background-color: #f6f6f6;
   position: fixed;
   left: 0;
   right: 0;
   bottom: 0;
   box-shadow: 0 -2px 1px rgba(100,100,100,.2);
 }
 
</style>
