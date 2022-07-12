<template>
  <div>

    <SubNav home="/" about_us="/aboutus" services="/services" experience="/experience_page" sales_agent="/salesagent" contact_us="/contactus"/>

<!--    <div class="h-96" :style="{'background-image': 'linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.6),rgba(0,0,0,0.3)), url(' + require('@/static/network-2402637.jpg') + ')'}">-->
<!--      <div class="" style="height: 100%;">-->
<!--        <h1 class="text-white text-center py-44 text-6xl font-medium">About Us</h1>-->
<!--      </div>-->
<!--    </div>-->

    <SubBanner title="About Us" />

    <section class="lg:py-24 py-14 h-96" id="aboutus">
      <div class="container mx-auto max-w-5xl">
        <h2 class="text-4xl text-center mb-10 font-light">About us</h2>
        <p class="leading-relaxed text-center font-semibold lg:text-xl text-sm px-3 mb-10">艾克方案有限公司成立於2013年，與天網資料科技(澳門)有限公司為同一集團旗下的子公司，主要業務為一站式先進數據中心規劃，實施交付，維護保養及弱電項目相關的安裝工程，
          同時我們與業界領導者一起攜手為澳門各類客戶提供IT弱電系統、中央控制系統，大型視訊牆影顯示系統，多媒體簡報系統及公共廣播系統等方案。</p>
      </div>
    </section>

    <MainFooter />

  </div>
</template>

<script>
export default {
  name: "aboutus"
}
</script>

<style scoped>

</style>
