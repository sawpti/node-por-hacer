const fs = require('fs');

let listadoPorhacer = [];
const guardarBD = () => {
    let data = JSON.stringify(listadoPorhacer);
    fs.writeFile(`./bd/data.json`, data, (err) => {
        if (err)
            throw new Error("Se ha producido un error", err)
                //reject(err)
        else
            console.log("Tarea guardada");
    });

}

const cargarBD = () => {
    try {
        listadoPorhacer = require('../bd/data.json');
    } catch (error) {
        listadoPorhacer = []
    }

}

const getListado = () => {
    /*  try {
          listadoPorhacer = require('../bd/data.json');
          return listadoPorhacer;
      } catch (error) {
          listadoPorhacer = []
          return listadoPorhacer;
      }*/
    cargarBD();
    return listadoPorhacer;

}
const actualizar = (descripcion, completado = true) => {
    cargarBD();

    let index = listadoPorhacer.findIndex(tarea => tarea.descripcion === descripcion);
    /** esto es una forma de simple de expresar esto y se usa cuando el odigo entre corchetes
     * es una sola linea
     * 
    /*let index = listadoPorhacer.findIndex(tarea => {
        return tarea.descripcion == descripcion;
    })
    */
    if (index >= 0) {
        listadoPorhacer[index].completado = completado;
        guardarBD();
        return true;


    } else {
        return false;
    }



}
const borrar = (descripcion) => {

    //Busco el índice del arreglo que contiene la descripción que deseo borarr
    cargarBD();
    //Busco el índice del arreglo que contiene la descripción que deseo borarr
    let index = listadoPorhacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoPorhacer.splice(index, 1);
        guardarBD();
        return true;

    } else {
        console.log("No existe la tarea: " + descripcion);
        return false;
    }

}

const borrar = (descripcion) => {
    cargarBD();
    let nuevoListado = listadoPorhacer.filter(tarea => {
        return tarea.descripcion !== descripcion
    });

    if (listadoPorhacer.length == nuevoListado.length) {
        return false
    } else {
        listadoPorhacer = nuevoListado;
        guardarBD();
        return true
    }

}



const crear = (descripcion) => {
    cargarBD();
    let porhaccer = {
        descripcion,
        completado: false

    }

    listadoPorhacer.push(porhaccer);
    guardarBD();
    return porhaccer;


}
module.exports = {
    crear,
    guardarBD,
    getListado,
    actualizar,
    borrar
}