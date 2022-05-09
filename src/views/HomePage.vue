<template>
  <div class="container">
    <section class="section section-get">
      <h2 class="title section-get__title">Working with GET request</h2>
      <card-list />
      <div class="section-get__btn-wrapper">
        <app-button text="Show more" />
      </div>
    </section>
    <section class="section section-post">
      <h2 class="title section-post__title">Working with POST request</h2>
      <from class="section-post__form">

      </from>
    </section>
  </div>
</template>

<script>
import CardList from '@/components/card/CardList'
import AppButton from '@/components/ui/AppButton'

export default {
  name: 'HomePage',
  components: {
    CardList,
    AppButton,
  }
}
</script>

<style lang="scss" scoped>
.section-get {
  &__title {
    margin-bottom: 50px;
  }
  &__btn-wrapper {
    margin-top: 30px;
    text-align: center;
  }
}
.section-post {
  &__title {
    margin-bottom: 50px;
  }
}
</style>