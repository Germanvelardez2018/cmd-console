const Wall  = require('./utils/wall')
const Format = require('./utils/format.js')



require('colors');







         









cmd_names = [
     "",
     "Intervalo 20 minutos ",
     "Intervalo 40 minutos ",
     "Intervalo 60 minutos ",
     "Almacenar 50 ",
     "Almacenar 150 ",
     "Forzar descarga ",
     "Modo intensivo (1m) ",
     "Intervalo 15 minutos ",
     "Intervalo 30 minutos",
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
     const d = new Date();
     const h = d.getHours()
     const m = d.getMinutes()
     const day = d.getDay()
     const month = d.getMonth()
     const date =`|${day.toString().gray}${("/0"+month).gray} |${h}:${m}|`

     let msg =''
     message = message.toString() 

     switch(topic){
          case 'DATA': // Tramas de datos          
                    
          data = message.split('>')
      
               for(const nmea of data){
                  wall.pushElementIntoWall(date)
                  wall.pushElementIntoWall(Format.getDataFromNmea(nmea));  
               }
               break

          case 'S': // Estado del dispositivo

               msg =` ${Format.formateStatus(message)} ${date}`
               msg =` ${message} ${date}`

               break

          case 'RCMD': // Retorno de comandos
               msg =`ret:${message}`
               break

          default:
               break
     }
     wall.pushElementIntoWall(msg);  
     }


const Main = async()=>{
     mqtt = new MqttServices(url,user,password);
     mqtt.setCallback(callbackSub);
     mqtt.connect(URL);    
     mqtt.subcribeTopic("DATA");
     mqtt.subcribeTopic("S");
     mqtt.subcribeTopic("RCMD");
     


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
