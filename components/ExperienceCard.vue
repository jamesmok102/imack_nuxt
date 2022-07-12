<template>
  <div class="rounded shadow card justify-self-center mb-7">
    <div class="content-img bg-cover bg-no-repeat rounded bg-center " :style="'background-image: url('+imgSrc+')'">
      <div class="hover_bg rounded opacity-0 hover:opacity-100 transition duration-700 ease-in-out">
        <div class="container mx-auto py-28">
          <p class="px-3 pb-3 font-semibold text-white">主要是，可以開比，了把都在哪出現武器因為。為去上業第二天感覺他，得他資料夾，畢業那就好聊天的感覺慾們原來，覺到上隻說這別昨賣網址。為什著的我的我也喜大家的</p>
        </div>
      </div>
    </div>
<!--    <h1 class="p-3 font-semibold text-2xl">標題</h1>-->
<!--    <p class="px-3 pb-3 font-light">主要是，可以開比，了把都在哪出現武器因為。為去上業第二天感覺他，得他資料夾，畢業那就好聊天的感覺慾們原來，覺到上隻說這別昨賣網址。為什著的我的我也喜大家的</p>-->
  </div>
</template>

<script>
export default {
  name: "ExperienceCard",
  props: ['imgSrc']
}
</script>

<style scoped>
.content-img {
  height: 350px;
}
.card {
  width: 350px;
}
.hover_bg {
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
}
</style>
