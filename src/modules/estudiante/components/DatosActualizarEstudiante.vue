<template>
  <div class="datos-estu-cont">
    <div class="datos-estudiante">
      <label for="id">Id</label>
      <input id="id" type="text" v-model="id" placeholder="ingrese id" />
      <label for="cedula">Cedula</label>
      <input
        id="cedula"
        type="text"
        v-model="cedula"
        placeholder="ingrese cedula"
      />
      <label for="nombre">Nombre</label>
      <input
        id="nombre"
        type="text"
        v-model="nombre"
        placeholder="ingrese nombre"
      />
      <label for="apellido">Apellido</label>
      <input
        id="apellido"
        type="text"
        v-model="apellido"
        placeholder="ingrese apellido"
      />
      <label for="provincia">Provincia</label>
      <input
        id="provincia"
        type="text"
        v-model="provincia"
        placeholder="ingrese provincia"
      />
      <button @click="guardarEstudiante">Guardar</button>
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
