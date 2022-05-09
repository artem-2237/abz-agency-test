<template>
  <div :class="['input-wrapper']" :style="{width, marginBottom: mb}">
    <input
        v-show="type !== 'file'"
        :type="type"
        :name="name"
        class="input"
        :id="label"
        :placeholder="placeholder"
        :accept="accept"
        @input="$emit('update:modelValue', $event.target.value)"
    />
    <label :for="label" class="inputFile-btn" v-show="type === 'file'">Upload</label>
    <label
        v-if="label"
        :class="['input-label', {inputFile: type === 'file'}]"
        :for="label"
    >
      {{ label }}
    </label>
  </div>
</template>

<script>
export default {
  name: 'AppInput',
  emits: ['update:modelValue'],
  props: {
    modelValue: String,
    placeholder: {
      type: String,
      require: false,
    },
    type: {
      type: String,
      require: false,
      default: 'text',
      validator(val) {
        return ['text', 'radio', 'file'].includes(val)
      }
    },
    width: {
      type: String,
      require: false,
    },
    mb: {
      type: String,
      require: false,
      default: '5px'
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
    }
  }
}
</script>

<style lang="scss" scoped>
.input, .inputFile, .inputFile-btn {
  &-wrapper {
    display: flex;
    align-items: center;
  }
  width: 100%;
  height: 54px;
  border: 1px solid #D0CFCF;
  border-radius: 4px;
  padding: 14px 16px;
  font-size: 16px;
  line-height: 26px;
  &[type="radio"] {
    width: 20px;
    height: 20px;
    margin-right: 12px;
  }
}
.inputFile {
  border-left: none;
  border-radius: 0 4px 4px 0;
  color: #7E7E7E;
  cursor: pointer;
  &-btn {
    display: inline-block;
    border-radius: 4px 0 0 4px;
    border: 1px solid #000;
    height: 100%;
    width: 83px;
    cursor: pointer;
  }
}
</style>