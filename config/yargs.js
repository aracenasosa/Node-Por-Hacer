
const otps = {//objeto de comandos para para actualizar

    description:{
        alias:'d',
        demand: true,
        desc: 'Descripcion de la tarea por hacer'
    },
    complete:{
        default: true,
        alias: 'c',
        desc: 'Marca como completado o pendiente la tarea'
    }
}

const otps2 = {//oobjeto de comandos para crear

    description:{
        alias:'d',
        demand:true,
        desc: 'Descripcion de la tarea por hacer'
    }
}

const otps3 = {//oobjeto de comandos para crear

    complete:{
        default: undefined,
        alias: 'c',
        type: 'boolean',
        desc: 'Marca como completado o pendiente la tarea'
    }
}

const argv = require('yargs')
.command('crear', 'Crear un elemento por hacer', otps2)
.command('actualizar', 'Actualiza el estado completado de una tarea', otps)
.command('listar', 'Lista los elementos creados', otps3)
.command('borrar', 'Boorar los elementos creados', otps2)
.help()
.argv;

module.exports = {  
    argv
};
