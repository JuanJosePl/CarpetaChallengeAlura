<<<<<<< HEAD
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
=======
document.addEventListener('DOMContentLoaded', () => {
    const btnEnviar = document.getElementById('btn-enviar');
  
    const validacion = (e) => {
      e.preventDefault();
      const nombreDeUsuario = document.getElementById('nombre');
      const direccionEmail = document.getElementById('email');
      const asuntoText = document.getElementById('asunto');
      const mensajeCorreo = document.getElementById('mensaje');
      
      if (nombreDeUsuario.value.trim() === "") {
        alert("Por favor, escribe tu nombre de usuario.");
        nombreDeUsuario.focus();
        return false;
      }
  
      if (direccionEmail.value.trim() === "") {
        alert("Por favor, escribe tu correo electrónico.");
        direccionEmail.focus();
        return false;
      }
  
      if (!emailValido(direccionEmail.value)) {
        alert("Por favor, escribe un correo electrónico válido.");
        direccionEmail.focus();
        return false;
      }
  
      if (asuntoText.value.trim() === "") {
        alert("Por favor, escribe el asunto.");
        asuntoText.focus();
        return false;
      }
  
      if (mensajeCorreo.value.trim() === "") {
        alert("Por favor, escribe tu mensaje.");
        mensajeCorreo.focus();
        return false;
      }
  
      // Si todo es válido, puedes enviar el formulario.
      alert("Formulario enviado correctamente.");
      // Aquí puedes enviar los datos del formulario al servidor, por ejemplo:
      // e.target.submit();
    }
  
    const emailValido = (email) => {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
  
    btnEnviar.addEventListener('click', validacion);
  });
  
>>>>>>> 1193d4f63cb7b069488b16be0d2155a4badf4d80
