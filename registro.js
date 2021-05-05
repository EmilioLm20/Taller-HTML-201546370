document.getElementById("form1").addEventListener("submit", registrarBebida);

function registrarBebida(e) {
  let bebidas = document.getElementById("bebidas").value;
  let marca = document.getElementById("marca").value;
  let presentacion = document.getElementById("presentacion").value;
  let comentario = document.getElementById("comentario").value;

  let Bebida = {
    bebidas: bebidas,
    marca: marca,
    presentacion: presentacion,
    comentario: comentario,
  };

  console.log(Bebida);

  document.getElementById("form1").reset();
  e.preventDefault();
}