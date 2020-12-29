<template>
  <div>
    <category-nav-bar/>
    <category-menu/>
    
  </div>
</template>

<script>
import CategoryNavBar from './categoryChild/categoryNavBar'
import CategoryMenu from './categoryChild/categoryMenu'

export default{
  name:'category',
  data(){
    return{
    }
  },
  components:{
    CategoryNavBar,
    CategoryMenu
  },
  methods:{
    test(){
      console.log(this.categoryList)
    }
  }
}
</script>

<style scoped>
</style>
