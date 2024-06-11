<template>
  <div>
    <HomeHeader />
    <HomeMain />
    <HomeFooter />
  </div>
</template>

<script>
import HomeHeader from '@/components/Home/HomeHeader.vue'
import HomeMain from '@/components/Home/HomeMain.vue'
import HomeFooter from '@/components/Home/HomeFooter.vue'

export default {
  name: 'HomePage',
  components: {
    HomeHeader,
    HomeMain,
    HomeFooter
  }
}
</script>

<style scoped>
/* CSS สำหรับ HomePage.vue */
</style>
