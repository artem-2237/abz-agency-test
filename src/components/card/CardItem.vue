<template>
  <div class="card">
    <div class="card__image">
      <img :src="user.photo" alt="user" width="70" height="70">
    </div>
    <div :class="['card__name', {dataTitle: user.name.length > 38}]" :data-title="user.name">
      {{ user.name.length > 40 ? user.name.substring(0, 38) + '...' : user.name }}
    </div>
    <div class="card__info">
      <span class="card__position">{{ user.position }}</span>
      <span :class="['card__email', {dataTitle: user.name.length > 38}]" :data-title="user.email">
        {{ user.name.length > 40 ? user.name.substring(0, 38) + '...' : user.name }}
      </span>
      <span class="card__phone" :title="user.phone">{{ user.phone }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardItem',
  props: {
    user: {
      type: Object,
      require: true
    }
  }
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
    & > img {
      border-radius: 50%;
    }
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