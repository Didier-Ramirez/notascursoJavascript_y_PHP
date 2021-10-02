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
/* OBJETOS (Lo que más se utiliza en JavaScript y seria la parte central)  
Los objetos se crean con {llaves}   */

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
/*OBJECT METHODS 
Para prevenir que un objeto sea modificado se utiliza la siguiente funcion*/

"use strint";  //Ejecuta el codigo JS de forma estricta para seguir las buenas practicas

const producto = {
    nombreProducto : 'smartwach HW12',
    precio : 425,
    disponible : true
}

Object.freeze(producto); //Congela para que no se puede agregar mas propiedades ni modificar el objeto, ni eliminar las propiedades
producto.imagen = 'imagen.jpg';
//console.log(Object.isFrozen(producto));
console.log(producto);


Object.seal(producto); //No permite agregar, eliminar pero si permite modificar los existentes a direrencia de freeze
producto.precio = 400;

console.log(producto);


/*-------------------------------------------------------------------------------------------------------------------- */
/*UNIR DOS OBJETOS CON EL SPREAD OPERATOR
NOTA: cuando unes dos objetos es importante no modificar ninguno de los dos*/

const producto = {
  nombreProducto : 'smartwach HW12',
  precio : 425,
  disponible : true
}

const productodetalle = {
  serie : 'ip6',
  color : 'blanco',
  tamaño : '44 mm',
}

//Las buenas practicas es no modificar los datos originales
const unionproductos = {...producto, ...productodetalle};  //los tres puntos ... representa el Spread Operator para unir los dos objetos.

console.log(producto);
console.log(productodetalle);

console.log(unionproductos); //muestra la union de los dos objetos con el Spread Operator


/*-------------------------------------------------------------------------------------------------------------------- */
/*ARRAYS - arreglos
los arreglos al igual que los objetos forman parte importante en cualquier lenguaje de programación
EJEMPLO DE ARRAYS; un carrito de compras, sirven para agrupar elementos del mismo tipo o relacionados
Los arreglos se crean con [corchetes]*/

const productosreloj = ['HW12', 'w26 plus', 'HW16', 'HW22 plus'];
//const productos = new Array('HW12', 'w26 plus', 'HW16', 'HW22 plus'); //Otra forma que se utiliza o utilizaba para crear los arrays

//NOTA; En los arrays se puede almacenar todo tipo de datos, ejemplo

const arreglocompletoproductos = [
                                  "Smartwach", 'relojes analogos', 'auriculares', 'baterias',
                                  10, 30, 22, 12, 63,
                                  true, false, null, 
                                  {objetprueba : 'objeto dentro de un array', modelo : "HW12", serie: 'ip 6', precio: 425},
                                  [2, 5, 32, 'array dentro de un array']
                                 ]; //dentro del array almacenamos varios tipos de datos con esta sintaxis.

//console.table(productosreloj);  //el .table  imprime en forma de tabla

console.table(arreglocompletoproductos);

//Acceder a los valores de un arreglo
console.log(arreglocompletoproductos[3]);
console.log(arreglocompletoproductos[13]); //lo que va dentro del [] es el numero de indice que se muestra en la tabla de la consola o sea la posicion 


//Conocer la extensión de un arreglo
console.log(arreglocompletoproductos.length);  

//Recorrer arreglos, muestra todo lo que contiene el array con la siguiente sintaxis
//EJEMPLO EN LA VIDA REAL; no puede servir para hacer un recorrido en un carrito de compras y que muestre todo lo que se agrego al arreglo (se agrego al carrito)
arreglocompletoproductos.forEach(function(arreglocompleto) {  //forEach se encarga de hacer el recorrido en JS, se ejecuta una vez por cada elemento en el arreglo
    console.log(arreglocompleto)
});

/*-------------------------------------------------------------------------------------------------------------------- */

/* METOS PARA LOS ARRAYS
   Son muy eficinetes por ejemplo en un carrito de compras, se pueden agragar o eliminar datos del arreglo */

   const productosreloj = ['HW12', 'w26 plus', 'HW16', 'HW22 plus'];
//const productos = new Array('HW12', 'w26 plus', 'HW16', 'HW22 plus'); //Otra forma que se utiliza o utilizaba para crear los arrays

//NOTA; En los arrays se puede almacenar todo tipo de datos, ejemplo


//Push Agrega un elemento al final del arreglo, con este metodo push se modifica el arreglo original (No es una buena practica)
productosreloj.push('smartwach L11', 'Se pueden agregar mas valores en el mismo metodo');

// unshift Agrega un elemento al inicio del arreglo, con este metodo unshift se modifica el arreglo original (No es una buena practica)
productosreloj.unshift('smartwach k33');

// Pop elimina el último elemento del arreglo
productosreloj.pop();   //Si no le damos un valor adentro de pop elimina el ultimo registro del arreglo
productosreloj.shift();  //Si no le damos un valor adentro de pop elimina el primer registro del arreglo
productosreloj.splice(3,1);  // el 3 es el indice del arreglo (valor 4), el 1 la cantidad de registros que va eliminar apartir del indice indicado

console.table(productosreloj);

/*NOTA; una buena practica es crear un nuevo objeto para modificarlo, sin modificar los datos originales del objeto,
se utiliza mucho en la actualidad  que serian;
Rest Operator o Sread Operator*/

const nuevoproductosreloj = ['nuevo producto modificado al inicio', ...productosreloj, 'nuevo producto modificado al final'];  //los 3 puntos ... significan copiar lo siguiente, agrega al final del arreglo
//Para simular el push; [...productosreloj, 'nuevo producto'];
//Para simular el unshift; ['nuevo producto', ...productosreloj];
//En el ejemplo agrege 2 valores, uno al inicio y uno al final del nuevo arreglo.


console.table(nuevoproductosreloj);

/*-------------------------------------------------------------------------------------------------------------------- */

/*MAS METODOS DE ARRAYS
En JavaScritp se puede tener una rreglo de objetos, por ejemplo para un carrito de compras */

const productosreloj = ['HW12', 'w26 plus', 'HW16', 'HW22 plus'];
//const productos = new Array('HW12', 'w26 plus', 'HW16', 'HW22 plus'); //Otra forma que se utiliza o utilizaba para crear los arrays


//Arreglo de objetos, cada producto es un objeto dentro del arreglo
const carrito = [
    {nombre: 'smartwach hw12', precio: 425},
    {nombre: 'smartwach w26 plus', precio: 375},
    {nombre: 'smartwach L11', precio: 400},
    {nombre: 'smartwach HW22', precio: 400},
    {nombre: 'smartwach W33', precio: 500},
    {nombre: 'smartwach X33', precio: 125},
];

/*forEach  se va ejecutar una vez por cada elemento que haye en el arreglo, NOTA; nos va servir para arreglos planos como el 
ejemplo de productosreloj*/

productosreloj.forEach(function(productosrel) //(va mostrar todos los elementos del arreglo)
{
console.table(productosrel);
});  

//Si queremos imprimir solo un producto del arreglo usamos una estructura de control
productosreloj.forEach(function(productorelojs){
if(productorelojs == 'HW16'){
    console.log('HW 16 si existe');
} 
});

/*Tambien podemos usar el metodo Includes que es igual al de forEach, NOTA; nos va servir para arreglos planos como el 
ejemplo de productosreloj*/
const resultado = productosreloj.includes('HW12');
console.table(resultado);  //va imprimir true si existe y false si no exite.


/* El metodo .some es ideal para arrego de objetos, por ejemplo el arreglo de carrito */
const resultado2 = carrito.some(function(productocarrito){
    return productocarrito.nombre === 'smartwach W33'
});
console.table(resultado2);  //va imprimir true si existe y false si no exite.

/*El metodo .reduce va tomar todos los valores de precio, los suma e imprime el resultado del total */
resultado3 = carrito.reduce(function(total, producto){
    return total + producto.precio
}, 0); // , 0);  esta indicando que inicie a sumar en el indice 0
console.table(resultado3);

/*El metodo .filter es el más util de todos los anteriores, sirve para obtener por ejemplo; todos los 
productos > productoX  o < productoX,  entre otros producto */
resultado4 = carrito.filter(function(productofil){
    return productofil.precio > 400
});

resultado5 = carrito.filter(function(productofilt){
    return productofilt.nombre === 'smartwach X33'  // === imprime todos los que son 'smartwach X33'   con !== imprime todos los que no son 'smartwach X33'
});
console.table(resultado4);
console.table(resultado5);


/*-------------------------------------------------------------------------------------------------------------------- */

/*FUNCIONES EN JAVASCRIPT, Las funciones en cada lenguaje de programación son una serie de procedimientos
o instrucciones que realizan una acción, una ventaja de las funciones es que permiten tener un codigo mas ordenado
y más facil de mantener y otra ventaja es que son reutilizables, se puede tener una función que valide un formulario
y utiliarla en todos los formularios , tambien tener una funcion que envie datos a un servidor y reutilizalar multiples veces.

Existen 3 formas de crear funciones, declaración de la función, expresión de la función y por ultimo lo que se conoce como iife*/


//Declaración de función
function sumar(){   //inicia con palabra reservada function, seguida del nombre, en el parentisis van los argumentos de la función
  console.log(10 +10);  //cuerpo de la función 
};
sumar();  //se llama la función.

//Expresión de la función
const sumar2 = function(){
  console.log( 3 * 3);
};
sumar2();

//IIFE
/*Esta funcion se manda llamar ella misma al final con ()      --No se recomienda reulizarse porque mas que todo sirven para 
proteger las variables que no se mezclen con otro archivo */
(function(){
  console.log('Esto es una función');
}) (); // los () manda a llamar a la función


/*-------------------------------------------------------------------------------------------------------------------- */

/* PREGUNTA PARA OBTENER TRABAJO DE DASARROLLADOR WEB
JavaScript se ejecuta en 2 vueltas, en la primera se registran todas las funciones y despues se registran los llamados a 
las funciones.
La primera etapa se le conoce como; de CREACION (o registro), ahi se registran las funciones y las variables
La segunda etapa se le conoce como; de EJECUCION, en esa se manda a llamar el codigo.*/

sumar();  //se llama la función y no da error porque la lee en la segunda etapa
function sumar(){   //inicia con palabra reservada function, seguida del nombre, en el parentisis van los argumentos de la función
  console.log(10 +10);  //cuerpo de la función 
};


sumar2();  // la imprime como no definida, ya que JS lo toma como una variable.
//Expresión de la función
const sumar2 = function(){
  console.log( 3 * 3);
};


/*-------------------------------------------------------------------------------------------------------------------- */

/* DIFERENCIA DE UN METODO Y UNA FUNCION
   - Si esta despues de la función seguidos de un parentesis, ejemplo (parseInt(numero2);   son FUNCIONES
   - Si esta despues de una variable o un objeto seguido de un punto ejemplo  numero.toString()  eso es un METODO    */

const numero1 = 20;
const numero2 = '20';

console.log(parseInt(numero2));  // parseIn()   es una función y convierte el '20' de string a dato numerico
console.log(numero1.toString()); //Este metodo convierte el dato numerico a string


/*-------------------------------------------------------------------------------------------------------------------- */

/* FUNCIONES CON PARAMETROS Y ARGUMENTOS*/


//Declaración de función
//En el caso que no se llamen todos los parametros, se utiliza un parametro por defaul para que de error, ejemplo: 
// sumar(numero1 = 0, numero2 = 0)     con eso evitamos el error a la hora que no usemos todos los parametros
function sumar(numero1 = 0, numero2 = 0){   //numero1 y numero2 son parametros.  Los parametros actuan como variables dentro de las funciones
  console.log(numero1 + numero2);  //
};
sumar(2, 2);  // Argumentos o valores reales (dentro de los parentesis)
sumar(4, ); //ejemplo que no llamemos todos los parametros.
sumar(3,8);




//Expresión de la función
const sumar2 = function(num1, num2){
  console.log( num1 * num2);
};
sumar2(4, 4);


/*-------------------------------------------------------------------------------------------------------------------- */

/* FUNCIONES QUE RETORNAN VALORES
   Para despues procesarlo o hacer algo mas con ese valor   */

   function sumar(num1, num2){
    return num1 + num2;
}
const resultado = sumar(2, 4);
//console.log(resultado);

//ejemplo de carrito 

let total = 0;

function agregarcarrito(precio){
    return total += precio;
}

function calcularImpuesto(total){
    return 1.15 * total;
}

total = agregarcarrito(200);
total = agregarcarrito(400);
total = agregarcarrito(600);

console.log(`Total productos: Q${total}`);

const totalApagar = calcularImpuesto(total);

console.log(`El total a pagar con impuestos es de: Q${totalApagar}`);


/*-------------------------------------------------------------------------------------------------------------------- */
/* METODOS DE PROPIEDAD
   tienen la sintaxis de un metodo, pero Siguen siendo funciones, llega a ser muy comunes porque mantienen toda
   la infomacion en un solo objeto, cuando creas un proyecto grande tienden a ser un buena opcion para estructurar un 
   proyecto */

   //metodo de propiedad

//Ejemplo de reproducto de musica 

const reproductor = {
  reproducir : function(id){
      console.log(`Reproduciendo canción con id: ${id}`);
  },
pausar : function(){  //se pueden agregar mas funciones al metodo de propiedad
  console.log(`Pausando...`);
},

crearPlayList : function(nombre){
  console.log(`Creando la PlayList : ${nombre}`);
},

agregarCancion : function(cancion){
  console.log(`Se agrego la canción: ${cancion}`);
}

}

reproductor.borrarCancion = function(id){  //Se pueden agregar mas funciones fuera del objeto
  console.log(`Eliminando la cancion No. ${20}`);
}

reproductor.reproduciendoPlaylist = function(playlist){
  console.log(`Reproduciendo la playlist: ${playlist}`)
}

reproductor.reproducir(123);  //le pasamos el parametro id
reproductor.pausar();
reproductor.borrarCancion();
reproductor.crearPlayList('Rock Chapin');
reproductor.agregarCancion('El norte - R. Andrade');
reproductor.reproduciendoPlaylist('Rock Chapin');

/*-------------------------------------------------------------------------------------------------------------------- */

/* ARROW FUNCTIONS - funciones de flecha
      */

const sumar2 = (num1, num2) => console.log(num1 + num2); // el arrow funtion hace mas pequeña la funcion
sumar2(2, 3);


const aprendiendo = tecnologia => console.log(`Aprendiendo ${tecnologia}`);
aprendiendo('JavaScript');  //el signo => sustituye el funtion()

/*-------------------------------------------------------------------------------------------------------------------- */

/* ESTRUCTURAS DE CONTROL 
    */

/*NOTA: el signo = significa que se esta asignando
                 == significa que esta comparando el dato o valor
                 === significa que va comparar el valor y el tipo de dato (es mas estricto que el ==)
                 !== significa que sea diferente a...
                 < menor que, > mayor que, =>   o =<
                */
                 const puntaje = 100;

                 if(puntaje == 100){
                     console.log(`Si, el puntaje es igual a: ${100}`);
                 }else {
                     console.log('El puntaje es incorrecto');
                 };
                 
                 //ejemplo de carrito
                 
                 const efectivo = 1000;
                 const carrito = 7100;
                 
                 if(efectivo > carrito){
                     console.log('El cliente si puede pagar!!');
                 } else {
                     console.log('El cliente no puede pagar :(  ');
                 }
                 
                 //EJEMPLO DE CONDICION ELSE IF
                 const rol = 'ADMINISTRADOR';  //Le asignamos el valor a rol, puede ser editor o de otra area para este ejemplo
                 
                 if( rol === 'ADMINISTRADOR'){
                     console.log('Eres Administrador, acceso permitido.');
                 }
                 else if(rol === 'EDITOR'){
                     console.log('Eres editor, solo puedes editar en el sistema');
                 } else{
                     console.log('Acceso denegado!!');
                 }
                 

/*-------------------------------------------------------------------------------------------------------------------- */

/* SWICH
  para multiples opciones, si solo hay una o 2 opciones es mejor usar un if
  pero si va ser de opcion multiple se recomienda usar el swich  */

  const metodoPago = 'efectivo';   //podria ser otro metodo del swich

switch(metodoPago){
    case 'tarjeta':
        console.log('Pagaste con tarjeta!! :)');
        break;

    case 'efectivo':
        console.log('Pago contra entrega en efectivo!!');
        break;

    case 'transferencia':
        console.log('Realizaste tu transferencia');
        break;

    case 'cheque':
        console.log('Se verificaran los fondos del cheque');
        break;

 default:
    console.log('No has realizado el pago!!');
  break;
}

/*-------------------------------------------------------------------------------------------------------------------- */


/* ITERADORES

// FOR LOOP  va ir ejecutando un codigo mientras una condicion sea evaluada como verdadera y
// deja de ejecutar esa codigo cuando esa condicion se deja de cumplir.  SON MUY UTILES EN LOS ARREGLOS
   FOR LOOP
   los for son exelente forma de iterar sobre un arreglo, ejemplo un carrito de ecomers */


   for(let i = 0; i < 10; i++){
    console.log(`i ++ = ${i}`);
}

//EJERCICIO DE PRUEBA PARA TRABAJO DE DESARROLLADOR
//mostrar los numeros pares del 1 al 10


for(i = 1; i <= 10; i ++){
    if(i % 2 === 0){  //usamos el modulo % lo que hace es evaluar el residuo, si el residuo es 0, el numero es par.
        console.log(`El número ${i} es par.`);
    }
    else{
            console.log(`El número ${i} es impar.`);
        }
} 

//EJEMPLO LISTAR LOS PRODUCTOS DE UN CARRITO CON UN FOR

const carrito = [
    {nombre: 'SmartWach HW12', precio: 425},
    {nombre: 'SmartWach HW22 plus', precio: 500},
    {nombre: 'SmartWach W26 plus', precio: 375},
    {nombre: 'SmartWach GW33', precio: 500},
    {nombre: 'SmartWach HW16', precio: 400},
    {nombre: 'Auriculares pro3', precio: 250},
    {nombre: 'bocina x6', precio: 200},
];

for (i = 0; carrito.length; i ++){   // el .length va recorrer desde la posicion 0 hasta la ultima posicion de lo que tenga el carrito
console.log(carrito[i].nombre);
};

/*-------------------------------------------------------------------------------------------------------------------- */

/* WHILE Y DO WHILE
  Es muy similar al for, la sintaxis es un poco diferente, el while se ejecuta cuando una condicion
  sea evaluada como verdadera */

//While loop
//NOTA; en el while, primero va revisar si se cumple la condición  y despues va ejecutar el código  (se tiene que complir la condición)

let i = 1;  // indice

while(i <= 10){  //
  if(i % 2 === 0){
    console.log(`El número ${i} es PAR`);
                 } else{
                        console.log(`El número ${i} es IMPAR`)
                       }

    i++; // incremento
};

// DO WHILE
// NOTA; en el do while se ejecuta el código al menos una vez (aunque la condición no se cumpla)
// y despues evalua si la condición se cumple.
let i = 100;

do{
 console.log(i);

 i ++;
}while(i < 10);


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




