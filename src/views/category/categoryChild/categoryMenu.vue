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

import {getCategory} from '../../../network/category'

export default{
  name:'CategoryMenu',
  data(){
    return{
      categoryList: [],
      menu:[],
      currentIndex: 0
    }
  },
  methods:{
    titleClick(index){
      this.currentIndex = index
    }
  },
  created(){
    getCategory().then((res, error) => {
          if (error) return
          this.categoryList = res.data.category.list
          for(let item in this.categoryList){
            // console.log(this.categoryList[item])
            this.menu.push(this.categoryList[item].title)
          }
          // console.log(this.categoryList)
        })
  },
}
</script>

<style scoped>
.CategoryMenu{
  height: calc(100% - 44px - 49px);
  width: calc(100vw / 4);
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
