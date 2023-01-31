// Se le da formato a las tramas de datos recibidas
require("colors")








DATA_FIELD_NMEA = [         "status"
                          , "fix status"
                          , "date and time"
                          , "Latitude"
                          , "Longitud"
                          , "Altitude"
                          , "Speed over ground"
                          , "Course over Ground"
                          , "Fix mode"
                          , "Reserverd1"
                          , "HDOP"
                          , "PDOP"
                          , "Reserved2"
                          , "GNSS satellites in View"
                          , "GNSS Satellites used"
                          , "Reserved3"
                          , "c/no max"
                          , "HPA"
                          , "VPA"
                          , "x"
                          , "x"
                          , "x"
                          ]





const nmea = "1,1,20230130082246.000,-34.578848,-58.509932,4.700,0.00,0.0,1,,0.8,1.1,0.7,,13,8,,,44,,,:27.45,-0.04,0.10,1.03 "


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


const getDataFromNmea = (nmea)=>{
    const get_acelerometer= (frame)=>{
        [temp,x,y,z]=frame.split(",")
        return `\n ${"MPU6050"}\n\ttemp:${temp} x:${x} y:${y} z:${z}\r\n`
    }


    const get_data = (data)=>{
        elements = data.split(",")
        buffer ="\n\tInfo NMEA"
        for(let i = 0; i< elements.length; i++){
            buffer += `\n\t${DATA_FIELD_NMEA[i]}:${elements[i]}`
        } 
        return buffer

    }
    [data,temp]=nmea.split(":")


    return (`${get_data(data)} \r\t\n${get_acelerometer(temp)}`)
}




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
           buffer = buffer+ ("\n\t"+names_status[i]+": "+value)        
    
        }
        return buffer+ "\n"
    }
    else{
        return status
    }
}



formateStatus(status_frame)
//date_format('20230130082246.000')
data = getDataFromNmea(nmea)
console.log(data)

module.exports = {
    formateStatus,
    getDataFromNmea
}