<template>
  <no-ssr>
    <div v-swiper:mySwiper="swiperOption" style="width: 100%;" class="bg-gray-300 mb-20 rounded">
      <div class="swiper-wrapper" style="">
        <div class="swiper-slide" v-for="item in list" :key="item.id">
          <div class="flex justify-center">
<!--            <img-->
<!--              :src="item.imgSrc"-->
<!--              class="w-auto mb-10"-->
<!--              style="height: 352px; border-radius: 8px"-->
<!--              alt=""-->
<!--            />-->
            <ExperienceCard :img-src="item.imgSrc" />
          </div>
          <p class="text-3xl mb-5 text-center">{{item.title}}</p>
        </div>
      </div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
      <div class="swiper-pagination"></div>
    </div>
  </no-ssr>
</template>

<script>
export default {
  name: "MainSwiper",
  setup() {
    const list = [
      {
        imgSrc: "./img/experience/5c50e888096e85e49e63dfd34c1f28e.jpg",
        title: "這是一個標題，每張圖片都有一個不同的標題1"
      },
      {
        imgSrc: "./img/experience/5eb7bc1e7e0098cb834fef19022b179.jpg",
        title: "這是一個標題，每張圖片都有一個不同的標題2"
      },
      {
        imgSrc: "./img/experience/8e7d81514c945cfacc5bfc86bcdb88e.jpg",
        title: "這是一個標題，每張圖片都有一個不同的標題3"
      },
      {
        imgSrc: "./img/experience/39d44968fa828dbd627384ab4ad3c05.jpg",
        title: "這是一個標題，每張圖片都有一個不同的標題4"
      },
      {
        imgSrc: "./img/experience/a2382ebcb5a44cf4bdd32bfb484115f.jpg",
        title: "這是一個標題，每張圖片都有一個不同的標題5"
      },
      {
        imgSrc: "./img/experience/c454861d269c315e532feea0b1a485c.jpg",
        title: "這是一個標題，每張圖片都有一個不同的標題6"
      },
      {
        imgSrc: "./img/experience/d837d9ef68cd854d3f06bd3e7f02c47.jpg",
        title: "這是一個標題，每張圖片都有一個不同的標題7"
      },
      {
        imgSrc: "./img/experience/d32320dcd5a2b2174d773a0a3c105e5.jpg",
        title: "這是一個標題，每張圖片都有一個不同的標題8"
      },
      {
        imgSrc: "./img/experience/f5716207ef9611f56428b13a5415760.jpg",
        title: "這是一個標題，每張圖片都有一個不同的標題9"
      },
    ]
    const swiperOption = {
      navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next'
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: 'progressbar',
      },
      loop: true,
      slidesPerView: 1,
      centeredSlides: false,
      spaceBetween: 70,
      //autoplay: true,
      autoplay: {
        delay: 1500,
        disableOnInteraction: false,
      },
      grabCursor: true,
    }
    return {
      swiperOption,
      list,
    }
  }


};
</script>

<style lang="scss" scoped>

</style>


