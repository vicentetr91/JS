/*
  1. Dado el siguiente carrito de la compra, calcular el precio total y mostrarlo por pantalla con console.log
*/
const shoppingCart = [
	{ product: 'Red wine', price: 20, quantity: 1},
  { product: 'water', price: 1, quantity: 2 },
  { product: 'Pizza carbonara', price: 10, quantity: 3 },
  { product: 'Tiramisú', price: 5.99, quantity: 2 },
]

let totalPrice = 0; // PORQUE EL CARRITO DE LA COMPRA TIENE QUE EMEPZAR EN 0.

shoppingCart.forEach(product =>{
    totalPrice += product.price * product.quantity; //MULTIPLICAMOS EL PRECIO DEL PRODUCTO POR LA CANTIDAD DE CADA PRODUCTO
}
    )

console.log(totalPrice)

console.log(totalPrice.toFixed(2)) // REDONDEAR A DOS DECIMALES




/*
2. Crea un array que contenga un listado de tareas. Las tareas tienen un texto y pueden estar completadas o pendientes. A continuación filtra el array para mostrar todas las 
tareas que están completadas y luego todas las tareas que están pendientes.
*/


const tareas = [
    { texto: 'Hacer Javascript', completada: true },
    { texto: 'Lavarse los dientes', completada: false },
    { texto: 'Poner la lavadora', completada: true },
    { texto: 'Hacer la cena', completada: false },
];

const tareasCompletadas = tareas.filter(homeworks => homeworks.completada === true);
const tareasPendientes = tareas.filter(homeworks => homeworks.completada === false);

console.log('Tareas Completadas:');
tareasCompletadas.forEach(homeworks => console.log(homeworks.texto));

console.log('Tareas Pendientes:');
tareasPendientes.forEach(homeworks => console.log(homeworks.texto));


//// OTRA FORMA


const tareasCompletadas1 = tareas.filter(function(homeworks){
    return homeworks.completada;
})

const tareasCompletadas1 = tareas.filter(function(homeworks){
    return !homeworks.completada;
})





/*
 3. Dado el listado de frutas que ponemos a continuación, recórrelo y crea otro array de igual longitud donde en cada elemento, aparezca el nombre de la fruta y si crece o no en un árbol.
   - Las que crecen en los árboles son las manzanas, las peras, las granadas y los plátanos.
*/

const frutas = ['manzana', 'pera', 'granada', 'platano', 'uva', 'melón', 'sandía'];


const fruits = frutas.map(fruta){
    const fromTree = ['manzana', 'pera', 'granada'].includes(fruta)
}    // porque queremos crear un array de los mismo elementos o queramos transformar un array en otro, siempre va a ser un map





/* 
   4. Dado el carrito de la compra del ejercicio 1, transforma ese array en otro que contenga además los impuestos. Por ejemplo, el primer elemento será:
	  { product: 'Red wine', price: 20, quantity: 1, taxes: 2 }

   Asumiremos que los impuestos son el 10% del precio total del producto.

   PD: La idea es que recorras el array original y lo transformes en otro con esa propiedad.
*/







/* 
   4. Dado el carrito de la compra del ejercicio 1, transforma ese array en otro que contenga además los impuestos. Por ejemplo, el primer elemento será:
	  { product: 'Red wine', price: 20, quantity: 1, taxes: 2 }

   Asumiremos que los impuestos son el 10% del precio total del producto.

   PD: La idea es que recorras el array original y lo transformes en otro con esa propiedad.
*/





/*
   5. Dado el carrito de la compra del ejercicio 1, implementa una función que permita eliminar una unidad de producto del carrito de la compra basándose 
   en el nombre del producto. Por ejemplo, si la función se invoca con "Red wine", el array debe eliminar ese elemento de la lista porque solo hay 1, pero si se invoca con
   "Tiramisú", simplemente se restará uno a la propiedad quantity de ese elemento.
*/

const shoppingCart2 = [
    { product: 'Red wine', price: 20, quantity: 1 },
    { product: 'water', price: 1, quantity: 2 },
    { product: 'Pizza carbonara', price: 10, quantity: 3 },
    { product: 'Tiramisú', price: 5.99, quantity: 2 },
]

unction removeItem (shoppingCart3, productName){
    const newShoppingCart = shoppingCart3.map(function(item){//ShoppingCart del shoppingCart3.map da igual que sea el cart 1 o 3, ya que es un parame
      if(item.product === productName){
        return{
          ...item,
          quantity: item.quantity -1,
        };
      }
  
      return item;
    });
  
    return newShoppingCart;
  }

    

//el shoppingCart del ShoppingCart.2 me da igual que sea el Cart 1 o 3, ya que es un 





