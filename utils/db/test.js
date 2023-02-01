const db = require('./database')
const DataFrame = require('./frame')





const readData = async()=>{

    console.log("leer los datos almacenados");
    let list = await DataFrame.find({})
    console.log(list)
    
    list.forEach(element=>console.log(element))
    
    }



const datos = [
    'dato de prueba 1',
    'dato de prueba 2',
    'dato de prueba 3sas'
]






console.log("Inicio programa para prbar base de datos")


console.log("Grabo 3 datos en la base")







datos.forEach(async(data)=>{

    try {
        const element = new DataFrame({
            date:Date.now(),
            data
        })
        await element.save()
       // console.log(`èl dato: ${data} fue guardado`)
    } 
    catch (error) {
        console.log(error)
        
    }

   

})


readData()