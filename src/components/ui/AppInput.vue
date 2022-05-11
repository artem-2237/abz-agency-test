<template>
  <div :class="['input-wrapper', `input-wrapper_${type}`]" :style="{width, marginBottom: mb}">
    <input
        v-show="type === 'text' || type === 'phone'"
        :type="type"
        :max="type === 'phone' ? '13' : ''"
        :name="name"
        class="input-wrapper_text__input input"
        :id="label"
        :placeholder="placeholder"
        :accept="accept"
        v-mask="type"
        :maxlength="type === 'phone' ? 13 : 60"
        @input="input"
    />

    <label
        v-if="type === 'file' || type === 'radio'"
        :class="[`input-wrapper_${type}__btn`, {input: type === 'file'}]"
        :for="label"
    >{{ type === 'file' ? 'Upload' : '' }}</label>
    <label
        v-if="label && !((type === 'phone' && error) || (type === 'text' && error))"
        :class="[`input-wrapper_${type}__label`, {input: type === 'file'}]"
        :for="label"
    >{{ label }}</label>

    <span v-if="error" class="input-wrapper__error">{{ error }}</span>
  </div>
</template>

<script>
export default {
  name: 'AppInput',
  emits: ['update:modelValue'],
  props: {
    modelValue: [String, Object, Number],
    placeholder: {
      type: String,
      require: false,
    },
    type: {
      type: String,
      require: false,
      default: 'text',
      validator(val) {
        return ['text', 'radio', 'file', 'phone'].includes(val)
      }
    },
    width: {
      type: String,
      require: false,
    },
    mb: {
      type: String,
      require: false,
    },
    label: {
      type: String,
      require: false,
    },
    name: {
      type: String,
      require: false,
    },
    accept: {
      type: String,
      require: false
    },
    val: {
      type: [String, Number],
      require: false
    },
    error: {
      type: String,
      require: false
    }
  },
  methods: {
    input(e) {
      if (this.type === 'radio') {
        this.$emit('update:modelValue', this.val)
      } else if (this.type === 'text' || this.type === 'phone') {
        this.$emit('update:modelValue', e.target.value)
      }
      switch(this.type) {
        case 'radio':
          this.$emit('update:modelValue', this.val)
          break
        case 'text':
          this.$emit('update:modelValue', e.target.value)
          break
        case 'file':
          this.$emit('update:modelValue', e.target.files[0])
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.input {
  width: 100%;
  height: 54px;
  border: 1px solid #D0CFCF;
  border-radius: 4px;
  padding: 14px 16px;
  &-wrapper {
    display: flex;
    position: relative;
    align-items: center;
    font-size: 16px;
    line-height: 26px;
    &__error {
      position: absolute;
      top: 55px;
      left: 10px;
      color: #d01c1c;
      font-size: 14px;
    }
    &_text, &_phone{
      &__input {
        width: 100%;
      }
      &__label {
        position: absolute;
        top: 55px;
        left: 10px;
        color: #7E7E7E;
        font-size: 14px;
      }
    }
    &_file {
      &__btn {
        display: inline-block;
        border-radius: 4px 0 0 4px;
        border: 1px solid #000;
        width: 83px;
        cursor: pointer;
      }
      &__label {
        border-left: none;
        border-radius: 0 4px 4px 0;
        color: #7E7E7E;
        cursor: pointer;
      }
    }
     &_radio {
       &__btn {
         position: relative;
         display: block;
         width: 20px;
         height: 20px;
         border: 1px solid $secondary-color;
         border-radius: 50%;
         margin-right: 12px;
       }
       & .input-wrapper__error {
         display: none;
       }
       &:last-child .input-wrapper__error {
         display: block;
         top: 25px;
       }
     }
  }
  &[type="radio"]:checked {
    ~ .input-wrapper_radio__btn:before {
      content: '';
      display: block;
      position: absolute;
      background: $secondary-color;
      width: 10px;
      height: 10px;
      top: 4px;
      left: 4px;
      border-radius: 50%;
    }
  }
}
</style>