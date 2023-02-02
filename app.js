const Wall  = require('./utils/wall')
const Format = require('./utils/format.js')



require('colors');





cmd_names = [
    "",
    "[1]Intervalo de muestreo: Cada 2 Checks",
    "[2]Intervalo de muestreo: Cada 4 Checks",
    "[3]Intervalo de muestreo: Cada 6 Checks",
    "[4]Maxima cantidad de datos almacenados: 20",
    "[5]Maxima cantidad de datos almacenados: 50" ,
    "[6]Forzar extraccion de datos",
    "[7]Modo intermitente Check cada 1 minuto",
    "[1]Modo intermitente Check cada 15 minutos",
    "[9]Modo intermitente Check cada 30 minutos",
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
          case 'GPS': // Tramas de datos          
          data = message.split('>')
         // wall.pushElementIntoWall(data)
               for(const nmea of data){
                  wall.pushElementIntoWall(date)
                  wall.pushElementIntoWall(Format.getDataFromNmea(nmea));  
               }
               break

          case 'S': // Estado del dispositivo
               msg =` ${Format.formateStatus(message)} ${date}`
               break

          case 'RCMD': // Retorno de comandos
               msg =`retorno de comando:${message}`
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
     mqtt.subcribeTopic("GPS");
     mqtt.subcribeTopic("S");
     mqtt.subcribeTopic("CMD");
     


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