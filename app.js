require('colors');
const {menuOptions, pause} = require('./utils/inquirer')



const Main = async()=>{
    
   let opt = 0;
    do{
         opt = await menuOptions("Menu options");
         await pause();
    }

    

    while(opt !== 0);



}



// Entry point
Main();