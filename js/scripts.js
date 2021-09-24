const producto = {
    nombreProducto : ' smartwach HW12',
    precio : 425,
    disponible : true
}

//forma anterior de aplicar el destructor de objetos
const precioProducto = producto.precio;
const productoDisponible = producto.disponible;

console.log(precioProducto);
console.log(productoDisponible);

//Destructuring (la forma mas reciente), sacar de una estructura
const {precio, nombreProducto} = producto;   //para que destructuring funcione, tiene que tener el mismo nombre la propiedad del objeto.

console.log(precio);
console.log(nombreProducto);