import backTop from '../components/content/backTop/backTop'

export const backTopMixin = {
    components:{
        backTop
    },
    data() {
        return {
            isShowBackTop: false
        }
    },
    methods: {
        backClick(){
            this.$refs.bscroll.scroll.scrollTo(0,0,300)
        },
        listenShowBackTop(position){
            this.isShowBackTop = -position.y > 1000
        }
    }
}