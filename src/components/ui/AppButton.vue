<template>
  <button
      class="btn"
      :disabled="disabled"
      :type="type"
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
    }
  }
}
</script>

<style lang="scss" scoped>
  .btn {
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
  }
</style>