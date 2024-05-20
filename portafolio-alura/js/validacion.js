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
  