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
      <form class="section-post__form">
        <app-input
            placeholder="Your name"
            width="100%"
            mb="50px"
            v-model="name"
        />
        <app-input
            placeholder="Email"
            width="100%"
            mb="50px"
            v-model="email"
        />
        <app-input
            placeholder="Phone"
            width="100%"
            mb="43px"
            v-model="phone"
        />
        <div class="radio-group section-post__radio-group">
          <div class="radio-group__title">Select your position</div>
          <app-input
            v-for="position in positions"
            :key="position"
            type="radio"
            :label="position"
            name="position"
          />
        </div>
        <app-input
            type="file"
            accept="image/*"
            label="Upload your photo"
            placeholder="Upload"
            v-model="photo"
        />
      </form>
    </section>
  </div>
</template>

<script>
import CardList from '@/components/card/CardList'
import AppButton from '@/components/ui/AppButton'
import AppInput from '@/components/ui/AppInput'

export default {
  name: 'HomePage',
  components: {
    AppInput,
    CardList,
    AppButton,
  },
  data() {
    return {
      name: '',
      email: '',
      phone: '',
      position: '',
      photo: '',
      positions: [
        'Frontend developer',
        'Backend developer',
        'Designer',
        'QA'
      ],
    }
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
  &__form {
    width: 380px;
    margin: auto;
  }
}
</style>