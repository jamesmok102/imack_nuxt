<i18n>
  {
    "en": {
      "about": "About",
      "resources": "Resources"
    },
    "zh": {
      "about": "關於",
      "resources": "資源"
    },
    "cn": {
      "about": "关于",
      "resources": "资源"
    }
  }
</i18n>


<template>
  <footer class="py-20 shadow">
    <div class="container mx-auto max-w-5xl font-semibold">
      <div class="lg:flex">
        <div class="lg:flex-1 lg:mx-10">
          <img src="~/static/img/imack_V2.png" style="width: 150px;" class="mx-auto mb-3">
        </div>
        <div class="flex-1 font-medium text-lg text-center lg:text-left mb-3">
          <p class="text-red-600">{{ $t('about') }}</p>
          <p><nuxt-link :to="localePath('/aboutus_page')">{{ $t('title_about') }}</nuxt-link></p>
          <p><nuxt-link :to="localePath('/services_page')">{{ $t('title_services') }}</nuxt-link></p>
        </div>
        <div class="flex-1 font-medium text-lg text-center lg:text-left mb-3">
          <p class="text-red-600">{{ $t('resources') }}</p>
          <p><nuxt-link :to="localePath('/experience_page')">{{ $t('title_experience') }}</nuxt-link></p>
          <p><nuxt-link :to="localePath('/salesagent_page')">{{ $t('title_salesagent') }}</nuxt-link></p>
        </div>
        <div class="flex-1  font-medium text-lg text-center lg:text-left mb-3">
          <p class="text-red-600"><nuxt-link :to="localePath('/contactus_page')">{{ $t('title_contactus') }}</nuxt-link></p>
          <p>+85328701110</p>
          <p>info@imack.com.mo</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "MainFooter"
}
</script>

<style scoped>

</style>
