const fs = require('fs');
let listado = [];

const crear = (descripcion) => {
    cargarbd();
    let porhacer = {
        descripcion: descripcion,
        completado: false
    };

    listado.push(porhacer);
    guardar().then(confirm => console.log(confirm)).catch(err => console.log(err));
    return porhacer;
};
const listas = () => {
    cargarbd();
    return listado;
};
const guardar = () => {
    let data = JSON.stringify(listado);
    return new Promise((resolve, reject) => {
        fs.writeFile(`bd/data.json`, data, (err) => {
            if (err) {
                reject('Error al guardar');
            }
            resolve(`se guardo la tarea`);
        });
    })
};

const cargarbd = () => {
    try {
        listado = require('../bd/data.json');
    } catch (error) {
        listado = [];
    }
};
const actualizar = (descripcion, completado = true) => {
    cargarbd();

    let index = listado.findIndex(tarea => tarea.descripcion === descripcion);
    if (index < 0) {
        return false;
    }
    listado[index].completado = completado;
    guardar();
    return true;
};
const eliminar = (descripcion) => {
    cargarbd();
    let index = listado.findIndex(tarea => tarea.descripcion === descripcion);
    if (index < 0) {
        return false;
    }
    listado.splice(index, 1);
    guardar();
    return true;

};
module.exports = {
    crear,
    listas,
    actualizar,
    eliminar
};