<template>
  <div id="home">
    <div id="navBar"><nav-bar><div slot="center">购物街</div></nav-bar></div>
    <home-swiper :banners="banners"></home-swiper>
    <home-recommend :recommends="recommends"/>
  </div>

</template>

<script>
import NavBar from '../../components/common/navbar/NavBar'
import HomeSwiper from './childcomps/HomeSwiper.vue'
import HomeRecommend from './childcomps/HomeRecommend'
import {getHomeMultidata} from '../../network/home'


export default{
  name:'home',
  components:{
    NavBar,
    HomeSwiper,
    HomeRecommend
  },
  data(){
    return{
      banners:[],
      recommends:[]
    }
  },
  created(){
    getHomeMultidata().then(res=>{
      console.log(res)
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    })
  },
  
  methods:{
  }
}
</script>

<style scoped>
  #navBar{
    background-color: var(--color-tint); 
    color: #ffffff
  }
</style>
