function playSonido(idElementoAudio) {
  document.querySelector(idElementoAudio).play();
}

/* document.querySelector('.tecla_pom').onclick = playSonidoPom; */

const listaDeTeclas = document.querySelectorAll(".tecla");

for (let i = 0; i < listaDeTeclas.length; i++) {
  const tecla = listaDeTeclas[i];
  const instrumento = tecla.classList[1];
  console.log(instrumento);

  const idAudio = `#sonido_${instrumento}`;
  console.log(idAudio);

  tecla.onclick = function () {
    playSonido(idAudio);
  };

  tecla.onkeydown = function (evento) {
    if (evento.code === "Enter" || evento.code === 'Space') {
      tecla.classList.add("activa");
    }
  };

  tecla.onkeyup = function () {
    tecla.classList.remove("activa");
  };
}
