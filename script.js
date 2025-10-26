const canvas = document.getElementById("plano");
const ctx = canvas.getContext("2d");

let cuadros = [];

function agregarCuadro() {
  const x = Math.random() * (canvas.width - 100);
  const y = Math.random() * (canvas.height - 100);
  const ancho = 100;
  const alto = 60;
  cuadros.push({ x, y, ancho, alto });
  dibujar();
}

function limpiarPlano() {
  cuadros = [];
  dibujar();
}

function dibujar() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  cuadros.forEach(cuadro => {
    ctx.fillStyle = "#4CAF50";
    ctx.fillRect(cuadro.x, cuadro.y, cuadro.ancho, cuadro.alto);
    ctx.strokeStyle = "#000";
    ctx.strokeRect(cuadro.x, cuadro.y, cuadro.ancho, cuadro.alto);
  });
}
