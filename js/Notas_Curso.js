//Para un comentario
/*
Para un comentario de varias lineas.
*/
alert("Hola mundo");

/*-------------------------------------------------------------------------------------------------------------------- */

//CREACION DE VARIABLES
//NOTA: al crear varialbles importan las minusculas y mayusculas, si se declara en minusculas hay que llamarlas despues de la misma forma

var producto = 'Audifonos Gamer'; //primero la palabra reservada var, luego el nombre de la variable, luego se asigna el valor. Esta es la forma que ya no se usa
var disponible;  // iniciamos la variable sin valor, para asignarlo despues.
//En JavaScript no es necesario declarar el tipo de dato a la variable ya que es un lenguaje de tipo dinamico.
//En JS no se compila el codigo, se compila en la ejecucion.

//producto = true; //reasignado el valor de la variable.

var producto1 = 'Computadora',
    disponible1 = true,
    categoria = 'computadoras';  //para crear multiples variables a la vez.
    
/*-------------------------------------------------------------------------------------------------------------------- */

//REGLAS DE LAS VARIABLES: Pueden tener letras, numeros o caracteres, pero tienen que inicializar con letras.
//Estilo para las variables:
var nombre_producto = 'Monitor HD'; //estilo Underscore
var nombreProducto = 'Monitor HD'; //estilo Camelcase es el mas famoso y mas utilizado a la fecha.
var NombreProducto = 'Monitor HD'; //estilo Pascalcase. Se utiliza mas que todo cuando se va a crea una clase

console.log(producto);
console.log(producto1);

//La forma de crear variable  mas recomendable  es con let y const,
//La creación de variables con let no tiene diferencia en las reglas comparada con la forma de var, siguen las mismas reglas.
let nombre_producto = 'Monitor HD'; //estilo Underscore
let nombreProducto = 'Monitor HD'; //estilo Camelcase es el mas famoso y mas utilizado a la fecha.
let NombreProducto = 'Monitor HD'; //estilo Pascalcase. Se utiliza mas que todo cuando se va a crea una

/*Creacion de variables con conts, NOTA: no se puede inicializar una variable sin valor, ni se puede reutilizar una variable.
Se recomienda utilizar const cuando se va declarar una variable que no va ser modificada con el tiempo 
*/
const producto = 'auricular'; //esta variable no va cambiar ni se va poder reutilizar.
const producto1 = 'Monitor de 30 pulgadas'; //se conoce como un constructor
const producto3 = String('Monitor de 40 pulgadas'); //una forma no muy comun de crear el string, se utiliza mas la anterior.

/*-------------------------------------------------------------------------------------------------------------------- */

//METODOS PARA LOS STRING

const produto = 'Monitor de 20"';
const proudcto2 = 'Monitor HD';

console.log(producto);  //el valor en el parentesis es una funcion.
console.log(producto.length)  //si despues de la función hay un punto lo que sigue despues del puento se convierte en un metodo.
                            /*El .length sirve para contar cuntos caracteres tiene la cadena de texto de la función.
                            El .length es un de los pocos metodos que no llevan parentesis porque no es un metodo como tal*/
console.log(producto2); 

// indexof  -- nos dice en que posición se encuentra un texto que estemos buscando
const tweet = 'Esta es una cadena de texto'

console.log(tweet.indexOf('cadena'));  //sirve tambien para ver si exites esa palabra o cadena de texto.

// includes  -- Retorna true o false del resultado, ejemplo.
const tweet = 'Esta es una cadena de texto';

console.log(tweet.includes('cadena'));

/*-------------------------------------------------------------------------------------------------------------------- */

/*NUMEROS Y OPERADORES
En Javascritp todos los numeros son tratados por igual ya sean enteros, flotantes o fracciones  */
const numero = 100;
const numero2 = 200;

console.log(numero);  //Nota; si el resultado en consola es azul = son numereos, si el resultado es color negro = son string
console.log(numero + numero2);
console.log(numero2 - numero);
console.log(numero * numero2);
console.log(numero2 / numero);
console.log(numero2 & numero);  //se conoce como modulo, ES IMPORTANTE PARA ENTREVISTAS DE TRABAJO, hace una division y nos retorna
                                // el residuo de la division, forma parte para entrevistas de trabajo.
/*-------------------------------------------------------------------------------------------------------------------- */

/* Objeto MATH 
math tiene muchos metodos, entre ellos veremos los siguientes;*/

let resultado;

resultado = Math.PI;  // muestra el resultado de PI
resultado = Math.round(2.2);  //sirve para redondear un numero con decimales.
resultado = Math.ceil(2.2);  // Ceil siempre va redondear hacia arriba no importa el decimal, sire para forzar un redondeo en un proyecto.
resultado = Math.floor(2.9);  // floor siempre a redondear hacia abajo no importa el decimal.
resultado = Math.sqrt(9);  //Imprime la raiz cuadrada.
resultado = Math.abs(-5);  //convierte el numero negativo a positivo.
resultado = Math.min(4,6,3,8,7,33);  // va mostrar el numero menor de la lista de numeros.
resultado = Math.max(4,6,3,8,7,33);  // va mostrar el numero mayor de la lista de numeros.
resultado = Math.random(); //random genera un numero aleatorio
resultado = Math.floor(Math.random() *30); // genera un numero aleatorio que es redondeado hacia abajo y lo multiplica por 30.

console.log(resultado);

/*-------------------------------------------------------------------------------------------------------------------- */

/*CONTROLAR EL ORDEN DE LAS OPERACIONES 
  Es importante saber el orden de las operaciones, aqui unos ejemplos para que los operadores se ejecuten en la formaque
  los vamos a requerir y no en el orden del compilador.;  */

  let resultado;

resultado = 2 + 3 * 4;  // si lo dejamos de esta forma, primero se van a multiplicar y luego a sumar, resultado = 14
resultado = (2 + 3) * 4; // Si queremos que se ejecuten en el orden que los necesitamos, se usan parenteisis, resultado = 20

resultado = (375 + 500 + 425 + 25) * .05; /* Esta operacion seria por ejemplo en una tienda virtual, se suman los productos mas el 
                                            envio y al final se le aplica un % o.05 de descuento, la operacion va mostrar el
                                            resultado del descuento que se va aplicar al total a pagar. */

console.log(resultado);

/*-------------------------------------------------------------------------------------------------------------------- */
//INCREMENTOS

let producto = 10;
producto ++; // el ++ va incrementar en 1 el valor de la varialble.
++producto; // igual va incrementar +1
producto --;  // Va restar -1, por ejemplo en una tienda virtual, se van ir restando los productos en exitencia.
producto-= 5; // nos va servir si un cliente compra 5 productos se van a restar del producto en exitencia.

console.log(--producto); //Aca tambien se puede usar el -- o ++ 

/*-------------------------------------------------------------------------------------------------------------------- */
/*CONCATENACION Y TEMPLATE STRINGS; La concatenacion es importante porque cuando tenemos una base de datos, los datos que
vamos o podemos necesitar van estar separados y hay que realizar una concatenacion para mostrar los datos juntos. */

const nombre = 'Didier';
const correo = 'didier@gmail.com'

//TEMPLATES STRINGS Esta es la forma de concatenar que mas se utiliza en la actualidad
console.log(`Nombre: ${nombre} Correo: ${correo}`); //El signo $ en JavaScript indica que despues del signo viene una variable o una funcion

//CONCATENACION  Esta es la forma que se concatenaba antes
console.log("Nombre: " + nombre + " Correo: " + correo);

/*-------------------------------------------------------------------------------------------------------------------- */
/* BOOLEANS - booleanos para que nos pueden servir; ejemplo si en un sistema un usuario no esta autenticado no podra
tener acceso si retorna false y si retorna true podra tener acceso a cierta información. */
const boolean1 = true;
const boolean2 = false;

console.log(boolean1);
console.log(boolean2);

/*-------------------------------------------------------------------------------------------------------------------- */
/* OBJETOS (Lo que más se utiliza en JavaScript y seria la parte central)  */

//Objeto, puede tener n cantidad de variables dentro del objeto, esta es su sintaxis.
const producto = {
  NombreProducto : "smartwach HW12",
  Precio : 425,
  disponible : true 
}

console.log(producto);

//Sintaxis de punto, para acceder a una variable/propiedad del objeto
console.log(producto.disponible);
console.log(producto.NombreProducto);

//Otra forma de llamar una propiedad del objeto seria;
console.log(producto['Precio']);

/*-------------------------------------------------------------------------------------------------------------------- */
/*MODIFICAR OBJETOS */

const producto = {
  NombreProducto : 'smartwach HW12',
  Precio : 425,
  disponible : true
}
//Agregar nuevas propiedades
producto.imagen = 'imagen.jpg';

//Eliminar propiedades
delete producto.disponible;

console.log(producto);

/*-------------------------------------------------------------------------------------------------------------------- */
/* DESTRUCTURING DE OBJETOS (destructor de objetos*/

  const producto = {
    nombreProducto : 'smartwach HW12',
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

/*-------------------------------------------------------------------------------------------------------------------- */
/*OBJECT METHODS */

/*-------------------------------------------------------------------------------------------------------------------- */
/* */

/*-------------------------------------------------------------------------------------------------------------------- */
/* */

/*-------------------------------------------------------------------------------------------------------------------- */
/* */


/*-------------------------------------------------------------------------------------------------------------------- */
/* */


/*-------------------------------------------------------------------------------------------------------------------- */
/* */