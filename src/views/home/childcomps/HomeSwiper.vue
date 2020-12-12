<template>
  <div id="HomeSwiper">
    <swiper>
      <swiper-item v-for="(sItem,index) in banners" :key="index">
        <a :href="sItem.link">
          <img :src="sItem.image" @load="imageLoad">
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
    return{
      isLoad:false
    }
  },
  methods:{
    imageLoad(){
      if(!this.isLoad){
        this.$emit('swiperImageLoad')
        this.isLoad = true
      }
    }
  }
}
</script>

<style scoped>
</style>
