<template>
  <div class="cartListItem">
    {{product}}
  </div>
</template>

<script>
export default{
  name:'cartListItem',
  data(){
    return{}
  },
  props:{
    product:{
      type: Object,
      default(){
        return {}
      }
    }
  },
  methods:{
  }
}
</script>

<style scoped>
</style>
