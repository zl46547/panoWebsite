<template>
  <header>
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="./index.html">
          <img
            class="img-fluid head-logo-img"
            src="../assets/images/logo-bai.svg"
            alt="高清实时音视频通信云 - 音视频通信SDK"
          />
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
              <a class="nav-link" href="index.html">首页</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle"
                 href="#"
                 role="button"
                 data-toggle="dropdown"
                 aria-haspopup="true"
                 aria-expanded="false">
                产品
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item" href="./voicecall.html">语音通话</a>
                <a class="dropdown-item" href="./videocall.html">视频通话</a>
                <a class="dropdown-item" href="./whiteboard.html">
                  互动白板<span class="icon iconfont icon-hot"></span>
                </a>
                <a class="dropdown-item" href="./live.html">互动直播</a>
                <a class="dropdown-item" href="./record.html">云端录制</a>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle"
                 href="#"
                 role="button"
                 data-toggle="dropdown"
                 aria-haspopup="true"
                 aria-expanded="false">
                解决方案
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item" href="./onlineEdu.html">在线教育</a>
                <a class="dropdown-item" href="./socialEntertainment.html">社交泛娱乐</a>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="price.html">价格</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle"
                 href="#"
                 role="button"
                 data-toggle="dropdown"
                 aria-haspopup="true"
                 aria-expanded="false">
                下载
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item" href="./download.html#demo">Demo体验</a>
                <a class="dropdown-item" href="./download.html#sdk">SDK下载</a>
                <a class="dropdown-item" href="./download.html#sample-code">示例代码</a>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link"
                 href="https://developer.pano.video"
                 target="developer">
                开发者中心
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="about.html">关于我们</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle"
                 href="#"
                 role="button"
                 data-toggle="dropdown"
                 aria-haspopup="true"
                 aria-expanded="false">
                多语言
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item" href="./index.html#demo">中文</a>
                <a class="dropdown-item" href="./en/index.html">English</a>
              </div>
            </li>
          </ul>
          <ul class="navbar-nav mt-2 mt-lg-0">
            <li class="nav-item">
              <a class="nav-link"
                 href="https://console.pano.video/#/user/login"
                 target="console">登录
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link"
                 href="https://console.pano.video/#/user/register"
                 target="console">免费注册
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'PanoHeader',
    props: {
      position: String,
    },
  };
</script>

<style scoped lang="less">
  header {
    transition: none;
    background: rgba(255, 255, 255, 0);
    z-index: 997;
    color: #fff;
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;

    .head-logo-img {
      width: 180px;
      margin-right: 16px;
      margin-top: 5px;
    }

    /*&.header-scrolled {*/
    /*  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);*/
    /*}*/
  }
</style>
