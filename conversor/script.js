const boton = document.getElementById("convertir");
const resultado = document.getElementById("resultado");

boton.addEventListener("click", () => {
  const valor = document.getElementById("valor").value;
  const tipo = document.getElementById("tipo").value;

  if (valor === "") {
    resultado.textContent = "Por favor, introduce un número.";
    resultado.classList.add("mostrar");
    return;
  }

  let conversion;

  // Reiniciamos animación
  resultado.classList.remove("mostrar");

  setTimeout(() => {
    if (tipo === "c-f") {
      conversion = (valor * 9 / 5) + 32;
      resultado.textContent = `${valor} °C = ${conversion.toFixed(2)} °F`;
    } else {
      conversion = (valor - 32) * 5 / 9;
      resultado.textContent = `${valor} °F = ${conversion.toFixed(2)} °C`;
    }

    resultado.classList.add("mostrar");
  }, 100);
});
