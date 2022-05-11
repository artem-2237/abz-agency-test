<template>
  <div class="container">

    <section class="section section-get">
      <h2 class="title section-get__title">Working with GET request</h2>
      <card-list />
    </section>

    <section class="section section-post">
      <the-registration-form />
    </section>
  </div>
</template>

<script>
import CardList from '@/components/card/CardList'
import TheRegistrationForm from '@/components/TheRegistrationForm'

export default {
  name: 'HomePage',
  components: {
    TheRegistrationForm,
    CardList,
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
  padding-bottom: 100px;
}
</style>