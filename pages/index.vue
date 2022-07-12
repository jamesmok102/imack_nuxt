<template>

  <div id="content">

    <MainNav home="#" about_us="#aboutus" services="#services" experience="#experience" sales_agent="#salesagent" contact_us="#contactus"/>

<!--    <input type="checkbox" name="/" id= "side-menu-switch">-->

<!--    <div class="bg-white shadow side-menu" style="">-->
<!--      <div class="px-3 py-3 text-xl font-medium">-->
<!--        <span class="block py-3" style=""><a href="#">HOME</a></span>-->
<!--        <span class="block py-3" style=""><a href="#aboutus">ABOUT</a></span>-->
<!--        <span class="block py-3" style=""><a href="#services">SERVICES</a></span>-->
<!--        <span class="block py-3" style=""><a href="#experience">EXPERIENCE</a></span>-->
<!--        <span class="block py-3" style=""><a href="#salesagent">SALES AGENT</a></span>-->
<!--        <span class="block py-3" style=""><a href="#contactus">CONTACT US</a></span>-->
<!--      </div>-->
<!--    </div>-->

<!--    <div class=" nav" v-show="NavShow">-->
<!--      <div class="lg:hidden block container text-white">-->
<!--        <label for="side-menu-switch"><img src="@/static/list.png" style="width: 32px; display: inline-block" class="my-3 mx-3"></label>-->
<!--        <img src="@/static/imackNoBg.png" style="width: 48px; display: inline-block" class="my-3">-->
<!--      </div>-->

<!--      <div class="container mx-auto max-w-5xl lg:flex text-white font-medium text-xl items-center hidden">-->
<!--        <div class="flex-1 flex justify-end" style="">-->
<!--          <span class="text-center pr-5" style=""><a href="#">HOME</a></span>-->
<!--          <span class="text-center pr-5" style=""><a href="#aboutus">ABOUT</a></span>-->
<!--          <span class="text-center pr-5" style=""><a href="#services">SERVICES</a></span>-->
<!--        </div>-->
<!--        <div class="flex-shrink flex justify-center">-->
<!--          <img class="py-3" src="@/static/imackNoBg.png" style="width: 80px;">-->
<!--        </div>-->
<!--        <div class="flex-1 flex">-->
<!--          <span class="text-center pl-5" style=""><a href="#experience">EXPERIENCE</a></span>-->
<!--          <span class="text-center pl-5" style=""><a href="#salesagent">SALES AGENT</a></span>-->
<!--          <span class="text-center pl-5" style=""><a href="#contactus">CONTACT US</a></span>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->

<!--    <div class="bg-white nav shadow" v-show="NavShow2">-->
<!--      <div class="lg:hidden block container text-white">-->
<!--        <label for="side-menu-switch"><img src="@/static/list_black.png" style="width: 32px; display: inline-block" class="my-3 mx-3"></label>-->
<!--        <img src="@/static/imackNoBg.png" style="width: 48px; display: inline-block" class="my-3">-->
<!--      </div>-->
<!--      <div class="container mx-auto max-w-5xl lg:flex font-medium text-xl items-center hidden">-->
<!--        <div class="flex-1 flex justify-end" style="">-->
<!--          <span class="text-center pr-5" style=""><a href="#">HOME</a></span>-->
<!--          <span class="text-center pr-5" style=""><a href="#aboutus">ABOUT</a></span>-->
<!--          <span class="text-center pr-5" style=""><a href="#services">SERVICES</a></span>-->
<!--        </div>-->
<!--        <div class="flex-shrink flex justify-center">-->
<!--          <img class="py-3" src="../static/imackNoBg.png" style="width: 80px;">-->
<!--        </div>-->
<!--        <div class="flex-1 flex ">-->
<!--          <span class="	text-center pl-5" style=""><a href="#experience">EXPERIENCE</a></span>-->
<!--          <span class="	text-center pl-5" style=""><a href="#salesagent">SALES AGENT</a></span>-->
<!--          <span class="	text-center pl-5" style=""><a href="#contactus">CONTACT US</a></span>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->



    <div class="bg-gray-300" style="">
      <section class="pb-24  bg-cover bg-bottom bg-fixed clip h-5/6" :style="{'background-image': 'linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.6),rgba(0,0,0,0.3)), url(' + require('@/static/network-2402637.jpg') + ')'}">
        <div class="container m-auto" style="width: 100%; height: 100%;">
          <img src="../static/imack_whiteV2.png" class="lg:w-2/5 w-4/5" style="margin: auto; display: block; padding-top: 150px;">
        </div>
      </section>
    </div>

    <section class="lg:py-24 py-14 bg-gray-300 " id="aboutus">
      <div class="container mx-auto max-w-5xl">
        <h2 class="text-4xl text-center mb-10 font-light">About us</h2>
        <p class="leading-relaxed text-center font-semibold lg:text-xl text-sm px-3 mb-10">艾克方案有限公司成立於2013年，與天網資料科技(澳門)有限公司為同一集團旗下的子公司，主要業務為一站式先進數據中心規劃，實施交付，維護保養及弱電項目相關的安裝工程，
          同時我們與業界領導者一起攜手為澳門各類客戶提供IT弱電系統、中央控制系統，大型視訊牆影顯示系統，多媒體簡報系統及公共廣播系統等方案。</p>
        <div class="flex justify-center">
          <button class="text-3xl text-white bg-gray-600 p-3 px-6 rounded"><nuxt-link to="/aboutus">More</nuxt-link></button>
        </div>
      </div>
    </section>

    <section class="pt-24 pb-10" id="services">
      <div class="container mx-auto">
        <h2 class="text-4xl text-center mb-14 font-light">Services</h2>
        <div class="grid lg:grid-cols-2 lg:gap-3 text-white">
          <div class="bg-gray-300 lg:py-28 py-20 bg-cover " :style="{'background-image': 'linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.6)), url(' + require('@/static/pexels-manuel-geissinger-325229.jpg') + ')', 'height': '320px'}">
            <div class="container mx-auto px-6" >
              <h2 class="text-2xl text-center mb-6 font-semibold">數據中心弱電工程</h2>
              <p class="leading-relaxed text-center font-semibold">
                提供高效可靠、綠色XX、智能打理、XXXX的數據中心方案，專業弱電團隊XX設計XX系統及XX重整
              </p>
            </div>
          </div>
          <div class="bg-gray-300 py-28 bg-cover" :style="{'background-image': 'linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.6)), url(' + require('@/static/pexels-matej-716661.jpg') + ')', 'height': '320px'}">
            <div class="container mx-auto">
              <h2 class="text-2xl text-center mb-6 font-semibold">實施工程</h2>
              <p class="leading-relaxed text-center font-semibold">
                建築物設施之安裝及補修工程。包括各項室內裝修工程，安裝CCTV、XXX及門禁系統等。
              </p>
            </div>
          </div>
          <div class="bg-gray-300 py-28 bg-cover" :style="{'background-image': 'linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.6)), url(' + require('@/static/pexels-dzenina-lukac-754258.jpg') + ')', 'height': '320px'}">
            <div class="container mx-auto">
              <h2 class="text-2xl text-center mb-6 font-semibold">多媒體及影音系統</h2>
              <p class="leading-relaxed text-center font-semibold">
                提供各項影音設備及安裝服務，曾為政府機構安裝大型LED視訊牆影顯示系統。
              </p>
            </div>
          </div>
          <div class="bg-gray-300 py-28 bg-cover" style="height: 320px;" :style="{'background-image': 'linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.6)), url(' + require('@/static/pexels-cottonbro-5483071.jpg') + ')', 'height': '320px'}">
            <div class="container mx-auto">
              <h2 class="text-2xl text-center mb-6 font-semibold">維修保養</h2>
              <p class="leading-relaxed text-center font-semibold">
                提供專業資訊技術員駐場支援服務。
              </p>
            </div>
          </div>
        </div>
        <div class="flex justify-center mt-7">
          <button class="text-3xl text-white bg-gray-600 p-3 px-6 rounded"><nuxt-link to="/services">More</nuxt-link></button>
        </div>
      </div>
    </section>

    <section class="py-24" id="experience">
      <div class="container mx-auto">
        <h2 class="text-4xl text-center mb-14 font-light">Experience</h2>
        <div class="grid lg:grid-cols-3">
<!--          <img src="https://via.placeholder.com/250">-->
<!--          <img src="https://via.placeholder.com/250">-->
<!--          <img src="https://via.placeholder.com/250">-->
<!--          <img src="https://via.placeholder.com/250">-->
<!--          <img src="https://via.placeholder.com/250">-->
<!--          <img src="https://via.placeholder.com/250">-->
<!--          <img src="https://via.placeholder.com/250">-->
<!--          <img src="https://via.placeholder.com/250">-->
<!--          <img src="https://via.placeholder.com/250">-->
<!--          <img src="https://via.placeholder.com/250">-->
          <ExperienceCard img-src="./experience/5c50e888096e85e49e63dfd34c1f28e.jpg" />
          <ExperienceCard img-src="./experience/5eb7bc1e7e0098cb834fef19022b179.jpg" />
          <ExperienceCard img-src="./experience/8e7d81514c945cfacc5bfc86bcdb88e.jpg" />
          <ExperienceCard img-src="./experience/39d44968fa828dbd627384ab4ad3c05.jpg" />
          <ExperienceCard img-src="./experience/a2382ebcb5a44cf4bdd32bfb484115f.jpg" />
          <ExperienceCard img-src="./experience/c454861d269c315e532feea0b1a485c.jpg" />
          <ExperienceCard img-src="./experience/d837d9ef68cd854d3f06bd3e7f02c47.jpg" />
          <ExperienceCard img-src="./experience/d32320dcd5a2b2174d773a0a3c105e5.jpg" />
          <ExperienceCard img-src="./experience/f5716207ef9611f56428b13a5415760.jpg" />
        </div>
        <div class="flex justify-center">
          <button class="text-3xl text-white bg-gray-600 p-3 px-6 rounded"><nuxt-link to="/experience_page">More</nuxt-link></button>
        </div>
      </div>
    </section>

    <section class="pb-24" id="salesagent">
      <div class="container mx-auto">
        <h2 class="text-4xl text-center mb-14 font-light">Sales Agent</h2>
        <div class="flex justify-center mb-10">
          <img src="@/static/lux.png" style="width: 200px;"/>
        </div>
        <div class="flex justify-center">
          <button class="text-3xl text-white bg-gray-600 p-3 px-6 rounded"><nuxt-link to="/salesagent">More</nuxt-link></button>
        </div>
      </div>
    </section>

    <section id="contactus" class="py-24 bg-no-repeat bg-cover bg-fixed" :style="{'background-image': 'linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.6)), url(' + require('@/static/pexels-fauxels-3183127.jpg') + ')'}">
      <div class="container mx-auto max-w-4xl">
        <h2 class="text-4xl text-center mb-14 font-light text-white">Contact Us</h2>
        <div class="lg:flex">
          <!--<div class="lg:flex-1 mx-3 mb-10">
            <input type="text" class="h-10 pl-2 rounded-sm" placeholder="Name" style="display: block; width: 100%; margin-bottom: 20px;">
            <input type="text" class="h-10 pl-2 rounded-sm" placeholder="Email" style="display: block; width: 100%; margin-bottom: 20px;">
            <input type="text" class="h-10 pl-2 rounded-sm" placeholder="Phone" style="display: block; width: 100%; margin-bottom: 20px;">
            <textarea rows="6" placeholder="Message" class="pl-2 pt-2 rounded-sm" style="display: block; width: 100%; margin-bottom: 20px;"></textarea>
            <button class="px-7 py-2 text-white font-medium text-lg" style="background-color: #876924;">SUBMIT</button>
          </div>-->
          <l-map
            ref="myMap"
            :zoom="zoom"
            :center="center"
            :options="options"
            style="height: 400px; width: 90vw; z-index: 0;"
            class="lg:flex-1 mx-auto lg:mx-3 mb-10"
          >
            <l-tile-layer :url="url" :attribution="attribution" />
            <l-marker ref="location" :lat-lng="center">
              <l-popup>
                艾克方案有限公司
              </l-popup>
            </l-marker>
          </l-map>
          <div class="lg:flex-1 mx-3 text-white text-lg font-medium">
            <ul>
              <li class="pb-1 font-semibold"><img src="@/static/location-pin.png"  class="pb-1 pr-3" style="display: inline;">澳門宋玉生廣場258號建興龍廣場16樓S座</li>
              <li class="py-1 font-semibold"><img src="@/static/clock-circular-outline.png"  class="pb-1 pr-3" style="display: inline;">09:00-18:30</li>
              <li class="py-1 font-semibold"><img src="@/static/smartphone-call.png"  class="pb-1 pr-3" style="display: inline;">+85328701110</li>
              <li class="py-1 font-semibold"><img src="@/static/email.png"  class="pb-1 pr-3" style="display: inline;">info@imack.com.mo</li>
              <li class="py-1 font-semibold"><img src="@/static/instagram.png"  class="pb-1 pr-3" style="display: inline;"><a href="https://www.instagram.com/imack_solutions/">imack_solutions(點擊進入IG)</a></li>
            </ul>
          </div>

        </div>
      </div>
    </section>

<!--    <footer class="py-20">-->
<!--      <div class="container mx-auto max-w-5xl font-semibold">-->
<!--        <div class="lg:flex">-->
<!--          <div class="lg:flex-1 lg:mx-10">-->
<!--            <img src="@/static/imack_V2.png" style="width: 150px;" class="mx-auto mb-3">-->
<!--          </div>-->
<!--          <div class="flex-1 font-medium text-lg text-center lg:text-left mb-3">-->
<!--            <p class="text-red-600">About</p>-->
<!--            <p>About us</p>-->
<!--            <p>Services</p>-->
<!--          </div>-->
<!--          <div class="flex-1 font-medium text-lg text-center lg:text-left mb-3">-->
<!--            <p class="text-red-600">Resources</p>-->
<!--            <p>Experience</p>-->
<!--          </div>-->
<!--          <div class="flex-1  font-medium text-lg text-center lg:text-left mb-3">-->
<!--            <p class="text-red-600">Contact us</p>-->
<!--            <p>+85328701110</p>-->
<!--            <p>info@imack.com.mo</p>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </footer>-->

    <MainFooter />

  </div>

</template>

<style>
.clip {
  clip-path: polygon(0% 0%, 100% 0%, 100% 90%, 50% 100%, 0% 90%);
}
/*.nav {*/
/*  //height: 110px;*/
/*  position:fixed;*/
/*  top:0;*/
/*  left:0;*/
/*  width:100%;*/
/*  z-index:99;*/
/*}*/
/*a:hover {*/
/*  text-decoration:underline;*/
/*}*/
*, html {
  scroll-behavior: smooth !important;
}
/*.side-menu {*/
/*  position:fixed;*/
/*  top:63px;*/
/*  left:0;*/
/*  transform: translateX(-130%);*/
/*  transition: 0.4s;*/
/*  z-index:98;*/
/*  width: 100%;*/
/*}*/
/*#side-menu-switch{*/
/*  position: fixed;*/
/*  top:0;*/
/*  left:0;*/
/*  opacity: 0;*/
/*}*/
/*#side-menu-switch:checked + .side-menu{*/
/*  transform: translateX(0%);*/
/*}*/
</style>

<script>

import {onBeforeMount, onBeforeUnmount, onMounted, onUnmounted, ref} from "vue";


export default {
  name: 'IndexPage',
  setup() {
    // let NavShow = ref(true);
    // let NavShow2 = ref(false);
    // onMounted(()=>{
    //   window.addEventListener('scroll', handleScroll)
    // })
    // onUnmounted(()=>{
    //   window.removeEventListener('scroll', handleScroll)
    // })
    // const handleScroll = () => {
    //   let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
    //   let offsetTop = document.querySelector('#aboutus').offsetTop - 100
    //   console.log("offsetTop: ", offsetTop)
    //   if (scrollTop < offsetTop) {
    //     //console.log("top")
    //     NavShow.value = true;
    //   } else {
    //     //console.log("bottom")
    //     NavShow.value = false;
    //   }
    //   if (scrollTop <= 100) {
    //     NavShow.value = true;
    //     NavShow2.value = false;
    //   } else if (scrollTop > 100 && scrollTop < offsetTop) {
    //     NavShow.value = false;
    //     NavShow2.value = false;
    //   } else {
    //     NavShow.value = false;
    //     NavShow2.value = true;
    //   }
    // }
    let zoom = 19
    let center = [22.18929,113.55135]
    let options = {
      //zoomControl: false,
    }
    let url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    let attribution = `© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors`
    // const map = L.map('map', {
    //   center: [22.18929,113.55135], // 中心點座標
    //   zoom: 17, // 0 - 18
    //   attributionControl: true, // 是否秀出「leaflet」的貢獻標記
    //   zoomControl: true , // 是否秀出 - + 按鈕
    // });
    // L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
    return {
      // NavShow,
      // NavShow2,
      zoom,
      center,
      options,
      url,
      attribution,
    }
  }
}
</script>
