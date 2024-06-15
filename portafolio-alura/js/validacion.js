document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita el envío del formulario por defecto

  // Validación de campos
  let nombre = document.getElementById('nombre').value.trim();
  let email = document.getElementById('email').value.trim();
  let numero = document.getElementById('numero').value.trim();
  let asunto = document.getElementById('asunto').value.trim();
  let mensaje = document.getElementById('mensaje').value.trim();

  // Validar campos vacíos
  if (!nombre || !email || !numero || !asunto || !mensaje) {
      alert('Por favor, complete todos los campos.');
      return;
  }

  // Validar formato de correo electrónico
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
      alert('Por favor, ingrese un correo electrónico válido.');
      return;
  }

  // Validar que el nombre solo contenga letras
  let nombreRegex = /^[a-zA-Z\s]+$/;
  if (!nombreRegex.test(nombre)) {
      alert('Por favor, ingrese un nombre válido. Solo se permiten letras y espacios.');
      return;
  }

  // Validar que el número solo contenga dígitos
  let numeroRegex = /^\d+$/;
  if (!numeroRegex.test(numero)) {
      alert('Por favor, ingrese un número válido. Solo se permiten dígitos.');
      return;
  }

  // Crear el enlace mailto
  let mailtoLink = `mailto:tu_correo@example.com?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent('Nombre: ' + nombre + '\nCorreo: ' + email + '\nNúmero: ' + numero + '\n\n' + mensaje)}`;

  // Abrir el cliente de correo con el enlace mailto
  window.location.href = mailtoLink;
});