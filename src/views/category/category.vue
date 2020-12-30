<template>
  <div>
    <category-nav-bar/>
    <div class="categoryContent">
      <scroll class="MenuContent" 
            ref="bscroll" 
            :probe-type="3">
        <category-menu/>
      </scroll>  
      <scroll class="Miniwall" 
            ref="bscroll" 
            :probe-type="3">
        <category-miniwall/>
      </scroll>  
    </div>
  </div>
</template>

<script>
import CategoryNavBar from './categoryChild/categoryNavBar'
import CategoryMenu from './categoryChild/categoryMenu'
import CategoryMiniwall from './categoryChild/CategoryMiniwall'
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
    CategoryMiniwall,
    scroll
  },
  methods:{
  }
}
</script>

<style scoped>
.categoryContent{
  display: flex;
}
.MenuContent{
  height: calc(100vh - 49px - 44px);
  z-index: 9;
  overflow: hidden;
  width: calc(100vw / 4);
}
.Miniwall{
  width: calc(100vw *3 / 4);
  height: calc(100vh - 44px - 49px);
  overflow: hidden;
}
</style>
