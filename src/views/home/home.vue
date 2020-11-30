<template>
  <div id="home">
    <div id="navBar"><nav-bar><div slot="center">购物街</div></nav-bar></div>
    <home-swiper :banners="banners"></home-swiper>
    <home-recommend :recommends="recommends"/>
    <feature-view/>
    <li>content1</li>
    <li>content2</li>
    <li>content3</li>
    <li>content4</li>
    <li>content5</li>
    <li>content6</li>
    <li>content7</li>
    <li>content8</li>
    <li>content9</li>
    <li>content10</li>
    <li>content11</li>
    <li>content12</li>
    <li>content13</li>
    <li>content14</li>
    <li>content15</li>
    <li>content16</li>
    <li>content17</li>
    <li>content18</li>
    <li>content19</li>
    <li>content20</li>
  </div>

</template>

<script>
import NavBar from '../../components/common/navbar/NavBar'
import HomeSwiper from './childcomps/HomeSwiper.vue'
import HomeRecommend from './childcomps/HomeRecommend'
import featureView from './childcomps/featureView'
import {getHomeMultidata} from '../../network/home'


export default{
  name:'home',
  components:{
    NavBar,
    HomeSwiper,
    HomeRecommend,
    featureView
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
</style>
