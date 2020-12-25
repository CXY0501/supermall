<template>
  <div class="toast" v-show="isShow">
    {{message}}
  </div>
</template>

<script>
export default{
  name:'Toast',
  data(){
    return{
      message:'',
      isShow: false
    }
  },
  props:{
    // message:{
    //   type: String,
    //   default: ''
    // },
    // show:{
    //   type: Boolean,
    //   default: false
    // }
  },
  methods:{
    show(message="Default",duration=2000){
      this.message = message
      this.isShow = true
      setTimeout (()=>{
        this.isShow = false
        this.message = ''
      },duration)
    }
  }
}
</script>

<style scoped>
.toast{
  position: fixed;
  top:50%;
  left: 50%;
  padding: 8px 10px;
  transform: translate(-50%,-50%);
  color:#fff;
  background-color: rgba(0,0,0,0.7);
  border-radius: 5%;
  z-index: 999;
}
</style>
