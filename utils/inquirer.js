const inquirer = require("inquirer");
require('colors')






const listElements = [{
    type: 'list',
    name: 'options',
    message: '> Select an option\n\r',
    choices:[ 
        "Enviar comando",
        "Suscribirse a un topico",
        "Desuscribirse a un topico",
        "Ver panel de mensajes enviados",
        "Ver panel de respuestas recibidas"]
    }
]





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
    menuOptions
}
