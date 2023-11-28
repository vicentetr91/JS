//Ejercicio pantalla de usuario que tiene mucha información
//Crear un listado de usuarios y hacer una función que simule que dado un texto




const usuario1 = {
    nombre:'Javi',
    apellido:'Martinez',
    correo:'javimartinez@gmail.com',
    brand: 'Metricool',
}

const usuario2 = {
    nombre:'Miriam',
    apellidos:'Perez',
    correo:'miriamperez@gmail.com',
    brand: 'Metricool',

}
//
const userExpected = [
    {nombre:'Javi', apellido:'Martinez', correo:'javimartinez@gmail.com', brand:'Metricool ES'},
    {nombre:'Miriam', apellido:'Perez', correo:'miriamperez@gmail.com', brand: 'Metricool ES'},

]


//array de usuarios
const userList = [
    {nombre:'Javi', apellido:'Martinez', correo:'javimartinez@gmail.com', brand:'Metricool ES'},
    {nombre:'Miriam', apellido:'Perez', correo:'miriamperez@gmail.com', brand:'Metricool ES'},
]


// como hemos dicho que todos los elementos coincidan metemos filter. Filter es un boolean devuelve true o false
function searchhUsers(searchString){
    return users.filter(function(user) {
        return .name.toLowerCase.includes(searchString);

    });
}

console.log(search)