<template>
  <div id="detail">
   <detail-nav-bar class="detailNavBar" @titleClick="titleClick" ref="nav"/>
   <scroll class="content" 
          ref="bscroll" 
          :probe-type="3" 
          @scrollPosition="contentScroll">
    <detail-swiper :top-images="topImages"/>
    <detail-base-info :goods="goods"/>
    <detail-shop-info :shop="shop"/>
    <detail-goods-info :detail-info="detailInfo" @DetailImageLoad="DetailImageLoad"/>
    <detail-param-info :param-info="paramInfo" ref="params"/>
    <detail-comments :comment-info="commentInfo" ref="comment"/>
    <detail-recommend-info :recommend-list="recommendList" ref="recommend"/>
   </scroll>
   <back-top @click.native="backClick" v-show="isShowBackTop"/>
   <detail-bottom-bar @addToCart="addToCart"/>
   <!-- <toast :message="message" :show="show"/> -->
  </div>
</template>

<script>
import DetailNavBar from '../detail/detailChild/detailNavBar'
import {getDetail,Goods,Shop,GoodsParam,getRecommend} from '../../network/detail'
import DetailSwiper from '../detail/detailChild/detailSwiper'
import DetailBaseInfo from '../detail/detailChild/detailBaseInfo'
import DetailShopInfo from '../detail/detailChild/detailShopInfo'
import DetailGoodsInfo from '../detail/detailChild/detailGoodsInfo'
import DetailParamInfo from '../detail/detailChild/detailParamInfo'
import DetailComments from '../detail/detailChild/detailComments'
import DetailRecommendInfo from '../detail/detailChild/detailRecommendInfo'
import DetailBottomBar from '../detail/detailChild/detailBottomBar'
import backTop from '../../components/content/backTop/backTop'
// import Toast from '../../components/common/toast/toast'

import Scroll from '../../components/common/scroll/scroll'

import {backTopMixin} from '../../common/mixin'
import { mapActions } from 'vuex'

export default{
  name:'detail',
  components:{
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailComments,
    DetailRecommendInfo,
    DetailBottomBar,
    backTop,
    // Toast
  },
  mixins:[backTopMixin],
  data(){
    return{
      iid:null,
      topImages:[],
      goods:{},
      shop:{},
      detailInfo:{},
      paramInfo:{},
      commentInfo:{},
      recommendList:[],
      itemImgListener: null,
      themeTopYs:[],
      currentIndex:0,
      // message:'',
      // show: false
    }
  },
  created(){
    this.iid = this.$route.params.iid
    getDetail(this.iid).then(res=>{
      const data=res.result
      this.topImages = data.itemInfo.topImages
      this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
      this.shop = new Shop (data.shopInfo)
      this.detailInfo = data.detailInfo
      this.paramInfo = new GoodsParam(data.itemParams.info,data.itemParams.rule)
      if (data.rate.list) {
            this.commentInfo = data.rate.list[0];
          }
      // this.$nextTick(()=>{
      //   this.themeTopYs = []
      //   this.themeTopYs.push (0)
      //   this.themeTopYs.push (this.$refs.params.$el.offsetTop)
      //   this.themeTopYs.push (this.$refs.comment.$el.offsetTop)
      //   this.themeTopYs.push (this.$refs.recommend.$el.offsetTop)
      //   console.log(this.themeTopYs)
      // },2000)
    })
    getRecommend().then((res, error) => {
          if (error) return
          this.recommendList = res.data.list
          console.log(this.recommendList)
        })
  },
  mounted(){
    const newRefresh = this.debounce(this.$refs.bscroll.refresh,500)
    this.itemImgListener = ()=>{
      newRefresh()
    }
    this.$bus.$on('itemImgLoad',this.itemImgListener)
  },
  destroyed(){
    this.$bus.$off('itemImgLoad',this.itemImgListener)
  },
  methods:{
    ...mapActions({
      add: 'addCart'
    }),
    debounce(func,delay){
      let timer = null
      return function(...args){
        if (timer) clearTimeout(timer)
        timer = setTimeout(()=>{
          func.apply(this, args)
        },delay)
      }
    },
    DetailImageLoad(){
        this.$refs.bscroll.scroll.refresh()
        this.themeTopYs = []
        this.themeTopYs.push (0)
        this.themeTopYs.push (this.$refs.params.$el.offsetTop)
        this.themeTopYs.push (this.$refs.comment.$el.offsetTop)
        this.themeTopYs.push (this.$refs.recommend.$el.offsetTop)
        this.themeTopYs.push (Number.MAX_VALUE)
        console.log(this.themeTopYs)
    },
    titleClick(index){
      this.$refs.bscroll.scroll.scrollTo(0,-this.themeTopYs[index],200)
    },
    contentScroll(position){
      const positionY = - position.y
      let length = this.themeTopYs.length
      for(let i= 0; i<length; i++){
        if(this.currentIndex !== i && 
        ((i<length-1)&&(positionY>=this.themeTopYs[i])&&(positionY<this.themeTopYs[i+1]))){
          this.currentIndex = i
          // console.log(this.currentIndex)
          this.$refs.nav.currentIndex = this.currentIndex
        }
      }
      this.listenShowBackTop(position)
    },
    addToCart(){
      // console.log('点击加入购物车')
      const product = {}
      product.image = this.topImages[0]
      product.title = this.goods.title
      product.desc = this.goods.desc
      product.price = this.goods.realPrice
      product.iid = this.iid
  
      this.add(product).then(res =>{
      //   console.log(res)
      //   this.show = true
      //   this.message = res

      //   setTimeout(() => {
      //     this.show = false
      //     this.message = ''
      //   }, 1500);
        this.$toast.show(res)
        // console.log(this.$toast)
      })
      // this.$store.commit('addCart',product)
      // this.$store.dispatch('addCart',product).then(res =>{
      //   console.log(res)
      // })
      
    }
  }
}
</script>

<style scoped>
#detail{
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
  
}
.detailNavBar{
  position: relative;
  z-index:9;
  background-color: #fff;
}
.content{
  height: calc(100% - 44px - 49px);
}
</style>
