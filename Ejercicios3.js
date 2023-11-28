/*
  Comprueba si dado un mes(Enero, Febrero...) y un día del mes (del 1 al 31), estamos en otoño, invierno, primavera o verano. 
*/




/*
  Crea una función que categorice vehículos en función de sus características. Tendrá tres parámetros: 
    - El número de ruedas
    - El tipo de motor, debe ser gasolina, electrico o manual
    - Si tiene pedales o no

  Esta función debe devolver 'coche', 'moto', 'patinete', 'bicicleta' o 'desconocido':
  - Los coches tienen 4 ruedas, no tienen pedales y pueden ser eléctricos o de gasolina.
  - Las motos solo tienen 2 rueda, pueden ser de gasolina y no tienen pedales
  - Las bicicletas solo tienen 2 ruedas y pueden ser eléctricas o manuales y tienen pedales.
  - Los patinetes solo tienen 2 ruedas, pueden ser eléctricos o manuales y no tienen pedales pedales.
  - En cualquier otro caso devuelve desconocido.
*/


const getVehicleType = (wheels, engine, hasPedals) => {
    
    if(wheels === 4 && !hasPedals && (engine === 'electrico' || engine === 'gasolina')){
      return 'coche';
    }

    if(wheels === 2 && !hasPedals && engine === 'gasolina'){
      return 'moto';
    }  

    if(wheels === 2 && hasPedals && (engine === 'electrico' || engine === 'manual')){
      return 'bicicletas';
    }
    
    if(wheels === 2 && !hasPedals && (engine === 'electrico' || engine === 'manual')){
      return 'patinetes';
    }


    return 'desconocido';
 }

// QUE PROPIEDADES VA A TENER MI OBJETO, NO NECESITAMOS CREAR EL OBJETO, NECESITAMOS SABER LAS PROPIEDADES DEL OBJETO. En este caso tenemos el objeto vehicle que sería de 4 ruedas, motor gasolina, y que no tiene pedales.
 const vehicle = {
    wheels: 4;
    engine:'gasolina';
    hasPedals: false;
 }

 const vehicle1 = {
    wheels: 4,
    engine:'electrico';
    hasPedals: false;
 }

 const vehicle2 = {
    wheels: 4;
    engine:'desconocido';
    hasPedals: false;
 }


 // esto siempre va a dar como resultado coche

 vehicleTypeWithObject(vehicle);
 vehicleTypeWithObject(vehicle1);
 vehicleTypeWithObject(vehicle2);


//Esta es la forma de modificar una función después de haber creado varios objetos, modificar automáticamente para cada función
 const getVehicleType = (vehicle) => {
    const wheels = vehicle.wheels;
    const hasPedals = vehicle.hasPedals;
    const engine = vehicle.engine;
    
    if(wheels === 4 && !hasPedals && (engine === 'electrico' || engine === 'gasolina')){
      return 'coche';
    }

    if(wheels === 2 && !hasPedals && engine === 'gasolina'){
      return 'moto';
    }  

    if(wheels === 2 && hasPedals && (engine === 'electrico' || engine === 'manual')){
      return 'bicicletas';
    }
    
    if(wheels === 2 && !hasPedals && (engine === 'electrico' || engine === 'manual')){
      return 'patinetes';
    }


    return 'desconocido';
 }
 
 /*
  Comprueba si dado un mes(Enero, Febrero...) y un día del mes (del 1 al 31), estamos en otoño, invierno, primavera o verano. 
*/

march 21 - june 20 spring
june 21 - sept 23 summer
sept 24 - dec 21 fall autum
dec 22 - march 20



function season (day, month){
    if ((month === 'marzo' && day >= 21) || month === 'abril' || month ==='mayo' || (month == 'junio' && day <=20) ){
        return 'primavera';
    }

    if ((month === 'marzo' && day >= 21) || month === 'abril' || month ==='mayo' || (month == 'junio' && day <=20) ){
        return 'primavera';
    }

    if ((month === 'marzo' && day >= 21) || month === 'abril' || month ==='mayo' || (month == 'junio' && day <=20) ){
        return 'primavera';
    }

    if ((month === 'marzo' && day >= 21) || month === 'abril' || month ==='mayo' || (month == 'junio' && day <=20) ){
        return 'primavera';
    }
}