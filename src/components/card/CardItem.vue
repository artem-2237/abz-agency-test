<template>
  <div class="card">
    <div class="card__image">
      <img src="@/assets/photo-cover.svg" alt="user" width="70" height="70">
    </div>
    <div class="card__name">Takamaru Ayako Jurrien</div>
    <div class="card__info">
      <span class="card__job">Former Senior Director</span>
      <span class="card__email">Winny_develop@gmail.com</span>
      <span class="card__phone">+38 (098) 278 22 88</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardItem',
}
</script>

<style lang="scss" scoped>
.card {
  width: 370px;
  background: #ffffff;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 29px;
  text-align: center;
  &__image {
    margin-bottom: 20px;
  }
  &__name {
    margin-bottom: 20px;
  }
  &__info {
    & span {
      display: block;
    }
  }
}
@media (max-width: 1200px) {
  .card {
    width: 282px;
  }
}
@media (max-width: 1023px) {
  .card {
    width: 344px;
    margin-bottom: 16px;
  }
}
@media (max-width: 767px) {
  .card {
    width: 100%;
  }
}
</style>