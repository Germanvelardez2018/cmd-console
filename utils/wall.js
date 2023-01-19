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

        if(this.enable == true){
            if(newValue > this.numberRow){
                console.log("\b\r\t",this.content[this.numberRow]);
            }
            //borrar ultima linea
            else{
                this.init();
            }

        }
        
        this.numberRow = newValue;

    }

    pushElementIntoWall(element){
        const date = new Date();
        let newLine = element +"["+ date.getHours()+":"+date.getMinutes()+"]";
        this.content.push(newLine);
        this.refresh(this.numberRow +1)

    }


    popElementIntoWall(){
        this.content.pop();
        this.refresh(this.numberRow -1)
    }
    
}



module.exports = Wall




const Main =()=>{

}


//Main();