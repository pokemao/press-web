<template>
  <div class="bg">
    <div class="container">
      <div class="kbs">
        <div class="title">
          <div class="bg_title">
            <h5>领导讲话</h5>
          </div>
        </div>
        <div class="content_kbs">
          讲的真好
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.bg {
  padding-bottom: 180px;
  position: relative;
  background: url("https://www.pep.com.cn/xw/zt/ss/xdb/images/P020210730351148403830.jpg")
    top center no-repeat;
  background-size: cover;
  padding-top: 504px;
  width: 100%;
  max-width: 1920px;
  min-width: 1080px;
}
.container {
  width: 1080px;
  margin: 0 auto;
}
.kbs {
  margin: 40px 0;
}
.title {
  padding-bottom: 36px;
  border-bottom: 1px solid #ad0009;
  margin-bottom: 40px;
  position: relative;
}
.bg_title {
  width: 224px;
  height: 76px;
  padding-top: 26px;
  margin: 0 auto;
  background: url("https://www.pep.com.cn/images/bg_title_xdb2021.png");
}
.bg_title h5 {
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  color: #ae0009;
  margin-left: 20px;
  height: 44px;
  line-height: 44px;
}
.content_kbs {
    text-align: center;
}
</style>
