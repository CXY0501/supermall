<template>
  <div>
    <category-nav-bar/>
    <scroll class="MenuContent" 
          ref="bscroll" 
          :probe-type="3">
      <category-menu/>
    </scroll>  
  </div>
</template>

<script>
import CategoryNavBar from './categoryChild/categoryNavBar'
import CategoryMenu from './categoryChild/categoryMenu'
import scroll from '../../components/common/scroll/scroll'

export default{
  name:'category',
  data(){
    return{
    }
  },
  components:{
    CategoryNavBar,
    CategoryMenu,
    scroll
  },
  methods:{
    test(){
      console.log(this.categoryList)
    }
  }
}
</script>

<style scoped>
.MenuContent{
  height: calc(100vh - 49px - 44px);
  z-index: 9;
  overflow: hidden;
}
</style>
