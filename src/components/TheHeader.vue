<template>
  <div class="header">
    <div class="header__logo">
      <img src="@/assets/logo.svg" alt="logo">
    </div>
    <div class="btn-group">
      <app-button text="Users" />
      <app-button text="Sing up" />
    </div>
  </div>
</template>

<script>
import AppButton from '@/components/ui/AppButton'

export default {
  name: 'TheHeader',
  components: {
    AppButton,
  }
}
</script>

<style lang="scss" scoped>
  .header {
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &__logo {
      height: 26px;
    }
  }
</style>