require('colors');
const {menuOptions, pause, getAnswer, getCommand} = require('./utils/inquirer')
const MqttServices = require('./utils/mqtt_services');


const url= "mqtt://broker.hivemq.com";
const user = "USER";
const password = "PASS";

let mqtt = false
      
let publicedMessage =[];




const callbackSub =  (topic, message)=> {
     let msg = ` ${message.toString().green} <= ${topic.green}`;
     mqtt.sendMessage("CMD",msg)
     publicedMessage.push(msg)  
     }





const Main = async()=>{
    
     
     mqtt = new MqttServices(url,user,password);
     mqtt.subcribeTopic("SIMO_INIT",callbackSub);
     mqtt.subcribeTopic("X1111",callbackSub);
    
     
 


    



   let opt = 0;
    do{
       opt = await menuOptions("Menu de opciones");


       switch(opt.opcion){

          case 1:
          console.log("opcion 1");
          mqtt.connect(URL);    
          break;

          case 2:
          console.log("opcion 2");
          let opt = await getCommand();
          console.log(`Se envio comandos ${opt.comando}`)
          mqtt.sendMessage("CMD",`${opt.comando}`)  
          publicedMessage.push(`Topic ${"CMD".green} => ${(""+opt.comando).green}`)  
          break;

          case 3:
          console.log("opcion 3")     
          break;

          case 4:
          console.log("opcion 4")     
          break;
          case 5:
          console.log("opcion 5");
          console.clear();
          console.log("Mensaje publicados:");
          for(const msg of publicedMessage)   {
               console.log("\r\t\t",msg)
          }  
          break;
          case 6:
          console.log("opcion 6")     
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