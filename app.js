





const {menu,pause} = require("./utils/display")




const Main = async()=>{

    let opt = "";
    while(opt != '0'){
    opt =  await menu();
    console.log("main: ",opt);
    opt =  await pause("Press 0 to exit:  ");
    }
    



}



// Entry point
Main();