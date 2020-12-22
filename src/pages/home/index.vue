<template>
  <div id="home">
    <PanoHeader :theme="navTheme" :opacity="opacity"/>
    <main id="main">
      <HeroCarousel/>
      <BlueBanner/>
      <PanoFooter/>
    </main>
  </div>
</template>

<script>
  import { mapMutations, mapState } from 'vuex';
  import PanoHeader from '@/components/PanoHeader';
  import BlueBanner from '@/components/BlueBanner';
  import PanoFooter from '@/components/PanoFooter';
  import HeroCarousel from './components/HeroCarousel';
  import $ from 'jquery';

  export default {
    name: 'home',
    metaInfo: {
      title: '拍乐云Pano - 高清实时通信云_实时音视频SDK_顶级音视频团队构建',
      meta: [
        {
          name: 'keywords',
          content: 'RTC,WebRTC,音视频通信,语音通话,视频通话,互动白板,互动直播,实时音视频SDK,视频会议,互动课堂,连麦',
        },
        {
          name: 'description',
          content: '拍乐云Pano是由顶级音视频团队构建的实时通信PaaS云服务，Pano拥有完全自主研发的音视频引擎，在音视频编解码、网络传输、弱网对抗与QoE、回声消除、实时通信组网与路由、高并发的流媒体分发等方面达到了国际顶尖水平。',
        },
      ],
    },
    components: {
      PanoHeader,
      HeroCarousel,
      BlueBanner,
      PanoFooter,
    },
    data(){
      return {
        opacity:0,
      }
    },
    props:{
      lang:{
        required:true,
        type:String
      }
    },
    computed: {
      ...mapState({
        navTheme: state => state.home.navTheme,
        isSecondCarousel: state => state.home.isSecondCarousel,
        lang: state => state.lang,
      }),
    },
    mounted() {
      this.onWindowScroll()
      this.$i18n.locale = this.lang
    },
    methods: {
      ...mapMutations([
        'changeNavTheme'
      ]),
      /**
       * 导航沉浸式
       */
      onWindowScroll() {
        const _this = this;
        window.onscroll = function changeNavBar() {
          var scrollTop = $(document).scrollTop();
          if (scrollTop < 100) {
            /*2.当页面滚动的时候---随着页面卷曲的高度变大透明度变大*/
            _this.opacity = scrollTop / 100;
            if (_this.isSecondCarousel) {
              _this.changeNavTheme('black');
            } else {
              _this.changeNavTheme('white');
            }
          } else {
            /*3.当页面滚动的时候---超过某一个高度的时候透明度不变*/
            _this.opacity = 1;
            _this.changeNavTheme('black');
          }
        };
      },
    },
  };
</script>

<style scoped lang="less">

</style>