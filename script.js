const addItemButton = document.querySelector("#addItemButton");
const cartBody = document.querySelector("#cartBody");
const totalValueSpan = document.querySelector("#totalValue");

// Array vacio para poder trabajar con los valores

let cartItems = [];

addItemButton.addEventListener("click", function () {
  // Consulta nueva info a valor

  const nombreArticulo = prompt("Ingrese el nombre del artículo:");
  const precioArticulo = parseFloat(
    prompt("Ingrese el precio de " + nombreArticulo + ":")
  );
  const cantidadArticulo = parseInt(
    prompt("Ingrese la cantidad de " + nombreArticulo + ":")
  );

  // Verifico que sea mayor a 0

  if (cantidadArticulo > 0) {
    // Agrego nuevo valor al carrito

    const newCartItem = {
      nombre: nombreArticulo,
      precio: precioArticulo,
      cantidad: cantidadArticulo,
    };
    cartItems.push(newCartItem);

    // Actualizo el Total

    const newCartItemTotal = precioArticulo * cantidadArticulo;
    const cartItemsTotal = cartItems.reduce(
      (total, item) => total + item.precio * item.cantidad,
      0
    );

    // Agrego nueva fila a tabla

    const newRow = document.createElement("tr");
    newRow.innerHTML = `
      <td>${nombreArticulo}</td>
      <td>${precioArticulo}</td>
      <td>${cantidadArticulo}</td>
      <td>${newCartItemTotal}</td>
    `;
    cartBody.appendChild(newRow);

    // Actualiza el valor final

    totalValueSpan.textContent = cartItemsTotal;
  }
});

// Cambiar para Utilizar forEach

cartItems.forEach((item) => console.log(item));

// Cambiar para utilizar Map

const precios = cartItems.map((item) => item.precio);

// Cambiar para utilizar Reduce

const total = cartItems.reduce(
  (total, item) => total + item.precio * item.cantidad,
  0
);

// Cambiar para utilizar Find

const itemBuscado = cartItems.find(
  (item) => item.nombre === "nombreDelArticulo"
);

// Cambiar para utilizar Filter

const itemsFiltrados = cartItems.filter((item) => item.precio > 10);
