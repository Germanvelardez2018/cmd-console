const inquirer = require("inquirer");
require('colors')


const title = "\r\n------------\r\n----------\r\nTitle\r\n------------\r\n----------\r\n"


const listElements = [{
    type: 'list',
    name: 'options',
    message: 'Select an option',
    choices:[ 
        "Enviar comando",
         "Suscribirse a un topico",
         "Dessuscribirse a un topico",
        "Ver panel de mensajes enviados",
        "Ver panel de respuestas recibidas"]
    }
]





const menuOptions = async()=>{

    console.clear();
    console.log(title)

   
    const opt = await inquirer.prompt(listElements);

    return opt;



}


module.exports = {
    menuOptions
}
