console.log (" *** callback - Promise ***")

let personajes = [
    {
        id:1,
        nombre:'Batman'
    },
    {
        id:2,
        nombre:'El Bromas'
    },
    {
        id:3,
        nombre:'Alfred'
    }
]

/* parte 1 */

/*
const obtenerPersonajes = () => {
    setTimeout( ()=>{
        return personajes
    },2000);
}
//alert (obtenerPersonajes());

console.log(obtenerPersonajes())
*/

const obtenerPersonajes = () => {
    return new Promise((resolve,reject) => {
        if(personajes.length == 0 ) {
            reject( new Error('El Arreglo esta vacio'));
        } else {
            setTimeout( ()=>{
                resolve(personajes)
            },2000)
        }

    });

}


obtenerPersonajes()
    .then((personajes)=> console.log(personajes))
    .catch((error)=> console.log(error));

