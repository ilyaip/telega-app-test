<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

// Telegram WebApp
const telegram = window.Telegram?.WebApp;
telegram?.expand(); // Раскрыть WebApp на весь экран
telegram?.ready();  // Сообщить Telegram, что приложение загружено

const days = ref(0);
const hours = ref(0);
const minutes = ref(0);
const seconds = ref(0);

const calculateTimeLeft = () => {
  const now = new Date();
  const nextYear = now.getFullYear() + 1;
  const newYearDate = new Date(`January 1, ${nextYear} 00:00:00`);
  const timeDifference = newYearDate.getTime() - now.getTime();

  days.value = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  hours.value = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
  minutes.value = Math.floor((timeDifference / (1000 * 60)) % 60);
  seconds.value = Math.floor((timeDifference / 1000) % 60);
};

let timer: number;

onMounted(() => {
  calculateTimeLeft();
  timer = setInterval(calculateTimeLeft, 1000);
});

onUnmounted(() => {
  clearInterval(timer);
});
</script>

<template>
  <div class="wr">
    <div class="container">
<!--      <h1 class="title">До Нового года:</h1>-->
      <div class="countdown">
        <div class="time-box">
          <span class="label">Дней</span>
          <span class="time">{{ days }}</span>
        </div>
        <div class="time-box">
          <span class="label">Часов</span>
          <span class="time">{{ hours }}</span>
        </div>
        <div class="time-box">
          <span class="label">Минут</span>
          <span class="time">{{ minutes }}</span>
        </div>
        <div class="time-box">
          <span class="label">Секунд</span>
          <span class="time">{{ seconds }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wr {
  width: 100vw;
  height: 100vh;
  display: flex;
  padding-top: 50px;
  justify-content: center;
  background-image: url("./assets/test.jpg");
  background-size: 100vw 100vh;
  opacity: 80%;
}
.container {
  text-align: center;
  font-family: Arial, sans-serif;
  padding: 20px;
}

h1 {
  font-size: 2rem;
  margin-bottom: 20px;
}

.countdown {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.time-box {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.time {
  font-size: 2.5rem;
  font-weight: bold;
  color: #ff6b6b;
}

.label {
  font-size: 1rem;
  color: #bebebe;
}

.title {
  text-transform: uppercase;
}
</style>
