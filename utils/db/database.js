// Configuracion de base de datos
const mongoose = require('mongoose')

const password = "4545logicos2";


const url=  `mongodb+srv://nodeGerman:${password}@cluster0.vktbm.gcp.mongodb.net/test`




const dbConnection = async ( ) =>{
    try {
        await mongoose.connect(url,{
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
        console.log('mongo db ready');
    } catch (error) {
        console.log('app crashed--------------------------------------');
        console.log(error)
        throw new Error('Error at db Mongo---------------------------');
    }


}


dbConnection();

module.exports = {
    dbConnection
}
