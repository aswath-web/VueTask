import './assets/main.css'
import { Text, createApp } from 'vue'
import App from './App.vue'
import router from './router'
import mitt from 'mitt'

const emitter = mitt()
const app = createApp(App)
app.config.globalProperties.emitter = emitter
app.use(router)

app.mount('#app')

app.directive('numberMod',{
    beforeMount: (el, binding) => {
        el.addEventListener('keydown', (event) => {
            // Allow: backspace, delete, tab, escape, enter, and .
            if (
              event.key === 'Backspace' ||
              event.key === 'Delete' ||
              event.key === ','
            ) {
              return;
            }
            // Ensure only numbers are entered
            if (isNaN(Number(event.key)) || event.key === ' ') {
              event.preventDefault();
            }
          });
          el.addEventListener('input', (event) => {
            const input = event.target;
            let value = input.value;
            console.log(value.length)
            // Truncate value if it exceeds 15 digits
            if (value.length > 19) {
                value = value.slice(0, 19);
            }
            // Format the value with comma separators
            input.value = value
                .split(',')
                .join('') // Remove existing commas
                .replace(/(\d)(?=(\d{3})+\d{0}$)/g, '$1,'); // Insert new commas
            // Add leading comma for numbers starting with 0
            if (input.value.startsWith(',')) {
                input.value = input.value.slice(1);
            }
            });
    }
})
