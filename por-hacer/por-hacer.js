const colors = require("colors");
const fs = require("fs");

let listadoPorHacer = [];

const guardaDB = () => {
  let data = JSON.stringify(listadoPorHacer);

  fs.writeFile("db/data.json", data, err => {

    if (err) throw new Error('No se pudo grabar', err);

  });
};

let cargarDB = () => {

  try {

    listadoPorHacer = require('../db/data.json');
  } catch (err) {
    listadoPorHacer = [];
  }

};

const crear = (description) => {

  cargarDB();

  let porHacer = {
    description,
    complete: false
  };

  listadoPorHacer.push(porHacer);
  guardaDB();

  return porHacer;
};

let getListado = (complete) => {

  cargarDB();

  console.log(complete);

  if(complete !== undefined)
  {
    return listadoPorHacer.filter(tarea => tarea.complete === complete);
  }
  else
  {
    return listadoPorHacer;
  }

};

let actualizar = (description, complete = true) => {

  cargarDB();
  let index = listadoPorHacer.findIndex(tarea => tarea.description === description);

  if (index >= 0) {
    listadoPorHacer[index].complete = complete;
    guardaDB();
    return true;
  }
  else {
    return false;
  }
};

let borrar = (description) => {
  cargarDB();
  let index = listadoPorHacer.findIndex(tarea => tarea.description === description);
  if (index >= 0) {
    listadoPorHacer.splice(index, 1);
    guardaDB();
    return true;
  }
  else {
    return false;
  }
};

module.exports = {
  crear,
  getListado,
  actualizar,
  borrar
};
