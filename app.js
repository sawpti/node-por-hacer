//const arvg1 = require('yargs').argv;
var colors = require('colors');
const { argv } = require('./config/yargs');
const porHacer = require('./por-hacer/porhacer');



//console.log("console gokADSADBASDK", argv);
/** Para impirmi un objeto simpre hay que usar 
una coma deues de la cadena  en el console.log ("cademna", objeto) */

let comando = argv._[0];
switch (comando) {
    case 'listar':
        console.log('Lista de tareas por hacer');
        let listado = porHacer.getListado();
        console.log('========== Tareas por hacer========='.green);
        for (let tarea of listado) {

            console.log(tarea.descripcion);
            console.log("Estado: ", tarea.completado);
            console.log('--------------------------------');

        }
        console.log('===================================='.green);



        break;
    case 'crear':
        console.log('Registrar tareas por hacer');
        let tarea = porHacer.crear(argv.descripcion);
        // porHacer.guardarBD();
        console.log(tarea)
            // porHacer.guardarBD(tarea);
            /*crearArchivo(argv.base, argv.limite)
                .then(archivo => console.log(`Archivo creado en ${archivo}`))
                .catch(e => console.log(e))*/

        break
    case 'actualizar':
        console.log('Actualizar la terea seleccionada');
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break
    case 'borrar':
        let borrar = porHacer.borrar(argv.descripcion);

        console.log(borrar + " " + argv.descripcion);
        break;


    default:
        console.log("El comando ingresado no es reconocido");


}