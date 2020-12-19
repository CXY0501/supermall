<template>
  <div id="detail">
   <detail-nav-bar class="detailNavBar"/>
   <scroll class="content" ref="bscroll">
    <detail-swiper :top-images="topImages"/>
    <detail-base-info :goods="goods"/>
    <detail-shop-info :shop="shop"/>
    <detail-goods-info :detail-info="detailInfo"/>
    <detail-param-info :param-info="paramInfo"/>
    <detail-comments :comment-info="commentInfo"/>
    <detail-recommend-info :recommend-list="recommendList"/>
   </scroll>
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

import Scroll from '../../components/common/scroll/scroll'
import {debounce} from '../../common/utils'

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
    DetailRecommendInfo
  },
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
      itemImgListener: null
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
    })
    getRecommend().then((res, error) => {
          if (error) return
          this.recommendList = res.data.list
        })
  },
  mounted(){
    let newRefresh = this.debounce(this.$refs.bscroll.refresh,500)
    this.itemImgListener = ()=>{
      newRefresh()
    }
    this.$bus.$on('itemImgLoad',this.itemImgListener)
  },
  destroyed(){
    this.$bus.$off('itemImgLoad',this.itemImgListener)
  },
  methods:{
    imageLoad(){
      this.$refs.scroll.refresh()
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
  height: calc(100% - 44px);
  
}
</style>
