// Validación del formulario de contacto
document.getElementById('form-contacto').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();
  
    if (!nombre || !email) {
      alert('Por favor completá tu nombre y correo electrónico.');
      return;
    }
  
    alert('¡Gracias por contactarnos, ' + nombre + '! Te responderemos pronto.');
    this.reset();
  });
  
  // Acción al hacer clic en el botón de inscripción
  document.getElementById('btn-inscribirse').addEventListener('click', function () {
    alert('¡Te inscribiste correctamente! Pronto recibirás más información por correo.');
  });
  