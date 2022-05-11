<template>
  <div v-if="success" class="success">
    <h2 class="title success__title">User successfully registered</h2>
    <img src="@/assets/success-image.svg" alt="success">
  </div>
  <form v-else class="registration__form" @submit.prevent="submit">
    <h2 class="title registration__title">Working with POST request</h2>
    <app-input
        placeholder="Your name"
        width="100%"
        :error="errors.name"
        mb="50px"
        v-model="name"
    />
    <app-input
        placeholder="Email"
        width="100%"
        :error="errors.email"
        mb="50px"
        v-model="email"
    />
    <app-input
        placeholder="Phone"
        width="100%"
        type="phone"
        :error="errors.phone"
        label="+38 (XXX) XXX - XX - XX"
        mb="43px"
        v-model="phone"
    />
    <div class="radio-group registration__radio-group">
      <div v-if="positions" class="radio-group__title">Select your position</div>
      <app-input
          v-for="p in positions"
          :key="p.id"
          type="radio"
          :label="p.name"
          :error="errors.position"
          name="position"
          :val="p.id"
          v-model="position"
      />
    </div>
    <app-input
        type="file"
        accept="image/jpeg, image/jpg"
        placeholder="Upload"
        :label="photo ? photo?.name : 'Upload your photo'"
        :error="errors.photo"
        mb="50px"
        v-model="photo"
    />
    <app-button
        text="Sing up"
        type="submit"
        center
        :disabled="!name || !email || !phone || !position || !photo"
    />
  </form>
</template>

<script>
import AppButton from '@/components/ui/AppButton'
import AppInput from '@/components/ui/AppInput'

export default {
  name: 'TheRegistrationForm',
  components: {
    AppInput,
    AppButton,
  },
  data() {
    return {
      name: '',
      email: '',
      phone: '',
      position: '',
      photo: '',
      errors: {
        name: '',
        email: '',
        phone: '',
        position: '',
        photo: '',
      },
      success: false,
    }
  },
  computed: {
    positions() {
      return this.$store.getters.positions
    }
  },
  methods: {
    async submit() {
      this.validate()

      if (Object.values(this.errors).join('').length === 0) {
        let formData = new FormData()

        formData.append('name', this.name)
        formData.append('email', this.email)
        formData.append('phone', this.phone)
        formData.append('position_id', this.position)
        formData.append('photo', this.photo)

        try {
          await this.$store.dispatch('createUser', formData)
          this.success = true
        } catch (err) {
          console.log(err)
        }
      }
    },
    validate() {
      const emailReg = new RegExp('^(?:[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])$')
      const phoneReg = new RegExp('^[\+]{0,1}380([0-9]{9})$')

      if (this.name.trim().length < 2 || this.name.trim().length > 60) {
        this.errors.name = 'User name, should be 2-60 characters'
      } else {
        this.errors.name = ''
      }
      if (!emailReg.test(this.email.trim())) {
        this.errors.email = 'Enter a valid email'
      } else {
        this.errors.email = ''
      }
      if (!phoneReg.test(this.phone)) {
        this.errors.phone = 'Enter a valid phone +38 (XXX) XXX - XX - XX'
      } else {
        this.errors.phone = ''
      }
      if (this.position.length < 1) {
        this.errors.position = 'Select your position'
      } else {
        this.errors.position = ''
      }
      if (!this.photo) {
        this.errors.photo = 'Load a photo'
      } else if (this.photo && this.photo?.size > 5242880) {
        this.errors.photo = 'Size of photo must not exceed 5MB'
      } else {
        this.errors.photo = ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.registration {
  padding-bottom: 100px;
  &__form {
     width: 380px;
     margin: auto;
   }
  &__radio-group {
     margin-bottom: 50px;
   }
  &__title {
    margin-bottom: 50px;
  }
}
.success {
  text-align: center;
  &__title {
    margin-bottom: 50px;
  }
}
</style>