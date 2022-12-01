const inquirer = require("inquirer");
require('colors')


const listCommands = [{
    type: 'list',
    name: 'comando',
    message: '> Seleccione un comando\n\r',
    choices:[  
        {value: 1 , name:"1.".green +"Configurar intervalo: 1 minuto "},
        {value: 2 , name:"2.".green +"Configurar intervalo: 5 minuto"},
        {value: 3 , name:"3.".green +"Configurar intervalo: 10 minuto"}  ,
        {value: 4 , name:"4.".green +"Configurar intervalo: 30 minuto "},
        {value: 5 , name:"5.".green +"Configurar intervalo: 60 minuto"},
        {value: 6 , name:"6.".green +"Calibrar dispositivo"},
        {value: 7 , name:"7.".green +"Forzar extraccion de datos"},
        {value: 8 , name:"8.".green +"Maxima cantidad de datos almacenados: 20"},
        {value: 9 , name:"9.".green +"Maxima cantidad de datos almacenados: 50"}
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
                   message:' Press enter to continue',
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
