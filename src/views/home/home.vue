<template>
  <div id="home">
    <div id="navBar"><nav-bar><div slot="center">购物街</div></nav-bar></div>
    <home-swiper :banners="banners"></home-swiper>
    <home-recommend :recommends="recommends"/>
    <feature-view/>
    <tab-control :titles="['流行','新款','精选']" class="tabControl" @tabclick="tabClick"/>
    <goods-list :goods="goods['pop'].list"/>
  </div>

</template>

<script>
import NavBar from '../../components/common/navbar/NavBar'
import tabControl from '../../components/content/tabControl/tabControl'
import goodsList from '../../components/content/goods/goodsList'

import HomeSwiper from './childcomps/HomeSwiper.vue'
import HomeRecommend from './childcomps/HomeRecommend'
import featureView from './childcomps/featureView'

import {getHomeMultidata,getHomeGoods} from '../../network/home'
import GoodsList from '../../components/content/goods/goodsList.vue'


export default{
  name:'home',
  components:{
    NavBar,
    tabControl,
    goodsList,
    HomeSwiper,
    HomeRecommend,
    featureView,
    GoodsList
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
    }
  },
  created(){
    this.getHomeMultidata(),
    this.getHomeGoods('pop'),
    this.getHomeGoods('new'),
    this.getHomeGoods('sell')
  },
  methods:{
    // 事件监听相关
    tabClick(index){
      const i=index
      console.log(i)
      console.log('click')
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
        this.goods[type].page+1
      })
    }
  }
}
</script>

<style scoped>
  #home{
    padding-top: 44px;
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
</style>
