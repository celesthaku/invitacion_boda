// === SECCIÓN 3: CUENTA REGRESIVA ===

// Establecemos la fecha y hora del evento (23 de septiembre de 2025 a las 12:00)
const objetivo = new Date("2025-09-13T12:00:00").getTime();

/**
 * Esta función calcula cuánto falta para la fecha del evento y
 * actualiza el contenido HTML de los elementos con los IDs: dias, horas y minutos.
 */
function actualizarCuenta() {
  const ahora = new Date().getTime(); // Fecha y hora actual en milisegundos
  const diferencia = objetivo - ahora; // Diferencia entre la fecha objetivo y el presente

  // Cálculo de tiempo restante
  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diferencia / (1000 * 60)) % 60);

  // Mostrar valores en el DOM
  document.getElementById("dias").textContent = dias.toString().padStart(2, '0');
  document.getElementById("horas").textContent = horas.toString().padStart(2, '0');
  document.getElementById("minutos").textContent = minutos.toString().padStart(2, '0');
}

// Llamamos a la función una vez al cargar la página
actualizarCuenta();

// Y luego la ejecutamos cada 60 segundos (1 minuto)
setInterval(actualizarCuenta, 60000);



document.addEventListener('DOMContentLoaded', () => {
  const audio = document.getElementById('audio-musica');
  const boton = document.getElementById('boton-musica');
  const progreso = document.getElementById('progreso-audio');

  let reproduciendo = false;

  boton.addEventListener('click', () => {
    if (!reproduciendo) {
      audio.play();
      boton.textContent = '⏸';
      reproduciendo = true;
    } else {
      audio.pause();
      boton.textContent = '▶';
      reproduciendo = false;
    }
  });

  audio.addEventListener('timeupdate', () => {
    const porcentaje = (audio.currentTime / audio.duration) * 100;
    progreso.style.width = `${porcentaje}%`;
  });

  audio.addEventListener('ended', () => {
    boton.textContent = '▶';
    reproduciendo = false;
    progreso.style.width = '0%';
  });
});

