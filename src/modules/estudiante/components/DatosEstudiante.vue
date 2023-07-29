<template>
  <div class="datos-estudiante">
   <input type="text" v-model="cedula" placeholder="ingrese cedula">
   <button @click="consultarEstudiante">Consultar</button>
  </div>
</template>

<script>
import { obtenerEstudianteFachada } from "@/modules/estudiante/helpers/EstudianteCliente";

export default {
  data() {
    return {
      cedula: null,
    };
  },
  methods: {
    async consultarEstudiante() {
      await obtenerEstudianteFachada(this.cedula);
    },
  },
};
</script>

<style scoped></style>
