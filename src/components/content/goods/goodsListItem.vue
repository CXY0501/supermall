<template>
  <div class="goodsListItem" @click="itemClick">
    <!-- <img v-if="goodsItem.show" :src="goodsItem.show.img" alt="" @load="imageLoad"> -->
    <!-- <img :src="getImg" :key="getImg" alt="" @load="imageLoad"> -->
    <img v-if="goodsItem" v-lazy="getImg" alt="" @load="imageLoad"> 
    <div class="goodsInfo">
      <p>{{goodsItem.title}}</p>
      <span class="price">¥{{goodsItem.price}}</span>
      <span class="favorite">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>

export default{
  name:'goodsListItem',
  data(){
    return{}
  },
  props:{
    goodsItem:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  methods:{
    imageLoad(){
      this.$bus.$emit('itemImageLoad')
    },
    itemClick(){
      let iid = this.goodsItem.iid || this.goodsItem.item_id
      this.$router.push('/detail/'+ iid)
    }
  },
  computed: {
      getImg() {
        return this.goodsItem.img || this.goodsItem.image || this.goodsItem.show.img
      }
    }
}
</script>

<style scoped>
  .goodsListItem {
    padding-bottom: 40px;
    position: relative;
    width: 48%;
  }
  .goodsListItem img{
    width: 100%;
    /* height: 100%; */
    border-radius: 5px;
  }
  .goodsInfo{
    font-size: 12px;
    position:absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .goodsInfo p{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }
  .goodsInfo .price{
    color: var(--color-high-text);
    margin-right: 20px;
  }
  .goodsInfo .favorite{
    position: relative;
  }
  .goodsInfo .favorite::before{
    content:'';
    position: absolute;
    left: -15px;
    top:-1px;
    width: 14px;
    height: 14px;
    background: url("../../../assets/img/common/fav.svg") 0 0/14px 14px;
  }
</style>
