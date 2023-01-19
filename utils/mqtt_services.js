const mqtt = require('mqtt');



class MqttServices {
    client = false;
    cb = ()=>{};

    constructor(url,user,password){
        this.url = url;
        this.user = user ;
        this.password = password;
        this.client = mqtt.connect(this.url);
    }


    connect = ()=>{
        this.client = mqtt.connect(this.url);
        this.client.on('message', (topic,message)=>{
        this.cb(topic,message);
        });
    }

    disconnect = ()=>{
    }

    setCallback = (cb)=>{
        this.cb = cb;
    }


    subcribeTopic = (t) =>{
        this.client.subscribe(t,  err =>{if(err)console.log("Error en sub")} );
        console.log("subscribio a ",t);
     }


    desuscribeTopic = (topic) =>{

    }


    sendMessage = (topic,message)=>{
        this.client.publish(topic,message,{qos:2,retain:true});
    }


}


module.exports =  MqttServices