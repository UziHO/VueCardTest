<template>
  <div class="loading-screen">
    <img src="../assets/logo.png" alt="Logo" class="logo" />
    <div class="progress-bar">
      <div class="progress" :style="{ width: progressWidth + '%' }"></div>
    </div>
    <div class="percentage">{{ progressText }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      progressWidth: 0,
      progressText: '0%',
      loadingTimer: null
    };
  },
  mounted() {
    this.startLoading();
  },
  beforeUnmount() {
    if (this.loadingTimer) {
      clearTimeout(this.loadingTimer);
    }
  },
  methods: {
    startLoading() {
      this.progressWidth = 0;
      this.progressText = '0%';

      const steps = [
        { percentage: 10, duration: 500 },
        { percentage: 30, duration: 1000 },
        { percentage: 50, duration: 1500 },
        { percentage: 55, duration: 500 },
        { percentage: 75, duration: 2000 },
        { percentage: 100, duration: 2500 },
      ];

      let totalTime = 0;
      steps.forEach(step => {
        totalTime += step.duration;
        this.loadingTimer = setTimeout(() => {
          this.progressWidth = step.percentage;
          this.progressText = `${step.percentage}%`;
          if (step.percentage === 100) {
            setTimeout(() => {
              this.progressText = 'Success';
              this.redirectToWelcome();
            }, 500);
          }
        }, totalTime);
      });
    },
    redirectToWelcome() {
      this.$router.push({ name: 'WelcomeScreen' });
    }
  }
};
</script>
<style scoped>
.loading-screen {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #ffffff;
  color: rgb(0, 0, 0);
  font-family: monospace;
}

.logo {
  margin-bottom: 20px;
  width: 350px; /* Ajusta el tamaño según tus necesidades */
}

.progress-bar {
  width: 80%;
  height: 20px;
  background-color: #ffffff;
  border: 2px solid rgb(0, 0, 0);
  margin-bottom: 10px;
  position: relative;
}

.progress {
  height: 100%;
  background-color: rgb(0, 0, 0);
  transition: width 0.5s ease;
}

.percentage {
  font-size: 20px;
}
</style>
