<template>
  <div class="banner">

  </div>
</template>

<script>
export default {
  name: 'AppBanner',
}
</script>

<style lang="scss" scoped>
.banner {
  width: 1170px;
  background-image: url("@/assets/banner.jpeg");
  background-repeat: no-repeat;
  background-size: 1500px;
  background-position: bottom;
  filter: brightness(50%);
  height: 650px;
  margin: auto;
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
</style>