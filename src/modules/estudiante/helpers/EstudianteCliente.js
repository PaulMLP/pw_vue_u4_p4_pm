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

const token =
  "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJQYXVsIiwiaWF0IjoxNjkyNzUxMTk4LCJleHAiOjE2OTI3NTIxOTh9.eQxTKicXzjAPHpOJ7zciwE9rqdoT8ETkxHNLAQkBfGFauGXgMY6Deyefp0GpN0tIQRwAqbxTPruDsR66Lzi07w";

const obtenerEstudianteAPI = async (cedula) => {
  return await fetch(
    `http://localhost:8082/API/v1.0/Matricula/estudiantes/${cedula}`
  ).then((r) => r.json());
};

const obtenerEstudianteAPIAxios = async (cedula) => {
  //En el config vamos a enviar todos los datos de cabecera
  const headers = {
    Authorization: `Bearer ${token}`,
    Mensaje: "Valor 1",
  };
  const data = axios
    .get(`http://localhost:8082/API/v1.0/Matricula/estudiantes/${cedula}`, {
      headers: headers,
    })
    .then((r) => r.data);
  console.log(data);
  return data;
};

const ingresarEstudiante = (bodyEstudiante) => {
  const headers = {
    Authorization: `Bearer ${token}`,
    Mensaje: "Valor 1",
  };
  axios
    .post(
      `http://localhost:8082/API/v1.0/Matricula/estudiantes`,
      bodyEstudiante,
      { headers: headers }
    )
    .then((r) => r.data);
};

const actualizarEstudiante = (bodyEstudiante, id) => {
  const headers = {
    Authorization: `Bearer ${token}`,
    Mensaje: "Valor 1",
  };
  axios
    .put(
      `http://localhost:8082/API/v1.0/Matricula/estudiantes/${id}`,
      bodyEstudiante,
      { headers: headers }
    )
    .then((r) => r.data);
};

const eliminarEstudiante = async (id) => {
  const headers = {
    Authorization: `Bearer ${token}`,
    Mensaje: "Valor 1",
  };
  const data = axios
    .delete(`http://localhost:8082/API/v1.0/Matricula/estudiantes/${id}`, {
      headers: headers,
    })
    .then((r) => r.data);
  return data;
};

export {
  obtenerEstudianteFachada,
  ingresarEstudianteFachada,
  actualizarEstudianteFachada,
  eliminarEstudianteFachada,
};
