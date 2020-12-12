<template>
  <div id="detail">
   <detail-nav-bar/>
   <detail-swiper :top-images="topImages"/>
  </div>
</template>

<script>
import DetailNavBar from '../detail/detailChild/detailNavBar'
import {getDetail} from '../../network/detail'
import DetailSwiper from '../detail/detailChild/detailSwiper'

export default{
  name:'detail',
  components:{
    DetailNavBar,
    DetailSwiper
  },
  data(){
    return{
      iid:null,
      topImages:[]
    }
  },
  created(){
    this.iid = this.$route.params.iid
    getDetail(this.iid).then(res=>{
      this.topImages = res.result.itemInfo.topImages
    })
  },
  methods:{
  }
}
</script>

<style scoped>
</style>
