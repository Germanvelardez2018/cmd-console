
const rl = require('readline');
require('colors');

//Private

const DISPLAY_MSG_INIT   = "Select an option: ";
let option = "";




const Menu= ()=>{
    console.log(" -------------------");
    console.log(" Mqtt interface".bgGreen);
    console.log("-------------------");
    let option = '';
    const readLine = rl.createInterface({
        input: process.stdin,
        output:process.stdout
    });
    readLine.question(DISPLAY_MSG_INIT,(opt)=>{
        
       console.log("quesrion input: ",opt)
      option = opt;

       readLine.close();
       return opt;

    })
}




module.exports= {
    Menu
}