<template>
  <div class="nav">
    <img class="logo" src="https://www.pep.com.cn/images/logo_pep2023.png" alt="">
  </div>
  <a-carousel arrows >
    <template #prevArrow>
      <div class="custom-slick-arrow" style="left: 10px; z-index: 1">
        <left-circle-outlined />
      </div>
    </template>
    <template #nextArrow>
      <div class="custom-slick-arrow" style="right: 10px">
        <right-circle-outlined />
      </div>
    </template>
    <div class="img img1" @click="nav(1)"></div>
    <div class="img img2" @click="nav(2)"></div>
    <div class="img img3" @click="nav(3)"></div>
    <div class="img img4" @click="nav(4)"></div>
    <div class="img img5" @click="nav(5)"></div>
  </a-carousel>
</template>
<script lang="ts" setup>
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons-vue';
import { useRouter } from 'vue-router'
const router = useRouter()
const nav = (num: number) => {
  router.push(`/content${num}`)
}
</script>
<style scoped>
/* For demo */
:deep(.slick-slide) {
  text-align: center;
  height: 100vh;
  /* line-height: 160px; */
  background: #ccc;
  overflow: hidden;
}

:deep(.slick-arrow.custom-slick-arrow) {
  width: 50px;
  height: 50px;
  font-size: 50px;
  color: #fff;
  background-color: rgba(31, 45, 61, 0.11);
  transition: ease all 0.3s;
  opacity: 0.3;
  z-index: 1;
}
:deep(.slick-arrow.custom-slick-arrow:before) {
  display: none;
}
:deep(.slick-arrow.custom-slick-arrow:hover) {
  color: #fff;
  opacity: 0.5;
}

:deep(.slick-slide h3) {
  color: #fff;
}

.img {
  height: 100vh;
}

.img1 {
  background: url('https://www.pep.com.cn/syzt/zdzt/202312/W020240123545065584117.jpg') no-repeat center;
  background-size: cover
}

.img2 {
  background: url('https://www.pep.com.cn/syzt/zdzt/202212/W020231226385565733682.jpg') no-repeat center;
  background-size: cover
}

.img3 {
  background: url('https://www.pep.com.cn//syzt/zdzt/202304/W020231227337259697830.jpg') no-repeat center;
  background-size: cover
}

.img4 {
  background: url('https://www.pep.com.cn/syzt/zdzt/202210/W020231226393874180134.jpg') no-repeat center;
  background-size: cover
}

.img5 {
  background: url('https://www.pep.com.cn/syzt/zdzt/202109/W020231227332342577075.jpg') no-repeat center;
  background-size: cover
}

.nav {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 10vh;
  background: linear-gradient(to bottom, #333, transparent);
  z-index: 100;
}

.logo {
  margin: 2vh 4vw;
  height: 4vh;
}
</style>
