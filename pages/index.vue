<template>

  <div id="content">

    <MainNav />

    <div class="bg-gray-300" style="">
      <section class="pb-24  bg-cover bg-bottom bg-fixed clip h-5/6" :style="{'background-image': 'linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.6),rgba(0,0,0,0.3)), url(' + require('@/static/img/network-2402637.jpg') + ')'}">
        <div class="container m-auto" style="width: 100%; height: 100%;">
          <img src="@/static/img/imack_whiteV2.png" class="lg:w-2/5 w-4/5 wow animate__fadeInDown animate__slow" style="margin: auto; display: block; padding-top: 150px;">
        </div>
      </section>
    </div>

    <section class="lg:py-24 py-14 bg-gray-300 " id="aboutus">
      <div class="container mx-auto max-w-5xl">
        <h2 class="text-4xl text-center mb-10 font-light wow animate__fadeInDown animate__slow">{{ $t('title_about') }}</h2>
        <p class="leading-relaxed text-center font-semibold lg:text-xl text-sm px-3 mb-10 wow animate__fadeInDown animate__slow">艾克方案有限公司成立於2013年，與天網資料科技(澳門)有限公司為同一集團旗下的子公司，主要業務為一站式先進數據中心規劃，實施交付，維護保養及弱電項目相關的安裝工程，
          同時我們與業界領導者一起攜手為澳門各類客戶提供IT弱電系統、中央控制系統，大型視訊牆影顯示系統，多媒體簡報系統及公共廣播系統等方案。</p>
        <div class="flex justify-center">
          <button class="text-3xl text-white bg-gray-600 p-3 px-6 rounded wow animate__fadeInDown animate__slow"><nuxt-link :to="localePath('/aboutus_page')">More</nuxt-link></button>
        </div>
      </div>
    </section>

    <section class="pt-24 pb-10" id="services">
      <div class="container mx-auto">
        <h2 class="text-4xl text-center mb-14 font-light wow animate__fadeIn animate__slow">{{ $t('title_services') }}</h2>
        <div class="grid lg:grid-cols-2 lg:gap-3 text-white">
          <div class="bg-gray-300 lg:py-28 py-20 bg-cover wow animate__fadeIn animate__slow" :style="{'background-image': 'linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.6)), url(' + require('@/static/img/services/pexels-manuel-geissinger-325229.jpg') + ')', 'height': '320px'}">
            <div class="container mx-auto px-6" >
              <h2 class="text-2xl text-center mb-6 font-semibold ">數據中心弱電工程</h2>
              <p class="leading-relaxed text-center font-semibold">
                提供高效可靠、綠色XX、智能打理、XXXX的數據中心方案，專業弱電團隊XX設計XX系統及XX重整
              </p>
            </div>
          </div>
          <div class="bg-gray-300 py-28 bg-cover wow animate__fadeIn animate__slow" :style="{'background-image': 'linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.6)), url(' + require('@/static/img/services/pexels-matej-716661.jpg') + ')', 'height': '320px'}">
            <div class="container mx-auto">
              <h2 class="text-2xl text-center mb-6 font-semibold ">實施工程</h2>
              <p class="leading-relaxed text-center font-semibold">
                建築物設施之安裝及補修工程。包括各項室內裝修工程，安裝CCTV、XXX及門禁系統等。
              </p>
            </div>
          </div>
          <div class="bg-gray-300 py-28 bg-cover wow animate__fadeIn animate__slow" :style="{'background-image': 'linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.6)), url(' + require('@/static/img/services/pexels-dzenina-lukac-754258.jpg') + ')', 'height': '320px'}">
            <div class="container mx-auto">
              <h2 class="text-2xl text-center mb-6 font-semibold ">多媒體及影音系統</h2>
              <p class="leading-relaxed text-center font-semibold">
                提供各項影音設備及安裝服務，曾為政府機構安裝大型LED視訊牆影顯示系統。
              </p>
            </div>
          </div>
          <div class="bg-gray-300 py-28 bg-cover wow animate__fadeIn animate__slow" style="height: 320px;" :style="{'background-image': 'linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.6)), url(' + require('@/static/img/services/pexels-cottonbro-5483071.jpg') + ')', 'height': '320px'}">
            <div class="container mx-auto">
              <h2 class="text-2xl text-center mb-6 font-semibold ">維修保養</h2>
              <p class="leading-relaxed text-center font-semibold ">
                提供專業資訊技術員駐場支援服務。
              </p>
            </div>
          </div>
        </div>
        <div class="flex justify-center mt-7">
          <button class="text-3xl text-white bg-gray-600 p-3 px-6 rounded wow animate__fadeIn animate__slow"><nuxt-link :to="localePath('/services_page')">More</nuxt-link></button>
        </div>
      </div>
    </section>

    <section class="py-24" id="experience">
      <div class="container mx-auto">
        <h2 class="text-4xl text-center mb-14 font-light wow animate__fadeInUp animate__slow">{{ $t('title_experience') }}</h2>
        <div class="grid lg:grid-cols-3">
          <ExperienceCard class="wow animate__fadeInUp animate__slow" img-src="./img/experience/5c50e888096e85e49e63dfd34c1f28e.jpg" />
          <ExperienceCard class="wow animate__fadeInUp animate__slow" img-src="./img/experience/5eb7bc1e7e0098cb834fef19022b179.jpg" />
          <ExperienceCard class="wow animate__fadeInUp animate__slow" img-src="./img/experience/8e7d81514c945cfacc5bfc86bcdb88e.jpg" />
          <ExperienceCard class="wow animate__fadeInUp animate__slow" img-src="./img/experience/39d44968fa828dbd627384ab4ad3c05.jpg" />
          <ExperienceCard class="wow animate__fadeInUp animate__slow" img-src="./img/experience/a2382ebcb5a44cf4bdd32bfb484115f.jpg" />
          <ExperienceCard class="wow animate__fadeInUp animate__slow" img-src="./img/experience/c454861d269c315e532feea0b1a485c.jpg" />
          <ExperienceCard class="wow animate__fadeInUp animate__slow" img-src="./img/experience/d837d9ef68cd854d3f06bd3e7f02c47.jpg" />
          <ExperienceCard class="wow animate__fadeInUp animate__slow" img-src="./img/experience/d32320dcd5a2b2174d773a0a3c105e5.jpg" />
          <ExperienceCard class="wow animate__fadeInUp animate__slow" img-src="./img/experience/f5716207ef9611f56428b13a5415760.jpg" />
        </div>
        <div class="flex justify-center">
          <button class="text-3xl text-white bg-gray-600 p-3 px-6 rounded wow animate__fadeInUp animate__slow"><nuxt-link :to="localePath('/experience_page')">More</nuxt-link></button>
        </div>
      </div>
    </section>

    <section class="pb-24" id="salesagent">
      <div class="container mx-auto">
        <h2 class="text-4xl text-center mb-14 font-light wow animate__bounceIn animate__slow">{{ $t('title_salesagent') }}</h2>
        <div class="flex justify-center mb-10 wow animate__bounceIn animate__slow">
          <img src="@/static/img/salesagent/lux.png" style="width: 200px;"/>
        </div>
        <div class="flex justify-center">
          <button class="text-3xl text-white bg-gray-600 p-3 px-6 rounded wow animate__bounceIn animate__slow"><nuxt-link :to="localePath('/salesagent_page')">More</nuxt-link></button>
        </div>
      </div>
    </section>

    <section id="contactus" class="py-24 bg-no-repeat bg-cover bg-fixed" :style="{'background-image': 'linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.6)), url(' + require('@/static/img/contactus/pexels-fauxels-3183127.jpg') + ')'}">
      <div class="container mx-auto max-w-4xl">
        <h2 class="text-4xl text-center mb-14 font-light text-white wow animate__headShake animate__slow">{{ $t('title_contactus') }}</h2>
        <div class="lg:flex" style="">
          <l-map
            ref="myMap"
            :zoom="zoom"
            :center="center"
            :options="options"
            style="height: 400px; width: 90vw; z-index: 0;"
            class="lg:flex-1 mx-auto lg:mx-3 mb-10 "
          >
            <l-tile-layer :url="url" :attribution="attribution" />
<!--            <l-marker ref="location" :lat-lng="center">-->
<!--              <l-popup>-->
<!--                艾克方案有限公司-->
<!--              </l-popup>-->
<!--            </l-marker>-->
          </l-map>
          <div class="lg:flex-1 mx-3 text-white text-lg font-medium animate__headShake animate__slow">
            <ul>
              <li class="pb-1 font-semibold"><img src="@/static/img/contactus/location-pin.png" class="pb-1 pr-3" style="display: inline;">澳門宋玉生廣場258號建興龍廣場16樓S座</li>
              <li class="py-1 font-semibold"><img src="@/static/img/contactus/clock-circular-outline.png" class="pb-1 pr-3" style="display: inline;">09:00-18:30</li>
              <li class="py-1 font-semibold"><img src="@/static/img/contactus/smartphone-call.png" class="pb-1 pr-3" style="display: inline;">+85328701110</li>
              <li class="py-1 font-semibold"><img src="@/static/img/contactus/email.png" class="pb-1 pr-3" style="display: inline;">info@imack.com.mo</li>
              <li class="py-1 font-semibold"><img src="@/static/img/contactus/instagram.png" class="pb-1 pr-3" style="display: inline;"><a href="https://www.instagram.com/imack_solutions/">imack_solutions(點擊進入IG)</a></li>
            </ul>
          </div>
        </div>
        <div class="flex justify-center">
          <button class="text-3xl text-white bg-gray-600 p-3 px-6 rounded animate__headShake animate__slow"><nuxt-link :to="localePath('/contactus_page')">More</nuxt-link></button>
        </div>
      </div>
    </section>

    <MainFooter />

  </div>

</template>

<style>
.clip {
  clip-path: polygon(0% 0%, 100% 0%, 100% 90%, 50% 100%, 0% 90%);
}
*, html {
  scroll-behavior: smooth !important;
}
</style>

<script>

import {nextTick, onMounted, onUnmounted} from "vue";

export default {
  name: 'IndexPage',
  setup() {
    onMounted(()=>{
      nextTick(()=>{
        if (process.client) {  // 在页面mounted生命周期里面 根据环境实例化WOW
          const { WOW } = require("wowjs")
          new WOW({animateClass: 'animate__animated', mobile: 'false'}).init()
        }
      })
    })
    let zoom = 19
    let center = [22.18929,113.55135]
    let options = {
      //zoomControl: false,
    }
    let url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    let attribution = `© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors`
    return {
      zoom,
      center,
      options,
      url,
      attribution,
    }
  }
}
</script>
