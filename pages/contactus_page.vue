<template>
<div>

  <no-ssr>

  <SubNav />

  <SubBanner :title="$t('title_contactus')" />

  <section id="contactus" class="py-24 bg-no-repeat bg-cover bg-fixed" >
    <div class="container mx-auto max-w-4xl">
      <h2 class="text-4xl text-center mb-14 font-light ">{{ $t('title_contactus') }}</h2>
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
        <div class="lg:flex-1 mx-3  text-lg font-medium">
          <ul>
            <li class="pb-1 font-semibold"><img src="@/static/img/contactus/location_black.png" class="pb-1 pr-3" style="display: inline;">澳門宋玉生廣場258號建興龍廣場16樓S座</li>
            <li class="py-1 font-semibold"><img src="@/static/img/contactus/clock_black.png" class="pb-1 pr-3" style="display: inline;">09:00-18:30</li>
            <li class="py-1 font-semibold"><img src="@/static/img/contactus/smartphone_black.png" class="pb-1 pr-3" style="display: inline;">+85328701110</li>
            <li class="py-1 font-semibold"><img src="@/static/img/contactus/email_black.png" class="pb-1 pr-3" style="display: inline;">info@imack.com.mo</li>
            <li class="py-1 font-semibold"><img src="@/static/img/contactus/instagram_black.png" class="pb-1 pr-3" style="display: inline;"><a href="https://www.instagram.com/imack_solutions/">imack_solutions(點擊進入IG)</a></li>
          </ul>
        </div>

      </div>
    </div>
  </section>

  <MainFooter/>

  </no-ssr>

</div>
</template>

<script>
export default {
  name: "contactus",
  setup() {
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

<style scoped>

</style>
