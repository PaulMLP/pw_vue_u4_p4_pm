import axios from "axios";

/* Fachadas */

const obtenerEstudianteFachada = async (cedula) => {
  return await obtenerEstudianteAPI(cedula);
};

const ingresarEstudianteFachada = (bodyEstudiante) => {};

const actualizarEstudianteFachada = (bodyEstudiante, id) => {};

const eliminarEstudianteFachada = (id) => {};

/* Lambdas */

const obtenerEstudianteAPI = async (cedula) => {
  const data = await fetch(
    `http://localhost:8081/API/v1.0/Matricula/estudiantes/${cedula}`
  ).then((r) => r.json());
  console.log(data);
};

export {
  obtenerEstudianteFachada,
  ingresarEstudianteFachada,
  actualizarEstudianteFachada,
  eliminarEstudianteFachada,
};
