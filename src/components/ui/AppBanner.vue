<template>
  <div class="banner">
    <div class="banner__content">
      <h2 class="title banner__title">Test assignment for front-end developer</h2>
      <p class="banner__text">
        What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.
      </p>
      <app-button text="Sign up" />
    </div>
  </div>
</template>

<script>
import AppButton from '@/components/ui/AppButton'

export default {
  name: 'AppBanner',
  components: {
    AppButton,
  }
}
</script>

<style lang="scss" scoped>
.banner {
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 1170px;
  background-image: url("@/assets/banner.jpeg");
  background-repeat: no-repeat;
  background-size: 1500px;
  background-position: bottom;
  height: 650px;
  margin: auto;
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: transparentize(#000, .5);
  }
  &__content {
    z-index: 1;
    width: 380px;
    color: #ffffff;
    text-align: center;
  }
  &__title {
    margin-bottom: 21px;
  }
  &__text {
    margin-bottom: 32px;
  }
}
@media (max-width: 1200px) {
  .banner {
    width: 100%;
  }
}
@media (max-width: 1023px) {
  .banner {
    height: 500px;
    background-size: 1150px;
  }
}
@media (max-width: 767px) {
  .banner {
    &__content {
      width: 328px;
    }
  }
}
</style>