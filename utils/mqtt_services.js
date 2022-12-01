const mqtt = require('mqtt');


class MqttServices {
    client = false;

    constructor(url,user,password){
        this.url = url;
        this.user = user ;
        this.password = password;

    }


    connect = ()=>{
        this.client = mqtt.connect(this.url);

}


    disconnect = ()=>{

}


    subcribeTopic = (topic) =>{

}


    desucribeTopic = (topic) =>{

}


    sendMessage = (topic,message)=>{
    this.client.publish(topic,message,{qos:0,retein:false})
}

}





module.exports =  MqttServices