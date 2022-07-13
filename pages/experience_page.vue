<template>
  <div>

    <SubNav />

    <SubBanner :title="$t('title_experience')" />

    <section class="py-24">
      <div class="container mx-auto">
        <h2 class="text-4xl text-center mb-14 font-light">{{ $t('title_experience') }}</h2>
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
          <ExperienceCard img-src="./img/experience/5c50e888096e85e49e63dfd34c1f28e.jpg" />
          <ExperienceCard img-src="./img/experience/5eb7bc1e7e0098cb834fef19022b179.jpg" />
          <ExperienceCard img-src="./img/experience/8e7d81514c945cfacc5bfc86bcdb88e.jpg" />
          <ExperienceCard img-src="./img/experience/39d44968fa828dbd627384ab4ad3c05.jpg" />
          <ExperienceCard img-src="./img/experience/a2382ebcb5a44cf4bdd32bfb484115f.jpg" />
          <ExperienceCard img-src="./img/experience/c454861d269c315e532feea0b1a485c.jpg" />
          <ExperienceCard img-src="./img/experience/d837d9ef68cd854d3f06bd3e7f02c47.jpg" />
          <ExperienceCard img-src="./img/experience/d32320dcd5a2b2174d773a0a3c105e5.jpg" />
          <ExperienceCard img-src="./img/experience/f5716207ef9611f56428b13a5415760.jpg" />
        </div>
      </div>
    </section>

    <MainFooter/>

  </div>
</template>

<script>
export default {
  name: "experience_page",
}
</script>

<style scoped>

</style>

