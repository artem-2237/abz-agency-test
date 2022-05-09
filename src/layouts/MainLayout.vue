<template>
  <div class="container">
    <the-header />
  </div>
  <app-banner />
  <home-page />
</template>

<script>
import TheHeader from '@/components/TheHeader'
import AppBanner from '@/components/ui/AppBanner'
import HomePage from '@/views/HomePage'

export default {
  name: 'MainLayout',
  components: {
    HomePage,
    TheHeader,
    AppBanner,
  }
}
</script>

<style scoped>

</style>