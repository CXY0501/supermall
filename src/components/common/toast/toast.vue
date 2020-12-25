<template>
  <div class="toast" v-show="show">
    {{message}}
  </div>
</template>

<script>
export default{
  name:'Toast',
  data(){
    return{}
  },
  props:{
    message:{
      type: String,
      default: ''
    },
    show:{
      type: Boolean,
      default: false
    }
  },
  methods:{
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
}
</style>
