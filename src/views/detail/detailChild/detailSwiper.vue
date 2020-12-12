<template>
  <div id="detailSwiper" >
    <swiper>
      <swiper-item v-for="item in topImages" :key="item" class="swiper-item">
        <img :src="item" alt="">
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import {swiper, swiperItem} from '../../../components/common/swiper'
import Swiper from '../../../components/common/swiper/swiper.vue'

export default{
  name:'detailSwiper',
  components:{
    swiper,
    swiperItem
  },
  props:{
    topImages:{
      type: Array,
      default(){
        return []
      }
    }
  },
  data(){
    return{}
  },
  methods:{
  }
}
</script>

<style scoped>
.swiper-item{
  height: 300px;
  overflow: hidden;
}
</style>
