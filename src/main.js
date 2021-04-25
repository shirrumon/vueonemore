import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
const PORT = process.env.PORT || 80
App.listen(PORT, () => {
  console.log("Server has been started...")
})
createApp(App).use(router).mount('#app')
