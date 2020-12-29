<template>
  <div class="CategoryNavBar">
    <nav-bar>
      <div slot="center" class="title">
        商品分类
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from '../../../components/common/navbar/NavBar.vue'
export default{
  name:'CategoryNavBar',
  data(){
    return{}
  },
  components:{
    NavBar
  },
  methods:{
  }
}
</script>

<style scoped>
.CategoryNavBar{
  background-color: var(--color-tint);
  color: #eee;
  z-index: 999;
}
</style>
