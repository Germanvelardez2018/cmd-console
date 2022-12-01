const mqtt = require('mqtt');


class MqttServices {
    client = false;

    constructor(url,user,password){
        this.url = url;
        this.user = user ;
        this.password = password;
        this.client = mqtt.connect(this.url);
    }


    connect = ()=>{
        this.client = mqtt.connect(this.url);

}


    disconnect = ()=>{

}


    subcribeTopic = (t,callback) =>{
        this.client.subscribe(t,  err =>{if(err)console.log("Error en sub")} );


        this.client.on('message', (topic,message)=>{
            callback(topic,message);
        } );

}


    desucribeTopic = (topic) =>{

}


    sendMessage = (topic,message)=>{
    this.client.publish(topic,message,{qos:0,retein:false})
}

}


module.exports =  MqttServices