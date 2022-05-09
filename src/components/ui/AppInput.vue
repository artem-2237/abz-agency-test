<template>
  <div :class="['input-wrapper']" :style="{width, marginBottom: mb}">
    <input
        v-show="type !== 'file' && type !== 'radio'"
        :type="type"
        :name="name"
        class="input"
        :id="label"
        :placeholder="placeholder"
        :accept="accept"
        @input="input"
    />
    <label :for="label" class="inputFile-btn" v-if="type === 'file'">Upload</label>
    <label :for="label" class="label-radio" v-if="type === 'radio'"></label>
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
      type: String,
      require: false
    }
  },
  methods: {
    input(e) {
      if (this.type === 'radio') {
        this.$emit('update:modelValue', this.val)
      } else {
        this.$emit('update:modelValue', e.target.value)
      }
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
.label-radio {
  position: relative;
  display: block;
  width: 20px;
  height: 20px;
  border: 1px solid $secondary-color;
  border-radius: 50%;
  margin-right: 12px;
}
.input:checked {
  ~ .label-radio:before {
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
</style>