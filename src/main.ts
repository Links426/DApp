import { createApp } from 'vue'
import { setupStore } from '@/stores/store'
import ArcoVue from '@arco-design/web-vue'
import ArcoVueIcon from '@arco-design/web-vue/es/icon'
import router from '@/router'
import App from './App.vue'
import SelButton from '@/components/select-button.vue'

import 'uno.css'
import '@arco-design/web-vue/dist/arco.css'
import '@/assets/css/reset.css'
import 'normalize.css'
import '@/assets/font/iconfont.css'

const app = createApp(App)

app.use(router)
app.use(ArcoVue)
app.use(ArcoVueIcon)
app.component('SelButton', SelButton)
setupStore(app)
app.mount('#app')
