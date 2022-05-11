<template>
  <component is="MainLayout" />
</template>

<script>
import MainLayout from '@/layouts/MainLayout'

export default {
  name: 'App',
  components: {
    MainLayout,
  },
  async mounted() {
    await this.$store.dispatch('loadPositions')
    await this.$store.dispatch('loadUsers')
  }
}
</script>

<style lang="scss">
#app {

}
</style>
