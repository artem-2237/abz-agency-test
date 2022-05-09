<template>
  <button
      class="btn"
      :disabled="disabled"
      :type="type"
      :style="{margin: center ? 'auto' : ''}"
      @click="$emit('action')"
  >{{ text }}</button>
</template>

<script>
export default {
  name: 'AppButton',
  emits: ['action'],
  props: {
    text: {
      type: String,
      default: 'Text'
    },
    disabled: {
      type: Boolean,
      require: false,
      default: false
    },
    type: {
      type: String,
      require: false,
      default: 'button'
    },
    center: {
      type: Boolean,
      require: false,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
  .btn {
    display: block;
    min-width: 100px;
    height: 34px;
    background: $primary-color;
    padding: 4px 18px;
    border: none;
    border-radius: 80px;
    cursor: pointer;
    &:hover {
      background: lighten($primary-color, 10%);
    }
    &[disabled] {
      background: #B4B4B4;
      color: transparentize(#fff, .23);
      cursor: default;
    }
  }
</style>