const addItemButton = document.querySelector("#addItemButton");
const cartBody = document.querySelector("#cartBody");
const totalValueSpan = document.querySelector("#totalValue");
let valorTotal = 0;

addItemButton.addEventListener("click", function () {
  // Pide la información del nuevo artículo
  const nombreArticulo = prompt("Ingrese el nombre del artículo:");
  const precioArticulo = parseFloat(
    prompt("Ingrese el precio de " + nombreArticulo + ":")
  );
  const cantidadArticulo = parseInt(
    prompt("Ingrese la cantidad de " + nombreArticulo + ":")
  );

  // Verifica que la cantidad sea mayor a 0
  if (cantidadArticulo > 0) {
    // Actualiza el valor total
    valorTotal += precioArticulo * cantidadArticulo;

    // Agrega una nueva fila a la tabla
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
      <td>${nombreArticulo}</td>
      <td>${precioArticulo}</td>
      <td>${cantidadArticulo}</td>
      <td>${precioArticulo * cantidadArticulo}</td>
    `;
    cartBody.appendChild(newRow);

    // Actualiza el valor total en la página
    totalValueSpan.textContent = valorTotal;
  }
});
