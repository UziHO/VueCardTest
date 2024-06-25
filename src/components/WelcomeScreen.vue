<template>
  <div class="welcome-screen">
    <h1>Welcome Bandito, see you soon</h1>
    <h1>19.4352, -99.1412</h1>
  </div>
</template>

<script>
export default {
  name: 'WelcomeScreen',
  mounted() {
    // Redirigir a la pantalla de carga si se recarga la página
    window.addEventListener('beforeunload', this.handleBeforeUnload);
  },
  beforeUnmount() {
    window.removeEventListener('beforeunload', this.handleBeforeUnload);
  },
  methods: {
    handleBeforeUnload() {
      this.$router.push({ name: 'LoadingScreen' });
    }
  }
};
</script>

<style scoped>
.welcome-screen {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #fff;
  color: #000;
  font-family: Arial, sans-serif;
}
</style>
