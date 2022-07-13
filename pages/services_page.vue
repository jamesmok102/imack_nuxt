<template>
  <div>

    <no-ssr>

    <SubNav />

    <SubBanner :title="$t('title_services')" />

    <div class="pt-24 pb-10">
      <div class="container mx-auto">
        <h2 class="text-4xl text-center mb-14 font-light">{{ $t('title_services') }}</h2>
        <div class="grid lg:grid-cols-2 lg:gap-3 text-white">
          <div class="bg-gray-300 lg:py-28 py-20 bg-cover " :style="{'background-image': 'linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.6)), url(' + require('@/static/img/services/pexels-manuel-geissinger-325229.jpg') + ')', 'height': '320px'}">
            <div class="container mx-auto px-6" >
              <h2 class="text-2xl text-center mb-6 font-semibold">數據中心弱電工程</h2>
              <p class="leading-relaxed text-center font-semibold">
                提供高效可靠、綠色XX、智能打理、XXXX的數據中心方案，專業弱電團隊XX設計XX系統及XX重整
              </p>
            </div>
          </div>
          <div class="bg-gray-300 py-28 bg-cover" :style="{'background-image': 'linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.6)), url(' + require('@/static/img/services/pexels-matej-716661.jpg') + ')', 'height': '320px'}">
            <div class="container mx-auto">
              <h2 class="text-2xl text-center mb-6 font-semibold">實施工程</h2>
              <p class="leading-relaxed text-center font-semibold">
                建築物設施之安裝及補修工程。包括各項室內裝修工程，安裝CCTV、XXX及門禁系統等。
              </p>
            </div>
          </div>
          <div class="bg-gray-300 py-28 bg-cover" :style="{'background-image': 'linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.6)), url(' + require('@/static/img/services/pexels-dzenina-lukac-754258.jpg') + ')', 'height': '320px'}">
            <div class="container mx-auto">
              <h2 class="text-2xl text-center mb-6 font-semibold">多媒體及影音系統</h2>
              <p class="leading-relaxed text-center font-semibold">
                提供各項影音設備及安裝服務，曾為政府機構安裝大型LED視訊牆影顯示系統。
              </p>
            </div>
          </div>
          <div class="bg-gray-300 py-28 bg-cover" style="height: 320px;" :style="{'background-image': 'linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.6)), url(' + require('@/static/img/services/pexels-cottonbro-5483071.jpg') + ')', 'height': '320px'}">
            <div class="container mx-auto">
              <h2 class="text-2xl text-center mb-6 font-semibold">維修保養</h2>
              <p class="leading-relaxed text-center font-semibold">
                提供專業資訊技術員駐場支援服務。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <MainFooter />

    </no-ssr>

  </div>
</template>

<script>
export default {
  name: "service"
}
</script>

<style scoped>

</style>
