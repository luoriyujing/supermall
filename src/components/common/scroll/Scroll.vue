<template>
  <!-- ref如果绑定在组件中，那么通过this.$refs.refname获取到的就是一个组件-->
  <!-- ref如果绑定在普通的元素中，那么通过this.$refs.refname获取到的就是一个元素对象-->
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad:{
      type:false,
      default:0
    }
  },
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    //1.创建BScroll对象
    this.scroll = new BScroll(document.querySelector(".wrapper"), {
      click: true,
      probeType: this.probeType,
      pullUpLoad:this.pullUpLoad
    });

    //2.监听滚动的位置
    this.scroll.on("scroll", (position) => {
      //通过自定义事件传出去
     this.$emit('scroll',position)
    });

    this.scroll.on("pullingUp", () => {
      this.$emit('pullingUp')
    });
  },
  methods: {
    scrollTo(x, y, time = 500) {
      this.scroll.scrollTo(x, y, time);
    },
    finishPullUp(){
      this.scroll.finishPullUp()
    }
  },
};
</script>

<style scoped>
</style>