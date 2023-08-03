<template>
  <div class="datos-estu-cont">
    <div class="datos-estudiante">
      <label for="cedula">Cedula</label>
      <div class="cedula">
        <input id="cedula" type="text" v-model="cedula" placeholder="ingrese cedula" />
        <button @click="consultarEstudiante">Consultar</button>
      </div>
      <label for="nombre">Nombre</label>
      <input id="nombre" type="text" v-model="nombre" />
      <label for="apellido">Apellido</label>
      <input id="apellido" type="text" v-model="apellido" />
    </div>
  </div>
</template>

<script>
import { obtenerEstudianteFachada } from "@/modules/estudiante/helpers/EstudianteCliente";

export default {
  data() {
    return {
      cedula: null,
      nombre: "",
      apellido: "",
    };
  },
  methods: {
    async consultarEstudiante() {
      const data = await obtenerEstudianteFachada(this.cedula);
      this.nombre = data.nombre;
      this.apellido = data.apellido;
    },
  },
};
</script>

<style scoped>
.datos-estu-cont {
  display: flex;
  align-items: center;
  justify-content: center;
}
.datos-estudiante {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>
