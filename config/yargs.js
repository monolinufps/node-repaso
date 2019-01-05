// comandos especificado
// objetos
const descripcion = {
    alias: 'd',
    descr: ' descripcion de la tarea',
    demand: true
};
const completado = {
    alias: 'c',
    default: true,
    descr: 'se ah realizado la actualizacion'

};
const agv = require('yargs')
    .command('crear', 'se crea una tarea', { descripcion })
    .command('actualizar', 'se actualizara la tarea', { descripcion, completado })
    .command('borrar', 'se borra la tarea', { descripcion })
    .help()
    .argv;
//da entender las funciones que puede usar o algo asi :v
module.exports = {
    agv
};