<template>
  <div class="container">
    <the-header />
  </div>
  <app-banner />

</template>

<script>
import TheHeader from '@/components/TheHeader'
import AppBanner from '@/components/ui/AppBanner'

export default {
  name: 'MainLayout',
  components: {
    TheHeader,
    AppBanner,
  }
}
</script>

<style scoped>

</style>