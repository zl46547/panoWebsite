<template>
  <section id="heroCarousel" class="carousel slide carousel-fade" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#heroCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#heroCarousel" data-slide-to="1"></li>
      <li data-target="#heroCarousel" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <div class="carousel-container">
          <div class="carousel-bg-gif"></div>
          <div class="carousel-content container">
            <h2 class="animated fadeInDown">实时互动，全球互联</h2>
            <div class="content">
              <p class="animated fadeInUp">
                一个SDK，四行代码，在应用内构建
              </p>
              <p class="animated fadeInUp sub">
                语音通话、视频通话、互动白板、互动直播、云端录制
              </p>
            </div>
            <div class="btn-container">
              <a
                href="https://console.pano.video/#/user/register"
                target="console"
                class="btn-get-started animated fadeInUp scrollto"
              >立即体验</a
              >
              <a
                href="javascript:void(0);"
                class="btn-get-started animated fadeInUp scrollto"
                onclick="showVideo()"
              >观看视频</a
              >
            </div>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <div class="carousel-container">
          <div class="carousel-bg-gif"></div>
          <div class="carousel-content container">
            <h2 class="animated fadeInDown">实时音视频专家</h2>
            <div class="content">
              <p class="animated fadeInUp">
                由一群音视频极客打造，助力开发者
              </p>
              <p class="animated fadeInUp sub">
                用卓越的实时互动能力创造愉悦的用户体验
              </p>
            </div>
            <div class="btn-container">
              <a
                href="https://console.pano.video/#/user/register"
                target="console"
                class="btn-get-started btn-get-started-light-color-bg animated fadeInUp scrollto"
              >立即体验</a
              >
            </div>

          </div>
        </div>
      </div>
      <div class="carousel-item">
        <div class="carousel-container">
          <div class="carousel-bg-gif"></div>
          <div class="carousel-content container">
            <h2 class="animated fadeInDown">全场景音视频服务</h2>
            <div class="content">
              <p class="animated fadeInUp">
                强大的自研音视频引擎、3A 算法和音视频编解码算法
              </p>
              <p class="animated fadeInUp sub">
                为在线教育、泛娱乐社交、视频会议、在线金融、智能硬件、远程医疗等多行业客户提供高质量的实时互动技术
              </p>
            </div>
            <div class="btn-container">
              <a
                href="https://console.pano.video/#/user/register"
                target="console"
                class="btn-get-started animated fadeInUp scrollto"
              >立即体验</a
              >
            </div>

          </div>
        </div>
      </div>
    </div>
    <a class="carousel-control-prev" href="#heroCarousel" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#heroCarousel" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </section>
</template>

<script>
  import $ from 'jquery';
  import { mapMutations } from 'vuex';

  export default {
    name: 'HeroCarousel',
    mounted() {
      $('#heroCarousel').carousel({
        interval: 88000,
      }, 1000);
      this.onHeroCarouselChange();
    },
    methods: {
      ...mapMutations([
        'changeNavTheme',
        'changeIsSecondCarousel',
      ]),
      /**
       * 监听顶部轮播变化
       */
      onHeroCarouselChange() {
        const _this = this;
        $('#heroCarousel').on('slid.bs.carousel', function(e) {
          _this.changeIsSecondCarousel( e.to === 1);
          var scrollTop = $(document).scrollTop();
          if (scrollTop > 100) {
            return false;
          }
          // var dropDownArrowDom = $('.drop-down-arrow');
          // 轮播到第二张banner时，改变顶部Nav条样式
          if (e.to === 1) {
            _this.changeNavTheme('black');
            // $('.head-logo-img').attr('src', './assets/images/logo-blue.svg');
            // $('.nav-menu-title').removeClass('nav-menu-title-white');
            // $('.nav-menu-title').addClass('nav-menu-title-black');
            // dropDownArrowDom.removeClass('drop-down-arrow-white');
            // dropDownArrowDom.addClass('drop-down-arrow-black');
          } else {
            _this.changeNavTheme('white');
            // $('.head-logo-img').attr('src', './assets/images/logo-bai.svg');
            // $('.nav-menu-title').removeClass('nav-menu-title-black');
            // $('.nav-menu-title').addClass('nav-menu-title-white');
            // dropDownArrowDom.removeClass('drop-down-arrow-black');
            // dropDownArrowDom.addClass('drop-down-arrow-white');
          }
          // $(this).find('h2').addClass('animated fadeInDown')
          // $(this).find('p').addClass('animated fadeInUp')
          // $(this).find('.btn-get-started').addClass('animated fadeInUp')
        });
      },
    },
  };
</script>

<style scoped lang="less">
  h2 {
    color: #fff;
    margin-bottom: 10px;
    font-size: 46px;
    font-weight: 500;
  }

  p {
    width: 80%;
    -webkit-animation-delay: 0.4s;
    animation-delay: 0.4s;
    color: #fff;
  }

  .iconfont {
    font-size: 48px;
    color: #dcdde6;
  }

  .carousel-control-prev, .carousel-control-next {
    width: 10%;
  }

  .carousel-indicators {
    margin-bottom: 110px;

    li {
      cursor: pointer;
      position: relative;
      width: 50px;
      background-color: #e0dce3;
      opacity: 1 !important;

      &::after {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 0;
        background-color: #fff;
      }

      &.active::after {
        animation: mymove 8s 1 forwards;
        -webkit-animation: mymove 8s linear 1 forwards;
      }
    }
  }

  .carousel-item {
    width: 100%;
    height: 684px;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      height: 100%;
      width: 100%;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      overflow: hidden;
    }

    .carousel-bg-gif {
      position: absolute;
      width: 569px;
      height: 470px;
      right: 6%;
      top: 50%;
      transform: translateY(-50%);
      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;
    }

    &:nth-of-type(1) {
      background-image: url(../../../assets/images/home/swiper1.jpg);

      .carousel-bg-gif {
        background-image: url(../../../assets/images/home/banner-right-01.png);
      }
    }

    &:nth-of-type(2) {
      background-image: url(../../../assets/images/home/swiper2.jpg);

      .carousel-bg-gif {
        width: 769px;
        top: 65%;
        right: 4%;
        height: 600px;
        background-image: url(../../../assets/images/home/banner-right-02.png);
      }

      h2, p {
        color: #000;
      }
    }

    &:nth-of-type(3) {
      background-image: url(../../../assets/images/home/swiper3.jpg);

      .carousel-bg-gif {
        background-image: url(../../../assets/images/home/banner-right-03.png);
      }
    }

    .carousel-container {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      bottom: 0;
      top: 0;
      left: 0;
      right: 0;
      overflow: hidden;

      .carousel-content {
        text-align: left;

        .content {
          width: 70%;
          margin: 34px 0 71px 0;

          p.animated {
            margin-bottom: 2px;
            font-size: 22px;
          }
        }
      }
    }
  }

  @keyframes mymove {
    0% {
      width: 0;
    }
    100% {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    .container {
      padding-right: 0 !important;
    }

    #heroCarousel {
      h2 {
        font-size: 20px;
        text-align: center;
      }

      p {
        width: 100%;
      }

      .iconfont {
        font-size: 28px;
      }

      .carousel-indicators {
        margin-bottom: 20px;
      }

      .carousel-item {
        height: 324px;

        .carousel-bg-gif {
          display: none;
        }

        .carousel-container {
          .carousel-content {
            padding: 0 50px;
            box-sizing: border-box;

            .content {
              width: 100%;
              margin: 14px 0;

              p.animated {
                font-size: 14px;
              }
            }

            .btn-container {
              text-align: center;
            }
          }
        }
      }
    }
  }
</style>