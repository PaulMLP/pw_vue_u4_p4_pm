<template>
  <nav>
    <ul>
      <router-link to="/">Consular</router-link>
      |
      <router-link to="/registro">Agregar</router-link>
      |
      <router-link to="/actualizar">Actualizar</router-link>
      |
      <router-link to="/eliminar">Eliminar</router-link>
    </ul>
  </nav>

  <router-view class="view" />
</template>

<script>
import Estudiante from "./modules/estudiante/pages/ConsultaEstudiante.vue";
import GuardaEstudiante from "./modules/estudiante/pages/GuardaEstudiante.vue";

export default {
  name: "App",
  components: {
    Estudiante,
    GuardaEstudiante,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
nav a.router-link-exact-active {
  color: black;
}
a {
  color: grey;
}
</style>
