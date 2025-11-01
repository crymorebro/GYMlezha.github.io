import { createApp } from 'vue'
import App from './App.vue'
import '/src/main.css'
import { Gradient } from "whatamesh";

// Create your instance
const gradient = new Gradient()

// Call `initGradient` with the selector to your canvas
gradient.initGradient('#gradient-canvas')

createApp(App).mount('#app')

