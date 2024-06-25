<template>
  <div class="welcome-screen">
    <h1>Welcome to the App!</h1>
    <button @click="playMusic">Play Music</button>
    <audio ref="backgroundMusic" :src="musicSrc" loop></audio>
  </div>
</template>

<script>
export default {
  name: 'WelcomeScreen',
  data() {
    return {
      musicSrc: require('@/assets/background-music.mp3')
    };
  },
  mounted() {
    // Redirigir a la pantalla de carga si se recarga la página
    window.addEventListener('beforeunload', this.handleBeforeUnload);
  },
  beforeUnmount() {
    window.removeEventListener('beforeunload', this.handleBeforeUnload);
    this.$refs.backgroundMusic.pause();
  },
  methods: {
    handleBeforeUnload() {
      this.$router.push({ name: 'LoadingScreen' });
    },
    playMusic() {
      this.$refs.backgroundMusic.play();
    }
  }
};
</script>

<style scoped>
.welcome-screen {
  margin: 0%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url('../assets/background.png'); /* Ruta de la imagen de fondo */
  background-size: cover; /* Ajustar tamaño para cubrir el contenedor */
  background-position: center; /* Posición centrada */
  background-attachment: fixed; /* Fondo fijo */
  color: #000;
  font-family: Arial, sans-serif;
}

button {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}
</style>
