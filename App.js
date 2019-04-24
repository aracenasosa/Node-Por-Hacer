const argv = require('./config/yargs').argv;
const chalk = require('chalk');
const porHacer = require('./por-hacer/por-hacer');

let comando = argv._[0];

switch( comando )
{
    case 'crear':
    let tarea = porHacer.crear( argv.description );
    console.log(tarea);
    break;

    case 'listar':
    let resultado = porHacer.getListado(argv.complete);
    console.log(resultado);
    console.log();
    console.table(resultado);
    for(let tarea of resultado){
        console.log(chalk.green('==========Por Hacer============'));
        console.log(tarea.description);
        console.log('Estado:', tarea.complete);
    }
    console.log(chalk.green('===================='));
    break;

    case 'actualizar':
    let actualizar = porHacer.actualizar(argv.description, argv.complete);
    console.log(actualizar);
    break;

    case 'borrar':
    let borrado = porHacer.borrar(argv.description);
    console.log(borrado);
    break;

    default:
    console.log('Comando no es reconocido');
}