import axios from "axios";

/* Fachadas */

const obtenerEstudianteFachada = async (cedula) => {
  return await obtenerEstudianteAPIAxios(cedula);
};

const ingresarEstudianteFachada = (bodyEstudiante) => {
  ingresarEstudiante(bodyEstudiante);
};

const actualizarEstudianteFachada = (bodyEstudiante, id) => {
  actualizarEstudiante(bodyEstudiante, id);
};

const eliminarEstudianteFachada = async (id) => {
  return await eliminarEstudiante(id);
};

/* Lambdas para CRUD */

const obtenerEstudianteAPI = async (cedula) => {
  return await fetch(
    `http://localhost:8081/API/v1.0/Matricula/estudiantes/${cedula}`
  ).then((r) => r.json());
};

const obtenerEstudianteAPIAxios = async (cedula) => {
  const data = axios
    .get(`http://localhost:8081/API/v1.0/Matricula/estudiantes/${cedula}`)
    .then((r) => r.data);
  console.log(data);
  return data;
};

const ingresarEstudiante = (bodyEstudiante) => {
  axios
    .post(
      `http://localhost:8081/API/v1.0/Matricula/estudiantes`,
      bodyEstudiante
    )
    .then((r) => r.data);
};

const actualizarEstudiante = (bodyEstudiante, id) => {
  axios
    .put(
      `http://localhost:8081/API/v1.0/Matricula/estudiantes/${id}`,
      bodyEstudiante
    )
    .then((r) => r.data);
};

const eliminarEstudiante = async (id) => {
  const data = axios
    .delete(`http://localhost:8081/API/v1.0/Matricula/estudiantes/${id}`)
    .then((r) => r.data);
  return data;
};

export {
  obtenerEstudianteFachada,
  ingresarEstudianteFachada,
  actualizarEstudianteFachada,
  eliminarEstudianteFachada,
};
