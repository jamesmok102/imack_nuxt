<template>
  <div>

    <no-ssr>

    <SubNav />

    <SubBanner :title="$t('title_experience')" />

    <section class="py-24">
      <div class="container mx-auto">
        <h2 class="text-4xl text-center mb-14 font-light">{{ $t('title_experience') }}</h2>
<!--        <p>{{lang}}</p>-->
<!--        <p>{{$nuxt.$route.path}}</p>-->
<!--        <p>{{$nuxt.$route.path.indexOf('/cn') === 0}}</p>-->
        <div v-for="article in articles">
<!--          <ExperienceCard2 :img-src="article.content.Avatar.filename" :title="article.content.title" :message="article.content.description" v-if="lang == 'en'" />-->
<!--          <ExperienceCard2 :img-src="article.content.Avatar.filename" :title="article.content.title" :message="article.content.description_zh" v-else-if="lang == 'zh'" />-->
<!--          <ExperienceCard2 :img-src="article.content.Avatar.filename" :title="article.content.title" :message="article.content.description_cn" v-else-if="lang == 'cn'" />-->
<!--          <ExperienceCard2 :img-src="article.content.Avatar.filename" :title="article.content.title" :message="article.content.description_zh" v-else />-->
          <ExperienceCard2 :img-src="article.content.Avatar.filename" :title="article.content.title" :message="article.content.description" v-if="$nuxt.$route.path.indexOf('/en') === 0" />
          <ExperienceCard2 :img-src="article.content.Avatar.filename" :title="article.content.title" :message="article.content.description_cn" v-else-if="$nuxt.$route.path.indexOf('/cn') === 0" />
          <ExperienceCard2 :img-src="article.content.Avatar.filename" :title="article.content.title" :message="article.content.description_zh" v-else />
        </div>
<!--        <ExperienceCard2 img-src="./img/experience/5c50e888096e85e49e63dfd34c1f28e.jpg"/>-->
<!--        <ExperienceCard2 img-src="./img/experience/5eb7bc1e7e0098cb834fef19022b179.jpg"/>-->
<!--        <ExperienceCard2 img-src="./img/experience/8e7d81514c945cfacc5bfc86bcdb88e.jpg"/>-->
<!--        <ExperienceCard2 img-src="./img/experience/39d44968fa828dbd627384ab4ad3c05.jpg"/>-->
<!--        <ExperienceCard2 img-src="./img/experience/a2382ebcb5a44cf4bdd32bfb484115f.jpg"/>-->
<!--        <ExperienceCard2 img-src="./img/experience/c454861d269c315e532feea0b1a485c.jpg"/>-->
<!--        <ExperienceCard2 img-src="./img/experience/d837d9ef68cd854d3f06bd3e7f02c47.jpg"/>-->
<!--        <ExperienceCard2 img-src="./img/experience/d32320dcd5a2b2174d773a0a3c105e5.jpg"/>-->
<!--        <ExperienceCard2 img-src="./img/experience/f5716207ef9611f56428b13a5415760.jpg"/>-->
<!--        <div class="flex">-->
<!--          <ExperienceCard img-src="./img/experience/5c50e888096e85e49e63dfd34c1f28e.jpg" class="flex-shrink m-5" />-->
<!--          <div class="flex-1 m-5 shadow rounded border-solid border-2 border-gray-50" style="height: 350px;">-->
<!--            <p class="text-3xl py-4 px-5 font-semibold">Lorem Ipsum</p>-->
<!--            <p class="text-2xl  px-5">-->
<!--              Lorem ipsum dolor sit amet, consectetur adipiscing elit.-->
<!--              Aenean tempor libero id ante tempor pellentesque.-->
<!--              Donec aliquet dictum commodo. Donec nisl sem,-->
<!--              ultricies eu lacus et, gravida volutpat erat.-->
<!--              Curabitur maximus suscipit libero eu lacinia.-->
<!--              Phasellus sed mi libero. Sed at dignissim ligula.-->
<!--              Vestibulum eu odio id leo malesuada mattis rutrum nec tellus.-->
<!--              Nam mattis, est nec dictum consectetur, lectus quam fringilla mi,-->
<!--              in pretium elit ligula at enim. Integer sit amet risus condimentum,-->
<!--              gravida risus non, ornare est. Phasellus porta pulvinar ipsum vel pulvinar.-->
<!--              Sed tincidunt odio vel eros imperdiet, ac euismod erat tempus.-->
<!--            </p>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="grid lg:grid-cols-3">-->
<!--          <ExperienceCard img-src="./img/experience/5c50e888096e85e49e63dfd34c1f28e.jpg" />-->
<!--          <ExperienceCard img-src="./img/experience/5eb7bc1e7e0098cb834fef19022b179.jpg" />-->
<!--          <ExperienceCard img-src="./img/experience/8e7d81514c945cfacc5bfc86bcdb88e.jpg" />-->
<!--          <ExperienceCard img-src="./img/experience/39d44968fa828dbd627384ab4ad3c05.jpg" />-->
<!--          <ExperienceCard img-src="./img/experience/a2382ebcb5a44cf4bdd32bfb484115f.jpg" />-->
<!--          <ExperienceCard img-src="./img/experience/c454861d269c315e532feea0b1a485c.jpg" />-->
<!--          <ExperienceCard img-src="./img/experience/d837d9ef68cd854d3f06bd3e7f02c47.jpg" />-->
<!--          <ExperienceCard img-src="./img/experience/d32320dcd5a2b2174d773a0a3c105e5.jpg" />-->
<!--          <ExperienceCard img-src="./img/experience/f5716207ef9611f56428b13a5415760.jpg" />-->
<!--        </div>-->
      </div>
    </section>

    <MainFooter/>

    </no-ssr>

  </div>
</template>

<script>
import {ref} from "vue";

export default {
  name: "experience_page",
  setup() {
    let lang2 = ref($nuxt.$route.path)
    return {lang2}
  },
  async asyncData({app}) {
    const res = await app.$storyapi.get('cdn/stories', {
      starts_with: 'experience/',
    })
    const articles = res.data.stories.map((story) => {
      story.content.date = new Date(story.content.date)
      return story
    })
    let lang = app.i18n.locale
    return { articles, lang}
  },
}
</script>

<style scoped>

</style>

