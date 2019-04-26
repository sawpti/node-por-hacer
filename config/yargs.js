const opt = {
    tareas: {
        demand: true,
        alias: 't',
    },
    /* limite: {
         alias: 'l',
         default: 10
     }*/
}
const argv = require('yargs')
    .command('listar', 'Imprime en consola la lista de tareas por hacer', {})
    .command('crear', 'Crea una tarea ingresada por el usuario', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: "Describir la tarea"
        },
    })
    .command('actualizar', 'Actualiza el estado a completado de una tarea', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: "Describir la tarea"
        },
        completado: {
            alias: 'c',
            default: true,
            desc: "Marca como completada o pendiente la tarea"
        }

    })
    .command('borrar', 'Borra una tarea. Recibe como parámetro la descripción', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: "Descripcion de la tarea a borrar"
        },

    })
    .help()
    .argv;

module.exports = {
    argv
}