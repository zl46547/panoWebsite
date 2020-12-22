<template>
  <footer>
    <div class="footer-top">
      <div class="container">
        <div class="row">
          <div class="col-lg-5 col-md-5 footer-info justify-content-center">
            <img src="../assets/images/home/logo-footer.png" />
            <img class="footer-text" src="../assets/images/home/footer.svg" />
            <div class="wx-container">
              <div class="wx-text">
                <img class="wx-icon" src="../assets/images/home/wx.jpg" />
                <span>微信公众号</span>
              </div>
              <img
                class="wx-qrcode"
                src="../assets/images/wechat/pano_wechat_qrcode.d524691ddeb299d0235fd583120311a.jpg"
              />
            </div>
          </div>
          <div class="col-lg-7 col-md-7 col-sm-12 footer-links">
            <div class="row justify-content-between">
              <div class="footer-links">
                <h4>产品</h4>
                <ul>
                  <li>
                    <a href="voicecall.html">语音通话</a>
                  </li>
                  <li>
                    <a href="videocall.html">视频通话</a>
                  </li>
                  <li>
                    <a href="whiteboard.html">互动白板</a>
                  </li>
                  <li>
                    <a href="live.html">互动直播</a>
                  </li>
                  <li>
                    <a href="record.html">云端录制</a>
                  </li>
                </ul>
              </div>

              <div class="footer-links">
                <h4>开发者</h4>
                <ul>
                  <li>
                    <a href="https://developer.pano.video" target="developer"
                    >开发者中心</a
                    >
                  </li>
                  <li>
                    <a
                      href="download.html#demo"
                      target="developer"
                    >Demo 体验</a
                    >
                  </li>
                  <li>
                    <a
                      href="download.html#sdk"
                      target="developer"
                    >SDK下载</a
                    >
                  </li>
                  <li>
                    <a
                      href="download.html/#sample-code"
                      target="developer"
                    >示例代码</a
                    >
                  </li>
                  <li>
                    <a href="https://github.com/PanoVideo" target="_blank"
                    >GitHub社区</a
                    >
                  </li>
                </ul>
              </div>

              <div class="footer-links">
                <h4>About</h4>
                <ul>
                  <li>
                    <a
                      href="http://developer.pano.video/agreements/terms-of-service"
                      target="developer"
                    >服务条款</a
                    >
                  </li>
                  <li>
                    <a href="about.html">关于我们</a>
                  </li>
                </ul>
              </div>
              <div class="footer-links">
                <h4>Language</h4>
                <ul>
                  <li>
                    <a href="./zh">中文</a
                    >
                  </li>
                  <li>
                    <a href="./en">English</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="copyright">
        <a href="https://beian.miit.gov.cn" target="_blank">
          浙ICP备20002645号-1
        </a>
        Copyright &copy;2020 <strong><span>拍乐云</span></strong
      >. All Rights Reserved
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'PanoFooter',
  };
</script>

<style scoped lang="less">
  footer {
    background: #121A34;
    padding: 0 0 30px 0;
    color: #54596A;
    font-size: 16px;
    .footer-top {
      background: #08102B;
      padding: 150px 0 30px 0;
      .footer-info {
        margin-top: -30px;
        .logo-footer{
          width: 258px;
          display: block;
        }
        .footer-text{
          width: 326px;
          display: block;
          margin: 30px 0 40px;
        }
        .footer-text-en{
          width: 360px;
        }
        p {
          margin: 30px 0 40px;
          line-height: 2;
        }
        .wx-container{
          display: flex;
          align-items: flex-start;
          cursor: pointer;
          &:hover{
            .wx-text{
              color: #fff;
            }
            .wx-qrcode{
              width: 100px;
            }
          }
          .wx-text{
            display: flex;
            align-items: center;
            cursor: pointer;
          }
          .wx-icon{
            width: 31px;
            height: 31px;
            display: inline-block;
            margin-right: 12px;
          }
          .wx-qrcode{
            width: 0;
            height: 100px;
            margin-left: 10px;
            transition: all .5s ease-in-out;
          }
        }
      }
      h4 {
        font-weight: 600;
        color: #fff;
        position: relative;
        padding-bottom: 12px;
        font-size: 20px;
      }
      .footer-links {
        margin-bottom: 30px;
        ul {
          list-style: none;
          padding: 0;
          margin: 0;
          i {
            padding-right: 2px;
            font-size: 18px;
            line-height: 1;
          }
          li {
            padding: 10px 0;
            display: flex;
            align-items: center;
            &:first-child {
              padding-top: 0;
            }
          }
          a {
            transition: 0.3s;
            display: inline-block;
            line-height: 1;
            color: #54596A;
            &:hover {
              color: #fff;
            }
          }
        }
      }
    }
    .copyright {
      text-align: center;
      padding-top: 30px;
      a{
        color: #54596A;
      }
    }
  }
  @media (max-width: 768px) {
    footer {
      padding: 0 0 10px 0;
      font-size: 14px;
      .row{
        margin-right: 0;
        margin-left: 0;
      }
      .footer-top {
        padding: 50px 0 15px 0;
        .footer-info {
          margin-top: -15px;
          margin-bottom: 15px;
          img{
            width: 164px;
          }
          .logo-footer{
            width: 128px;
          }
          .footer-text{
            width: 320px;
            margin: 15px 0 20px;
          }
          p {
            margin: 15px 0 20px;
          }
          .wx-container{
            .wx-icon{
              width: 20px;
              height: 20px;
              margin-right: 6px;
            }
            .wx-qrcode{
              width: 100px;
            }
          }
        }
        h4 {
          padding-bottom: 6px;
          font-size: 16px;
        }
        .footer-links {
          margin-bottom: 15px;
          ul {
            i {
              font-size: 14px;
            }
            li {
              padding: 5px 0;
            }
          }
        }
      }
      .copyright {
        padding-top: 15px;
      }
    }
  }
</style>