import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ServiciosSchema = new Schema({
    "nombre":{
        type:String,
        required:true
    },
    "descripcion":{
        type:String,
        required:true
    }
},{collection:"Servicios",timestamps:true});

export default mongoose.model('Servicios',ServiciosSchema);