import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

let masked

createApp(App)
  .use(store)
  .directive('mask', {
    mounted(el, binding) {
      if (binding.value === 'phone') {
        masked = () => {
          if (el.value.length < 4) {
            el.value = '+380'
          } else if (el.value.length === 1) {
            const n = el.value
            el.value = '+380' + n
          }
          const arr = el.value.split('')
          arr.splice(0, 1)
          el.value = '+' + arr.map(el => isNaN(el) || el === ' ' ? '' : el).join('')
        }
        el.addEventListener('input', masked)
        el.addEventListener('cut', masked)
        el.addEventListener('paste', masked)
      }
    },
    unmounted(el) {
      el.removeEventListener('input', masked)
    }
  })
  .mount('#app')
