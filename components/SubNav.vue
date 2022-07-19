<template>
  <div>

    <input type="checkbox" name="/" id= "side-menu-switch">

    <div class="bg-white shadow side-menu" style="">
      <div class="px-3 py-3 text-xl font-medium">
        <span class="block py-3" style=""><nuxt-link :to="localePath('/')">{{ $t('title_home') }}</nuxt-link></span>
        <span class="block py-3" style=""><nuxt-link :to="localePath('/aboutus_page')">{{ $t('title_about') }}</nuxt-link></span>
        <span class="block py-3" style=""><nuxt-link :to="localePath('/services_page')">{{ $t('title_services') }}</nuxt-link></span>
        <span class="block py-3" style=""><nuxt-link :to="localePath('/experience_page')">{{ $t('title_experience') }}</nuxt-link></span>
        <span class="block py-3" style=""><nuxt-link :to="localePath('/salesagent_page')">{{ $t('title_salesagent') }}</nuxt-link></span>
        <span class="block py-3" style=""><nuxt-link :to="localePath('/contactus_page')">{{ $t('title_contactus') }}</nuxt-link></span>
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
          <span class="text-center pr-5" style=""><nuxt-link :to="localePath('/')">{{ $t('title_home') }}</nuxt-link></span>
          <span class="text-center pr-5" style=""><nuxt-link :to="localePath('/aboutus_page')">{{ $t('title_about') }}</nuxt-link></span>
          <span class="text-center pr-5" style=""><nuxt-link :to="localePath('/services_page')">{{ $t('title_services') }}</nuxt-link></span>
        </div>
        <div class="flex-shrink flex justify-center">
          <img class="py-3" src="~/static/img/imackNoBg.png" style="width: 80px;">
        </div>
        <div class="flex-1 flex justify-between">
          <div>
            <span class="text-center pl-5" style=""><nuxt-link :to="localePath('/experience_page')">{{ $t('title_experience') }}</nuxt-link></span>
            <span class="text-center pl-5" style=""><nuxt-link :to="localePath('/salesagent_page')">{{ $t('title_salesagent') }}</nuxt-link></span>
            <span class="text-center pl-5" style=""><nuxt-link :to="localePath('/contactus_page')">{{ $t('title_contactus') }}</nuxt-link></span>
          </div>
          <div class="">
            <span class="text-center pl-3" style=""><nuxt-link :to="switchLocalePath('zh')">繁</nuxt-link></span>
            <span class="text-center pl-3" style=""><nuxt-link :to="switchLocalePath('cn')">简</nuxt-link></span>
            <span class="text-center pl-3" style=""><nuxt-link :to="switchLocalePath('en')">ENG</nuxt-link></span>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-white nav shadow" v-show="NavShow2">
      <div class="lg:hidden block container text-white">
        <label for="side-menu-switch"><img src="~/static/img/list_black.png" style="width: 32px; display: inline-block" class="my-3 mx-3"></label>
        <img src="~/static/img/imackNoBg.png" style="width: 48px; display: inline-block" class="my-3">
      </div>
      <div class="container mx-auto  lg:flex font-medium text-xl items-center hidden">
        <div class="flex-1 flex justify-end" style="">
          <span class="text-center pr-5" style=""><nuxt-link :to="localePath('/')">{{ $t('title_home') }}</nuxt-link></span>
          <span class="text-center pr-5" style=""><nuxt-link :to="localePath('/aboutus_page')">{{ $t('title_about') }}</nuxt-link></span>
          <span class="text-center pr-5" style=""><nuxt-link :to="localePath('/services_page')">{{ $t('title_services') }}</nuxt-link></span>
        </div>
        <div class="flex-shrink flex justify-center">
          <img class="py-3" src="../static/img/imackNoBg.png" style="width: 80px;">
        </div>
        <div class="flex-1 flex justify-between">
          <div>
            <span class="text-center pl-5" style=""><nuxt-link :to="localePath('/experience_page')">{{ $t('title_experience') }}</nuxt-link></span>
            <span class="text-center pl-5" style=""><nuxt-link :to="localePath('/salesagent_page')">{{ $t('title_salesagent') }}</nuxt-link></span>
            <span class="text-center pl-5" style=""><nuxt-link :to="localePath('/contactus_page')">{{ $t('title_contactus') }}</nuxt-link></span>
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

<script>
import {onMounted, onUnmounted, ref} from "vue";

export default {
  name: "SubNav",
  setup() {
    let NavShow = ref(true);
    let NavShow2 = ref(false);
    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
    })
    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })
    const handleScroll = () => {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      let offsetTop = 30
      console.log("offsetTop: ", offsetTop)
      if (scrollTop < offsetTop) {
        //console.log("top")
        NavShow.value = true;
      } else {
        //console.log("bottom")
        NavShow.value = false;
      }
      if (scrollTop <= 30) {
        NavShow.value = true;
        NavShow2.value = false;
      } else {
        NavShow.value = false;
        NavShow2.value = true;
      }
    }
    return {
      NavShow,
      NavShow2,
    }
  }
}
</script>

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
