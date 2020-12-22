<template>
  <section class="blue-banner-bottom">
    <div class="content-wrap">
      <p>每月10000分钟免费</p>
      <p>零成本启动</p>
      <a
        href="https://console.pano.video/#/user/register"
        target="console"
        class="btn-get-started animated fadeInUp scrollto"
      >立即体验</a
      >
    </div>
  </section>
</template>

<script>
  export default {
    name: 'BlueBanner',
  };
</script>

<style scoped lang="less">
  .blue-banner-bottom{
    background: url("../assets/images/home/blue-banner-bottom.png") no-repeat center center;
    background-size: cover;
    width: 100%;
    height: 395px;
    display: flex;
    .content-wrap{
      margin: auto;
    }
    p{
      font-size: 50px;
      font-family: PingFang SC;
      font-weight: 500;
      color: #fff;
      text-align: center;
      margin-bottom: 0;
      letter-spacing: 5px;
      &:nth-of-type(2){
        font-size: 30px;
        margin-bottom: 45px;
      }
      &.en{
        letter-spacing: 2px;
      }
    }
    .btn-get-started {
      display: block;
      margin: auto;
    }
  }
  @media (max-width: 768px) {
    .blue-banner-bottom{
      height: 155px;
      p{
        font-size: 20px;
        font-family: PingFang SC;
        &:nth-of-type(2){
          font-size: 14px;
          margin-bottom: 20px;
        }
      }
    }
  }
</style>