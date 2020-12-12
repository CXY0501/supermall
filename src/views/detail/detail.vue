<template>
  <div id="detail">
   <detail-nav-bar class="detailNavBar"/>
   <scroll class="content">
    <detail-swiper :top-images="topImages"/>
    <detail-base-info :goods="goods"/>
    <detail-shop-info :shop="shop"/>
    <detail-goods-info :detail-info="detailInfo"/>
   </scroll>
  </div>
</template>

<script>
import DetailNavBar from '../detail/detailChild/detailNavBar'
import {getDetail,Goods,Shop} from '../../network/detail'
import DetailSwiper from '../detail/detailChild/detailSwiper'
import DetailBaseInfo from '../detail/detailChild/detailBaseInfo'
import DetailShopInfo from '../detail/detailChild/detailShopInfo'
import DetailGoodsInfo from '../detail/detailChild/detailGoodsInfo'

import Scroll from '../../components/common/scroll/scroll'

export default{
  name:'detail',
  components:{
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo
  },
  data(){
    return{
      iid:null,
      topImages:[],
      goods:{},
      shop:{},
      detailInfo:{}
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
    })
  },
  methods:{
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
