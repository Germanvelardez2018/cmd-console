// Se le da formato a las tramas de datos recibidas
require("colors")

const frame = "1,1,20230130082246.000,-34.578848,-58.509932,4.700,0.00,0.0,1,,0.8,1.1,0.7,,13,8,,,44,,,:27.45,-0.04,0.10,1.03 "

const name_frame =[
    'x',
    'x',
    'Date',
    'x',
    'x',

]

const VBMIN = 2.8

const convBatteryLevel = (vb)=>{
    function twoDec(n) {
        let t=n.toString();
        let regex=/(\d*.\d{0,2})/;
        return t.match(regex)[0];
      }
      
    const voltaje = parseFloat(vb)
    plevel = ((voltaje- VBMIN)/1.4)*100

    return twoDec(plevel)+" %"

}

// 4.2 a 2.8    tenemos 100   1,4v /100




status_frame ="C:9/20,I:20,VB:3.22V ,LCMD:6"


names_status = ['Datos almacenados',
                'Intervalo [m]    ',
                'Nivel de Bateria ',
                'Ultimo comando   ']


const formateStatus = (status)=>{
    const elements = status.split(',')
    buffer =''
    if(elements.length == 4){
        for( let i = 0; i < elements.length;i++){
            let value = (elements[i]).split(':')[1];
            if(i == 2)value = convBatteryLevel(value)
           buffer = buffer+ ("\n\t"+names_status[i].underline.gray+": "+value.green)        
    
        }
        return buffer+ "\n"
    }
    else{
        return status
    }
   
    
    


}



formateStatus(status_frame)
//date_format('20230130082246.000')



module.exports = {
    formateStatus
}