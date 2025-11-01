<template>
  <div class="app-container">
    <canvas id="gradient-canvas"></canvas>

    <h1>КАЛЬКУЛЯТОР ЖИМА ЛЕЖА</h1>
    <p class="jimlezha">Ваш вес</p>
    <div class="contjim1">
      <input type="text" class="jimlezha1" v-model="weight" />
    </div>

    <p class="jimlezha">Ваш жим</p>
    <div class="contjim2">
      <input type="text" class="jimlezha1" v-model="press" />
    </div>

    <p class="jimlezha">Повторения</p>
    <div class="contjim3">
      <input type="text" class="jimlezha1" v-model="reps" />
    </div>

    <div class="raz">
      <button @click="calculateMax">Рассчитать</button>
    </div>

    <p class="jimlezha3">Ваш разовый максимум: {{ maxPress }}</p>
  </div>
</template>

<script>
import { Gradient } from './gradient.js'

export default {
  data() {
    return {
      weight: '',
      press: '',
      reps: '',
      maxPress: ''
    }
  },
  methods: {
    calculateMax() {
      const weightNum = parseFloat(this.weight);
      const pressNum = parseFloat(this.press);
      const repsNum = parseInt(this.reps);

      if (!isNaN(weightNum) && !isNaN(pressNum) && !isNaN(repsNum)) {
        this.maxPress = (pressNum * (1 + repsNum / 30)).toFixed(2);
      } else {
        this.maxPress = 'Некорректные данные';
      }
    }
  },
  mounted() {
    this.gradient = new Gradient();
    this.gradient.initGradient('#gradient-canvas');
  },
  beforeUnmount() {
    if (this.gradient) {
      // реализуйте если есть метод для удаления/остановки
      if (this.gradient.pause) this.gradient.pause();
    }
  }
}
</script>

<style scoped>
#gradient-canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  pointer-events: none;

  --gradient-color-1: #000000; 
  --gradient-color-2: #550000; 
  --gradient-color-3: #000000;  
  --gradient-color-4: #580101;
}

.app-container {
  position: relative;
  z-index: 0;
  /* на случай, если у родителя нет высоты */
  min-height: 100vh;
  font-family: 'Sofia Sans Condensed', sans-serif;
}

/* Ваши текущие стили для калькулятора */
</style>
