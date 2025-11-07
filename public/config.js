// /public/config.js
// Cambia la URL según tu entorno. En prod, puedes servir este archivo con la URL del backend ya puesta.
window.ENV = {
  // Ejemplos:
  // API_BASE_URL: "http://localhost:3000/api",
  // API_BASE_URL: "https://api.tudominio.com",
  API_BASE_URL: "/api" // Recomendado si vas a usar proxy /api → backend (evita CORS)
};
