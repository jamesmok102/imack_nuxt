<template>
  <div class="lg:flex">
    <ExperienceCard :img-src="imgSrc" class="lg:flex-shrink m-5 hover:shadow-md"/>
    <div class="lg:flex-1 m-5 shadow rounded border-solid border-2 border-gray-50 hover:shadow-md lg:h-80" style="">
      <p class="text-3xl py-4 px-5 font-semibold">{{ title }}</p>
      <p class="text-2xl px-5">
        {{ message }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExperienceCard2",
  props: ['imgSrc', 'title', 'message'],
}
</script>

<style scoped>

</style>
