<template>
  <div class="datos-estu-cont">
    <div class="datos-estudiante">
      <div class="campos">
        <label for="id">Id</label>
        <input id="id" type="text" v-model="id" placeholder="ingrese id" />
      </div>
      <div class="campos">
        <label for="cedula">Cedula</label>
        <input
          id="cedula"
          type="text"
          v-model="cedula"
          placeholder="ingrese cedula"
        />
      </div>
      <div class="campos">
        <label for="nombre">Nombre</label>
        <input
          id="nombre"
          type="text"
          v-model="nombre"
          placeholder="ingrese nombre"
        />
      </div>
      <div class="campos">
        <label for="apellido">Apellido</label>
        <input
          id="apellido"
          type="text"
          v-model="apellido"
          placeholder="ingrese apellido"
        />
      </div>
      <div class="campos">
        <label for="provincia">Provincia</label>
        <input
          id="provincia"
          type="text"
          v-model="provincia"
          placeholder="ingrese provincia"
        />
      </div>
      <div class="button">
        <button @click="guardarEstudiante">Actualizar</button>
      </div>
    </div>
  </div>
</template>

<script>
import { actualizarEstudianteFachada } from "@/modules/estudiante/helpers/EstudianteCliente";

export default {
  data() {
    return {
      id: null,
      cedula: null,
      nombre: null,
      apellido: null,
      provincia: null,
    };
  },
  methods: {
    actualizarEstudiante() {
      const data = {
        cedula: this.cedula,
        nombre: this.nombre,
        apellido: this.apellido,
        provincia: this.provincia,
      };
      actualizarEstudianteFachada(data, this.id);
    },
  },
};
</script>

<style scoped src="../css/formulario.css"></style>
