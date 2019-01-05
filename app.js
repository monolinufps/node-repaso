// require
const agv = require('./config/yargs').agv;
const hacer = require('./work-hacer/work-hacer');
//terminal lo que capturamos  y la  funcion  de primera instancia
let comando = agv._[0];
switch (comando) {

    case 'crear':
        let tarea = hacer.crear(agv.descripcion);
        console.log(tarea);
        break;

    case 'listar':
        let listado = hacer.listas();
        if (!listado) {
            console.log('vacia la bd');
        } else {
            for (let tarea of listado) {
                console.log('Nombre de la tarea: ', tarea.descripcion);
                console.log('Estado: ', tarea.completado);
            }
        }
        break;

    case 'actualizar':
        if (hacer.actualizar(agv.descripcion, agv.completado)) {
            console.log('Se actualizo correctamente');
            return;
        }
        console.log('Error');
        break;
    case 'borrar':
        if (hacer.eliminar(agv.descripcion)) {
            console.log('Se elimino correctamente');
            return;
        }
        console.log('Error');
        break;
    default:
        console.log('error_comando');
}