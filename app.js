require('colors');
const {menuOptions, pause} = require('./utils/inquirer')
const MqttServices = require('./utils/mqtt_services');


const url= "URL";
const user = "USER";
const password = "PASS";












const Main = async()=>{
    
     MqttServices
     let mqtt = new MqttServices(url,user,password);



   let opt = 0;
    do{
       opt = await menuOptions("Menu de opciones");


       switch(opt.opcion){

          case 1:
          console.log("opcion 1")     
          break;

          case 2:
          console.log("opcion 2")     
          break;

          case 3:
          console.log("opcion 3")     
          break;
          case 4:
          console.log("opcion 4")     
          break;
          case 5:
          console.log("opcion 5")     
          break;


          default:
               console.log("default opcion")
               break;
       }
       await pause();   

    }
    while(opt.opcion !== 0);



}



// Entry point
Main();