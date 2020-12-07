<template>
  <div id="home">
    <div id="navBar"><nav-bar><div slot="center">购物街</div></nav-bar></div>
    <scroll class="homecontent" 
            ref="bscroll" 
            @scrollPosition="SPosition" 
            :pull-up-load="true"
            @pullingUp="PullUpLoad">
      <home-swiper :banners="banners"></home-swiper>
      <home-recommend :recommends="recommends"/>
      <feature-view/>
      <tab-control :titles="['流行','新款','精选']" class="tabControl" @tabClick="tabClick"/>
      <goods-list :goods="showgoods"/>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"/>
  </div>

</template>

<script>
import NavBar from '../../components/common/navbar/NavBar'
import scroll from '../../components/common/scroll/scroll'
import tabControl from '../../components/content/tabControl/tabControl'
import goodsList from '../../components/content/goods/goodsList'
import backTop from '../../components/content/backTop/backTop'

import HomeSwiper from './childcomps/HomeSwiper.vue'
import HomeRecommend from './childcomps/HomeRecommend'
import featureView from './childcomps/featureView'

import {getHomeMultidata,getHomeGoods} from '../../network/home'
import GoodsList from '../../components/content/goods/goodsList.vue'
import Scroll from '../../components/common/scroll/scroll.vue'
import BackTop from '../../components/content/backTop/backTop.vue'


export default{
  name:'home',
  components:{
    NavBar,
    Scroll,
    tabControl,
    goodsList,
    backTop,
    HomeSwiper,
    HomeRecommend,
    featureView,
    GoodsList,
    BackTop,
    Scroll
  },
  data(){
    return{
      banners:[],
      recommends:[],
      goods:{
        'pop':{page:0, list:[]},
        'new':{page:0, list:[]},
        'sell':{page:0, list:[]},
      },
      currentType: 'pop',
      isShowBackTop: false
    }
  },
  computed:{
    showgoods(){
      return this.goods[this.currentType].list
    }
  },
  created(){
    this.getHomeMultidata(),

    this.getHomeGoods('pop'),
    this.getHomeGoods('new'),
    this.getHomeGoods('sell'),

    this.$bus.$on('itemImageLoad', ()=>{
      this.$refs.bscroll.refresh()
    })
  },
  methods:{

    // 事件监听相关
    backClick(){
      this.$refs.bscroll.scroll.scrollTo(0,0,500)
    },
    SPosition(position){
      this.isShowBackTop = position.y<-1000
    },
    PullUpLoad(){
      this.getHomeGoods(this.currentType)
      this.$refs.bscroll.scroll.refresh()
    },
    tabClick(index){
      switch(index){
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
    },

    // 网络请求相关
     getHomeMultidata(){
       getHomeMultidata().then(res=>{
        console.log(res)
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
       })
    },
    getHomeGoods(type){
      const page = this.goods[type].page+1
      getHomeGoods(type,page).then(res=>{
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page+1;
        this.$refs.bscroll.finishPullUp()
      })
    }
  }
}
</script>

<style scoped>
  #home{
    padding-top: 44px;
    height: 100vh;
    position: relative;
  }
  #navBar{
    background-color: var(--color-tint); 
    color: #ffffff;
    position:fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }
  .tabControl{
    position: sticky;
    top:44px
  }
  .homecontent{
    /* overflow-y: scroll; */
    overflow: hidden;
    position:absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
</style>
