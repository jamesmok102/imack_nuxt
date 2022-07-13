<template>
<div>

  <SubNav home="/" about_us="/aboutus_page" services="/services_page" experience="/experience_page" sales_agent="/salesagent_page" contact_us="/contactus_page"/>

  <SubBanner title="Sales Agent" />

  <section class="py-24" id="salesagent">
    <div class="container mx-auto">
      <h2 class="text-4xl text-center mb-14 font-light">Sales Agent</h2>
      <div class="flex justify-center mb-10">
        <img src="@/static/lux.png" style="width: 200px;"/>
      </div>
    </div>
  </section>

  <MainFooter/>

</div>
</template>

<script>
export default {
  name: "salesagent"
}
</script>

<style scoped>

</style>
