const inquirer = require("inquirer");
require('colors')






const listElements = [{
    type: 'list',
    name: 'options',
    message: '> Seleccione una opcion\n\r',
    choices:[  
        {value: 1, name:"1.Enviar comando"},
        {value: 2, name:"2.Suscribirse a un topico"}  ,
        {value: 3, name:"3.Desuscribirse a un topico"},
        {value: 4, name:"4.Ver panel de mensajes enviados"},
        {value: 5, name:"5.Ver panel de respuestas recibidas"},
        {value: 5, name:"0.Salir"}
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
                   choices:[{value:1,name:''}]

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


module.exports = {
    menuOptions,
    pause
}
