<template>
  <header :style="{'background':'rgba(255, 255, 255,' + opacity + ')'}">
    <div class="container">
      <nav class="navbar navbar-expand-lg">
        <a class="navbar-brand" href="./index.html">
          <img
            class="img-fluid head-logo-img" v-if="theme === 'white'"
            src="../assets/images/logo-bai.svg"
            alt="高清实时音视频通信云 - 音视频通信SDK"
          />
          <img
            class="img-fluid head-logo-img" v-else
            src="../assets/images/logo-blue.svg"
            alt="高清实时音视频通信云 - 音视频通信SDK"
          />
        </a>
        <button class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbar-toggler"
                aria-controls="navbar-toggler"
                aria-expanded="false"
                aria-label="Toggle navigation"
        >
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-entypomenu"></use>
          </svg>
        </button>

        <div class="collapse navbar-collapse" id="navbar-toggler">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0"
              :class="{'theme-white':theme === 'white','theme-black':theme === 'black'}">
            <li class="nav-item">
              <a class="nav-link" href="index.html">{{$t('navBar.home')}}</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle"
                 href="#"
                 role="button"
                 data-toggle="dropdown"
                 aria-haspopup="true"
                 aria-expanded="false">
                {{$t('navBar.products')}}
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item" href="./voicecall.html">{{$t('navBar.voicecall')}}</a>
                <a class="dropdown-item" href="./videocall.html">{{$t('navBar.videocall')}}</a>
                <a class="dropdown-item" href="./whiteboard.html">
                  {{$t('navBar.whiteboard')}}
                  <svg class="icon icon-hot" aria-hidden="true">
                    <use xlink:href="#icon-hot"></use>
                  </svg>
                </a>
                <a class="dropdown-item" href="./live.html">{{$t('navBar.live')}}</a>
                <a class="dropdown-item" href="./record.html">{{$t('navBar.record')}}</a>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle"
                 href="#"
                 role="button"
                 data-toggle="dropdown"
                 aria-haspopup="true"
                 aria-expanded="false">
                {{$t('navBar.solutions')}}
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item" href="./onlineEdu.html">{{$t('navBar.onlineEducation')}}</a>
                <a class="dropdown-item" href="./socialEntertainment.html">{{$t('navBar.entertainment')}}</a>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="price.html">{{$t('navBar.pricing')}}</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle"
                 href="#"
                 role="button"
                 data-toggle="dropdown"
                 aria-haspopup="true"
                 aria-expanded="false">
                {{$t('navBar.dropdowns')}}
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item" href="./download.html#demo">{{$t('navBar.demo')}}</a>
                <a class="dropdown-item" href="./download.html#sdk">{{$t('navBar.sdk')}}</a>
                <a class="dropdown-item" href="./download.html#sample-code">{{$t('navBar.sampleCode')}}</a>
              </div>
            </li>
            <li class="nav-item" v-if="$t('navBar.developer')">
              <a class="nav-link"
                 href="https://developer.pano.video"
                 target="developer">
                {{$t('navBar.developer')}}
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="about.html">{{$t('navBar.aboutUs')}}</a>
            </li>
          </ul>
          <ul class="navbar-nav mt-2 mt-lg-0"
              :class="{'theme-white':theme === 'white','theme-black':theme === 'black'}"
          >
            <li class="nav-item">
              <a class="nav-link"
                 href="https://console.pano.video/#/user/login"
                 target="console">{{$t('navBar.login')}}
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link"
                 href="https://console.pano.video/#/user/register"
                 target="console">{{$t('navBar.signUp')}}
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
      theme:{
        type:String,
        default:'white'
      },
      opacity:{
        type:Number,
        default:1
      }
    },
  };
</script>

<style scoped lang="less">
  header {
    transition: none;
    background: rgba(255, 255, 255, 0);
    z-index: 997;
    color: #fff;
    position: fixed;
    width: 100%;
    box-sizing: border-box;
    top: 0;
    left: 0;
    .container{
      padding: 0;
    }
    .head-logo-img {
      width: 180px;
      margin-right: 16px;
      margin-top: 5px;
    }
    .navbar-toggler{
      svg{
        width: 15px;
        height: 15px;
        fill: #ccc;
      }
    }
    .theme-white .nav-item .nav-link{
      color: #fff;
    }
    .theme-black .nav-item .nav-link{
      color: #000;
    }
    .nav-item{
      .nav-link{
        position: relative;
        transition: 0.3s;
        font-size: 15px;
        &:focus,&:hover{
          color: #428bca;
        }
      }
      .dropdown-menu {
        box-shadow: 0 0 30px rgba(127, 137, 161, 0.25);
        transition: ease all 0.3s;
        border:none;
        .dropdown-item{
          padding: 10px 20px;
          font-size: 14px;
          font-weight: 500;
          text-transform: none;
          color: #103453;
          .icon-hot{
            width: 15px;
            height: 15px;
            fill:red;
          }
        }
      }
      /*> ul > li {*/
      /*  position: relative;*/
      /*  white-space: nowrap;*/
      /*  float: left;*/
      /*}*/
      /*.self-right{*/
      /*  float: right;*/
      /*}*/
      /*.drop-down {*/
      /*  &:hover{*/
      /*    > ul {*/
      /*      opacity: 1;*/
      /*      top: 100%;*/
      /*      visibility: visible;*/
      /*    }*/
      /*  }*/
      /*  > a {*/
      /*    padding-right: 15px;*/
      /*    &::after {*/
      /*      content: '\eaa0';*/
      /*      font-family: IcoFont;*/
      /*      position: absolute;*/
      /*      right: 15px;*/
      /*    }*/
      /*    &:hover::after {*/
      /*      border-top-color: #428bca;*/
      /*    }*/
      /*  }*/
      /*  ul {*/
      /*    display: block;*/
      /*    position: absolute;*/
      /*    left: 0;*/
      /*    top: 100%;*/
      /*    z-index: 99;*/
      /*    opacity: 0;*/
      /*    visibility: hidden;*/
      /*    padding: 10px 0;*/
      /*    background: #fff;*/
      /*    box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);*/
      /*    transition: ease all 0.3s;*/
      /*    a {*/
      /*      padding: 10px 20px;*/
      /*      font-size: 14px;*/
      /*      font-weight: 500;*/
      /*      text-transform: none;*/
      /*      color: #103453;*/
      /*      &:hover{*/
      /*        color: #428bca;*/
      /*      }*/
      /*    }*/
      /*  }*/
      /*  li {*/
      /*    min-width: 120px;*/
      /*    position: relative;*/
      /*    .icon-hot{*/
      /*      color: red;*/
      /*      position: absolute;*/
      /*      right: 22%;*/
      /*      top: 50%;*/
      /*      font-size: 14px;*/
      /*      transform: translateY(-50%);*/
      /*    }*/
      /*    .en{*/
      /*      right: 8%;*/
      /*    }*/
      /*  }*/
      /*  .drop-down-arrow:after {*/
      /*    position: relative;*/
      /*    top: 12px;*/
      /*    left: 10px;*/
      /*    content: ' ';*/
      /*    border: 5px solid transparent;*/
      /*  }*/
      /*  .drop-down-arrow-white:after{*/
      /*    border-top-color: #fff;*/
      /*  }*/
      /*  .drop-down-arrow-black:after{*/
      /*    border-top-color: #000;*/
      /*  }*/
      /*}*/
    }
  }

  /*@media (max-width: 1200px) and (min-width: 1000px) {*/
  /*  header {*/
  /*    .logo{*/
  /*      img {*/
  /*        display: none;*/
  /*        margin-right: 0;*/
  /*      }*/
  /*    }*/
  /*    .nav-menu a{*/
  /*      padding: 12px;*/
  /*    }*/
  /*  }*/
  /*}*/

  @media (max-width: 768px) {
    header {
      .theme-white .nav-item .nav-link,.theme-black .nav-item .nav-link{
        color: #e3f0fc;
      }
      .nav-item{
        .dropdown-menu{
          box-shadow:none;
          background-color:#1f3548;
          .dropdown-item{
            color: #e3f0fc;
          }
        }
      }
    }
    .navbar-toggler {
      z-index: 999;
      position: relative;
    }
    .navbar-collapse{
      position: absolute;
      top: 0;
      width: 100%;
      z-index: 9;
      background-color: #1f3548;;
      margin: 0 -1rem;
      padding: 0 1rem;
    }
  }
</style>
