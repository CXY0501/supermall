<template>
  <div id="home">
    <div id="navBar"><nav-bar><div slot="center">购物街</div></nav-bar></div>
    <home-swiper :banners="banners"></home-swiper>
    <home-recommend :recommends="recommends"/>
    <feature-view/>
    <tab-control :titles="['流行','新款','精选']" class="tabControl"></tab-control>
    <ul>
      <li>1content</li>
      <li>2content</li>
      <li>3content</li>
      <li>4content</li>
      <li>5content</li>
      <li>6content</li>
      <li>7content</li>
      <li>8content</li>
      <li>9content</li>
      <li>10content</li>
      <li>11content</li>
      <li>12content</li>
      <li>13content</li>
      <li>14content</li>
      <li>15content</li>
      <li>16content</li>
      <li>17content</li>
      <li>18content</li>
      <li>19content</li>
      <li>20content</li>
      <li>21content</li>
      <li>22content</li>
      <li>23content</li>
      <li>24content</li>
      <li>25content</li>
      <li>26content</li>
      <li>27content</li>
      <li>28content</li>
      <li>29content</li>
      <li>30content</li>
      <li>31content</li>
      <li>32content</li>
      <li>33content</li>
      <li>34content</li>
      <li>35content</li>
      <li>36content</li>
      <li>37content</li>
      <li>38content</li>
      <li>39content</li>
      <li>40content</li>
      <li>41content</li>
      <li>42content</li>
      <li>43content</li>
      <li>44content</li>
      <li>45content</li>
      <li>46content</li>
      <li>47content</li>
      <li>48content</li>
      <li>49content</li>
      <li>50content</li>
    </ul>
  </div>

</template>

<script>
import NavBar from '../../components/common/navbar/NavBar'
import tabControl from '../../components/content/tabControl/tabControl'

import HomeSwiper from './childcomps/HomeSwiper.vue'
import HomeRecommend from './childcomps/HomeRecommend'
import featureView from './childcomps/featureView'

import {getHomeMultidata} from '../../network/home'


export default{
  name:'home',
  components:{
    NavBar,
    tabControl,
    HomeSwiper,
    HomeRecommend,
    featureView
  },
  data(){
    return{
      banners:[],
      recommends:[],
      goods:{
        'pop':{page:0, list:[]},
        'new':{page:0, list:[]},
        'sell':{page:0, list:[]},
      }
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
  .tabControl{
    position: sticky;
    top:44px
  }
</style>
