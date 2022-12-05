require("colors")


class Wall{

    // EL contenido que se dibujara en la pantalla
    content = []
    numberRow = 0;
    enable  = false;

    constructor(content = [],title = "Wall:"){
        this.content = content;
        this.numberRow =content.length ;
        this.title = title;
    }


    //Write the content into the wall
    init(){
        this.enable = true;
        console.clear();
        console.log(this.title.gray);
        for(let element of this.content)
        {
            console.log("\r\t"+element);
        }

    }

    deinit(){
        this.enable = false;
    }

    refresh(newValue){

        if(newValue > this.numberRow){
            console.log("\b\r\t",this.content[this.numberRow]);
        }
        //borrar ultima linea
        else{
            this.init();
        }
        this.numberRow = newValue;

    }

    pushElementIntoWall(element){
        this.content.push(element);
        this.refresh(this.numberRow +1)

    }


    popElementIntoWall(){
        this.content.pop();
        this.refresh(this.numberRow -1)
    }
    
}



module.exports = Wall




const Main =()=>{
elementTest = ["Hola mundo", "Segundo parrafo", "Tercer parrafo"]
const Test =  new Wall(elementTest);
Test.init();

setTimeout(() => { Test.pushElementIntoWall("nueva linea") }, 1500);

setTimeout(() => { Test.pushElementIntoWall("segunda nueva linea") }, 2000);
setTimeout(() => {  Test.popElementIntoWall(); }, 4000);
setTimeout(() => { Test.pushElementIntoWall("tercera nueva linea") }, 6000);

}


Main();