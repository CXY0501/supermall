<template>
  <div id="HomeSwiper">
    <swiper>
      <swiper-item v-for="(sItem,index) in banners" :key="index">
        <a :href="sItem.link">
          <img :src="sItem.image">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import {swiper,swiperItem} from '../../../components/common/swiper/index'

export default{
  name:'HomeSwiper',
  components:{
    swiper,
    swiperItem
  },
  props:{
    banners: {
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
</style>
