<!--<i18n>-->
<!--  {-->
<!--    "en": {-->
<!--      "title_home": "Home",-->
<!--      "title_about": "About",-->
<!--      "title_services": "Services",-->
<!--      "title_experience": "Experience",-->
<!--      "title_salesagent": "Sales Agent",-->
<!--      "title_contactus": "Contact Us"-->
<!--    },-->
<!--    "zh": {-->
<!--      "title_home": "首頁",-->
<!--      "title_about": "關於我們",-->
<!--      "title_services": "服務",-->
<!--      "title_experience": "經驗",-->
<!--      "title_salesagent": "品牌代理",-->
<!--      "title_contactus": "聯絡我們"-->
<!--    },-->
<!--    "cn": {-->
<!--      "title_home": "首页",-->
<!--      "title_about": "关于我们",-->
<!--      "title_services": "服务",-->
<!--      "title_experience": "经验",-->
<!--      "title_salesagent": "品牌代理",-->
<!--      "title_contactus": "联络我们"-->
<!--    }-->
<!--  }-->
<!--</i18n>-->

<template>
  <div>

    <input type="checkbox" name="/" id= "side-menu-switch">

    <div class="bg-white shadow side-menu" style="">
      <div class="px-3 py-3 text-xl font-medium">
        <span class="block py-3" style=""><a @click="goAnchor(0)">{{ $t('title_home') }}</a></span>
        <span class="block py-3" style=""><a @click="goAnchor('#aboutus')">{{ $t('title_about') }}</a></span>
        <span class="block py-3" style=""><a @click="goAnchor('#services')">{{ $t('title_services') }}</a></span>
        <span class="block py-3" style=""><a @click="goAnchor('#experience')">{{ $t('title_experience') }}</a></span>
        <span class="block py-3" style=""><a @click="goAnchor('#salesagent')">{{ $t('title_salesagent') }}</a></span>
        <span class="block py-3" style=""><a @click="goAnchor('#contactus')">{{ $t('title_contactus') }}</a></span>
        <div class="block py-3">
          <span class=" " style=""><nuxt-link :to="switchLocalePath('zh')">繁</nuxt-link></span>
          <span class=" " style=""><nuxt-link :to="switchLocalePath('cn')">简</nuxt-link></span>
          <span class=" " style=""><nuxt-link :to="switchLocalePath('en')">ENG</nuxt-link></span>
        </div>
      </div>
    </div>

    <div class=" nav" v-show="NavShow">
      <div class="lg:hidden block container text-white">
        <label for="side-menu-switch"><img src="~/static/img/list.png" style="width: 32px; display: inline-block" class="my-3 mx-3"></label>
        <img src="~/static/img/imackNoBg.png" style="width: 48px; display: inline-block" class="my-3">
      </div>

      <div class="container mx-auto  lg:flex text-white font-medium text-xl items-center hidden">
        <div class="flex-1 flex justify-end" style="">
          <span class="text-center pr-5" style=""><a @click="goAnchor(0)">{{ $t('title_home') }}</a></span>
          <span class="text-center pr-5" style=""><a @click="goAnchor('#aboutus')">{{ $t('title_about') }}</a></span>
          <span class="text-center pr-5" style=""><a @click="goAnchor('#services')">{{ $t('title_services') }}</a></span>
        </div>
        <div class="flex-shrink flex justify-center">
          <img class="py-3" src="~/static/img/imackNoBg.png" style="width: 80px;">
        </div>
        <div class="flex-1 flex justify-between">
          <div>
            <span class="text-center pl-5" style=""><a @click="goAnchor('#experience')">{{ $t('title_experience') }}</a></span>
            <span class="text-center pl-5" style=""><a @click="goAnchor('#salesagent')">{{ $t('title_salesagent') }}</a></span>
            <span class="text-center pl-5" style=""><a @click="goAnchor('#contactus')">{{ $t('title_contactus') }}</a></span>
          </div>
          <div class="">
            <span class="text-center pl-3" style=""><nuxt-link :to="switchLocalePath('zh')">繁</nuxt-link></span>
            <span class="text-center pl-3" style=""><nuxt-link :to="switchLocalePath('cn')">简</nuxt-link></span>
            <span class="text-center pl-3" style=""><nuxt-link :to="switchLocalePath('en')">ENG</nuxt-link></span>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-white nav shadow" v-show="NavShow2" id="white_nav">
      <div class="lg:hidden block container text-white">
        <label for="side-menu-switch"><img src="~/static/img/list_black.png" style="width: 32px; display: inline-block" class="my-3 mx-3"></label>
        <img src="~/static/img/imackNoBg.png" style="width: 48px; display: inline-block" class="my-3">
      </div>
      <div class="container mx-auto  lg:flex font-medium text-xl items-center hidden">
        <div class="flex-1 flex justify-end" style="">
          <span class="text-center pr-5" style=""><a @click="goAnchor(0)">{{ $t('title_home') }}</a></span>
          <span class="text-center pr-5" style=""><a @click="goAnchor('#aboutus')">{{ $t('title_about') }}</a></span>
          <span class="text-center pr-5" style=""><a @click="goAnchor('#services')">{{ $t('title_services') }}</a></span>
        </div>
        <div class="flex-shrink flex justify-center">
          <img class="py-3" src="../static/img/imackNoBg.png" style="width: 80px;">
        </div>
        <div class="flex-1 flex justify-between">
          <div>
            <span class="text-center pl-5" style=""><a @click="goAnchor('#experience')">{{ $t('title_experience') }}</a></span>
            <span class="text-center pl-5" style=""><a @click="goAnchor('#salesagent')">{{ $t('title_salesagent') }}</a></span>
            <span class="text-center pl-5" style=""><a @click="goAnchor('#contactus')">{{ $t('title_contactus') }}</a></span>
          </div>
          <div class="">
            <span class="text-center pl-3" style=""><nuxt-link :to="switchLocalePath('zh')">繁</nuxt-link></span>
            <span class="text-center pl-3" style=""><nuxt-link :to="switchLocalePath('cn')">简</nuxt-link></span>
            <span class="text-center pl-3" style=""><nuxt-link :to="switchLocalePath('en')">ENG</nuxt-link></span>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>
.nav {
//height: 110px;
  position:fixed;
  top:0;
  left:0;
  width:100%;
  z-index:99;
}
a:hover {
  text-decoration:underline;
}
.side-menu {
  position:fixed;
  top:63px;
  left:0;
  transform: translateX(-130%);
  transition: 0.4s;
  z-index:98;
  width: 100%;
}
#side-menu-switch{
  position: fixed;
  top:0;
  left:0;
  opacity: 0;
}
#side-menu-switch:checked + .side-menu{
  transform: translateX(0%);
}
</style>

<script>

import {onMounted, onUnmounted, ref} from "vue";

export default {
  name: 'MainNav',
  setup() {
    let NavShow = ref(true);
    let NavShow2 = ref(false);
    onMounted(()=>{
        window.addEventListener('scroll', handleScroll)
    })
    onUnmounted(()=>{
        window.removeEventListener('scroll', handleScroll)
    })
    const handleScroll = () => {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      let offsetTop = document.querySelector('#aboutus').offsetTop - 400
      //console.log("offsetTop: ", offsetTop)
      if (scrollTop < offsetTop) {
        //console.log("top")
        NavShow.value = true;
      } else {
        //console.log("bottom")
        NavShow.value = false;
      }
      if (scrollTop <= 100) {
        NavShow.value = true;
        NavShow2.value = false;
      } else if (scrollTop > 100 && scrollTop < offsetTop) {
        NavShow.value = false;
        NavShow2.value = false;
      } else {
        document.getElementById('white_nav').classList.add("animate__animated", "animate__slideInDown", "animate__faster");
        NavShow.value = false;
        NavShow2.value = true;
      }
    }
    const goAnchor = (selector) => {
      let top = 0;
      const scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
      if (typeof selector === 'number') {
        top = selector - scrollTop;
      } else {
        const anchor = document.querySelector(selector) || {offsetTop: 0};
        top = anchor.offsetTop - scrollTop - 90;
      }
      window.scrollBy({top, behavior: 'smooth'});
    }
    return {
      NavShow,
      NavShow2,
      goAnchor,
    }
  }
}

</script>
