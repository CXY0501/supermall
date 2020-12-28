<template>
  <div class="CategoryMenu">
    <ul class="menu">
      <li v-for="(item,index) in menu" :key=index
      :class="{active:index===currentIndex}" @click="titleClick(index)">
        {{item}}
      </li>
    </ul>
  </div>
</template>

<script>
export default{
  name:'CategoryMenu',
  data(){
    return{
      menu: ['正在流行','上衣','裤子','裙子','内衣','女鞋','男友','包包','运动','配饰','美妆','个护','家居'],
      currentIndex: 0
    }
    
  },
  methods:{
    titleClick(index){
      this.currentIndex = index
    }
  }
}
</script>

<style scoped>
.CategoryMenu{
  height: calc(100% - 44px - 49px);
  width: calc(100vw / 4)
}
.menu{
  background-color: rgb(248, 242, 242);
  color: grey
}
.menu li{
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 13px;
}
.active{
  color: var(--color-high-text);
  background-color: #fff;
  box-shadow: 0 1px rgba(100,100,100,.1);
}
</style>
