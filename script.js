const addItemButton = document.querySelector("#addItemButton");
const cartBody = document.querySelector("#cartBody");
const totalValueSpan = document.querySelector("#totalValue");

// Creamos un array vacío para almacenar los artículos
let cartItems = [];

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
    // Agrega el nuevo artículo al carrito
    const newCartItem = {
      nombre: nombreArticulo,
      precio: precioArticulo,
      cantidad: cantidadArticulo,
    };
    cartItems.push(newCartItem);

    // Actualiza el valor total
    const newCartItemTotal = precioArticulo * cantidadArticulo;
    const cartItemsTotal = cartItems.reduce(
      (total, item) => total + item.precio * item.cantidad,
      0
    );

    // Agrega una nueva fila a la tabla
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
      <td>${nombreArticulo}</td>
      <td>${precioArticulo}</td>
      <td>${cantidadArticulo}</td>
      <td>${newCartItemTotal}</td>
    `;
    cartBody.appendChild(newRow);

    // Actualiza el valor total en la página
    totalValueSpan.textContent = cartItemsTotal;
  }
});

// Ejemplo de cómo utilizar forEach
cartItems.forEach((item) => console.log(item));

// Ejemplo de cómo utilizar map para obtener un array con los precios
const precios = cartItems.map((item) => item.precio);

// Ejemplo de cómo utilizar reduce para obtener el valor total de todos los artículos
const total = cartItems.reduce(
  (total, item) => total + item.precio * item.cantidad,
  0
);

// Ejemplo de cómo utilizar find para buscar un artículo por su nombre
const itemBuscado = cartItems.find(
  (item) => item.nombre === "nombreDelArticulo"
);

// Ejemplo de cómo utilizar filter para obtener un array con los artículos que cumplen una condición
const itemsFiltrados = cartItems.filter((item) => item.precio > 10);
