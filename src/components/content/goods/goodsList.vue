<template>
  <div class="goodsList">
    <goods-list-item v-for="(item,id) in goods" :key="id" :goods-item="item"/>
  </div>
</template>

<script>
import goodsListItem from './goodsListItem'

export default{
  name:'goodsList',
  data(){
    return{}
  },
  components:{
    goodsListItem
  },
  props:{
    goods:{
      type: Array,
      default(){
        return []
      }
    }
  },
  methods:{
  }
}
</script>

<style scoped>
  .goodsList{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
</style>
