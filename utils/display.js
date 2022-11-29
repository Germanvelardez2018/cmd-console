
const { resolve } = require('path');
const rl = require('readline');
require('colors');

//Private

const DISPLAY_MSG_INIT   = "Select an option: ";
let option = "";




const menu= ()=>{
    return new Promise(resolve =>{
        console.log(" -------------------");
        console.log(" Mqtt interface".bgGreen);
        console.log("-------------------");
        const readLine = rl.createInterface({
        input: process.stdin,
        output:process.stdout
    });
       readLine.question(DISPLAY_MSG_INIT,(opt)=>{
       readLine.close();
       resolve(opt);

    })

    })
    
}



const pause = (message) =>{
    return new Promise(resolve =>{
      
        const readLine = rl.createInterface({
        input: process.stdin,
        output:process.stdout
    });
       readLine.question(message.bgBlue,(opt)=>{
    
       readLine.close();
       resolve(opt);

    })

    })
}




module.exports= {
    menu,
    pause
}