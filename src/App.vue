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
    <div class="box">
    </div>
    <div class="box-bg">
    </div>
    <div class="container">
<!--      <h1 class="title">До Нового года:</h1>-->
      <div class="countdown">
        <div class="time-box">
          <span class="time">{{ days }}</span>
          <span class="label">d</span>
        </div>
        <div class="time-box">
          <span class="time">{{ hours }}</span>
          <span class="label">h</span>
        </div>
        <div class="time-box">
          <span class="time">{{ minutes }}</span>
          <span class="label">m</span>
        </div>
        <div class="time-box">
          <span class="time">{{ seconds }}</span>
          <span class="label">s</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.wr {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: end;
  background-color: #747bff;
  background-image: url("./assets/back.jpg");
  background-size: contain;
  /*opacity: 95%;*/
}
.container {
  position: absolute;
  top: 70%;
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
  gap: 10px;
}

.time-box {
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: baseline;
}

.time {
  font-size: 2.5rem;
  /*font-weight: bold;*/
  color: #ecc966;
}

.label {
  font-size: 2rem;
  color: #ecc966;
}

.title {
  text-transform: uppercase;
}

.box {
  position: absolute;
  top: 57%;
  width: 100px;
  height: 100px;
  background-image: url("./assets/box.png");
  background-size: contain;
  background-repeat: no-repeat;
  z-index: 100;
  transition: 0.3s ease;
}
.box:active + .box-bg {
  box-shadow: 0 0 90px #fd16fb;
}
.box:hover + .box-bg {
  box-shadow: 0 0 90px #fd16fb;
}
.box:focus + .box-bg {
  box-shadow: 0 0 90px #fd16fb;
}

.box-bg {
  background-color: white;
  position: absolute;
  top: 60%;
  width: 50px;
  height: 50px;
  z-index: 99;
  transition: 0.3s ease;

}
</style>
