<template>
  <div class="message">
    <div class="container">
      <div class="row">
        <div class="messageLeft">
          <div class="wrap-infor">
            <ul>
              <li class="mg-types">
                <i class="icon-remind"></i>
                <div class="mg-cont">
                  <div class="mg-title">
                    <span class="mg-title1">系统消息</span>
                  </div>
                </div>
              </li>
              <li class="mg-types">
                <i class="icon-society"></i>
                <div class="mg-cont">
                  <div class="mg-title">
                    <span class="mg-titel">社区消息</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="messageRight">
          <div class="mg-select">
            <span>系统公告</span>
          </div>
          <div class="mg-show">
            <ul>
              <li>
                <div class="infor-show">你好</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.message {
  color: #333;
  background-color: #f5f5f5;
  height: 460px;
  margin-bottom: 30px;
  .container {
    width: 870px;
    margin-left: auto;
    margin-right: auto;
    .row {
      border: 1px solid #fff;
      display: flex;
      .messageLeft {
        width: 300px;
        height: 460px;
        border-right: 1px solid #f5f5f5;
        background-color: #f3f9fe;
        //   background-color: #e0f0fd;
        .mg-types {
          height: 60px;
          line-height: 60px;
          border-bottom: 1px solid #fff;
          .mg-cont {
            width: 296px;
            .mg-title {
              width: 200px;
              margin-left: auto;
              margin-right: auto;
              text-align: center;
            }
             &:hover {
          background-color: #e0f0fd;
        }
          }
        }
      }
      .messageRight {
        width: 568px;
        .mg-select {
          background-color: #fffcf2;
          border: 1px solid #f8ecca;
          height: 47px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .mg-show {
          background-color: #fff;
          height: 410px;
        }
      }
    }
  }
}
</style>
