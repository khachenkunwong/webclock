import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

// เริ่มต้นแอป
const app = createApp(App)
// ดึงไฟล์ในโฟดเดอร์
app.use(store)
app.use(router)
app.mount('#app')
