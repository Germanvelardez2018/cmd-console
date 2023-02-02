const { green } = require("colors");
const inquirer = require("inquirer");
require('colors')


const listCommands = [{
    type: 'list',
    name: 'comando',
    message: '> Seleccione un comando\n\r',
    pageSize: 10,
    choices:[  
        {value: 1 , name:"1.".green +"Intervalo de muestreo: Cada 2 Check "},
        {value: 2 , name:"2.".green +"Intervalo de muestreo: Cada 4 Check"},
        {value: 3 , name:"3.".green +"Intervalo de muestreo: Cada 6 Check"}  ,
        {value: 4 , name:"4.".green +"Maxima cantidad de datos almacenados: 20"},
        {value: 5 , name:"5.".green +"Maxima cantidad de datos almacenados: 50" },
        {value: 6 , name:"6.".green +"Forzar extraccion de datos"},
        {value: 7 , name:"7.".green +"Modo Intermitente Check cada 1 minuto  "},
        {value: 8 , name:"8.".green +"Modo Normal Check cada 15 minutos  "},
        {value: 9 , name:"9.".green +"Modo Larga duraccion Check cada 30 minutos  "},
        {value: 0 , name:"0.".green +"Cancelar"}

        ]
    }
]


const listElements = [{
    type: 'list',
    name: 'opcion',
    message: '> Seleccione una opcion\n\r',
    choices:[  
        {value: 1 , name:"1.".green +"Conectarse a servidor mqtt"},
        {value: 2 , name:"2.".green +"Enviar comando"},
        {value: 3 , name:"3.".green +"Suscribirse a un topico"}  ,
        {value: 4 , name:"4.".green +"Desuscribirse a un topico"},
        {value: 5 , name:"5.".green +"Ver panel de mensajes enviados"},
        {value: 6 , name:"6.".green +"Ver panel de respuestas recibidas"},
        {value: 0 , name:"0.".green +"Salir"}
        ]
    }
]


const pause = async()=>{
    const opt = await inquirer.prompt(
                   [
                   {
                   type:'input',
                   name:'options',
                   message:' ',
                   } 
                ]);

}


const menuOptions = async(title)=>{
    console.clear();
    console.log("_________________________________________".bgWhite)

    console.log("\r\n "+title+" \r\n");
    console.log("_________________________________________\n\n".bgWhite)
   
    const opt = await inquirer.prompt(listElements);
    console.log("\n\n_________________________________________\n\n".bgWhite)
    return opt;
}



const getCommand  = async()=>{
    console.clear();
    const opt = await inquirer.prompt(listCommands);
    return opt;

}

module.exports = {
    menuOptions,
    pause,
    getCommand
}
