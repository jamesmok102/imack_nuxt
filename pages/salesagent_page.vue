<template>
<div>

  <SubNav />

  <SubBanner :title="$t('title_salesagent')" />

  <section class="py-24" id="salesagent">
    <div class="container mx-auto">
      <h2 class="text-4xl text-center mb-14 font-light">{{ $t('title_salesagent') }}</h2>
      <div class="flex justify-center mb-10">
        <img src="~/static/img/salesagent/lux.png" style="width: 200px;"/>
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
