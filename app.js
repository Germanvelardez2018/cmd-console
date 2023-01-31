const Wall  = require('./utils/wall')
const Format = require('./utils/format.js')



require('colors');





cmd_names = [
    "",
    "[1]Configurar intervalo: 20 minuto ",
    "[2]Configurar intervalo: 40 minuto",
    "[3]Configurar intervalo: 60 minuto",
    "[4]Maxima cantidad de datos almacenados: 20",
    "[5]Maxima cantidad de datos almacenados: 50" ,
    "[6]Forzar extraccion de datos",
    "- delete buffer cmd- -",
    "- delete buffer cmd- -",
    "- delete buffer cmd- -",
    "Cancelar"
]


const {menuOptions, pause, getAnswer, getCommand} = require('./utils/inquirer')
const MqttServices = require('./utils/mqtt_services');


const url= "mqtt://broker.hivemq.com";
const user = "USER";
const password = "PASS";

let mqtt = false
      

const wall = new Wall([],title="Consola de comandos");



const callbackSub =  (topic, message)=> {
     const date = new Date();
    
     let msg = ` Device: ${Format.formateStatus(message.toString()).green}  ${date.getHours()} :${date.getMinutes()} <= ${topic.green} `;
     wall.pushElementIntoWall(msg);  
     }


const Main = async()=>{
     mqtt = new MqttServices(url,user,password);
     mqtt.setCallback(callbackSub);
     mqtt.connect(URL);    
     //mqtt.subcribeTopic("DEVICE");
     mqtt.subcribeTopic("D");
   // mqtt.subcribeTopic("CMD");
     


   let opt = 0;
    do{
       opt = await menuOptions("Menu de opciones");

       switch(opt.opcion){
          case 0:
               process.exit(1);
               break;

          case 1:
          break;

          case 2:;
               let opt = await getCommand();
               if(opt.comando !== 0){
                    wall.pushElementIntoWall(`Comando: ${cmd_names[opt.comando].toUpperCase().red} `)  
                    mqtt.sendMessage("CMD",`${opt.comando}`)  
               }
               
          break;

          case 3:     
          break;

          case 4:     
          break;
          case 5:
               wall.init();
               
          break;
          case 6:     
          break;


          default:
               console.log("default opcion")
               break;
       }
       await pause(); 
       wall.deinit();  

    }
    while(true);



}



// Entry point
Main();