<template>
  <div>

    <div class="h-96 shadow" :style="{'background-image': 'linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.6),rgba(0,0,0,0.3)), url(' + require('@/static/network-2402637.jpg') + ')'}">
      <div class="" style="height: 100%;">
        <h1 class="text-white text-center py-44 text-6xl font-medium">{{ title }}</h1>
      </div>
    </div>



  </div>
</template>

<script>
export default {
  name: "SubBanner",
  props: ['title'],
}
</script>

<style scoped>

</style>
