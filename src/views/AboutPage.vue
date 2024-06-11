<template>
  <div>
    <AboutHeader />
    <AboutMain />
    <AboutFooter />
  </div>
</template>

<script>
import AboutHeader from '@/components/About/AboutHeader.vue'
import AboutMain from '@/components/About/AboutMain.vue'
import AboutFooter from '@/components/About/AboutFooter.vue'

export default {
  name: 'AboutPage',
  components: {
    AboutHeader,
    AboutMain,
    AboutFooter
  }
}
</script>

<style scoped>
/* CSS สำหรับ AboutPage.vue */
</style>
