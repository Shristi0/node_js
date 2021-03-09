const mongoose= require('mongoose');
const{Schema}=mongoose;

const userSchema = new mongoose.Schema({
firstName:{
type:String
},
lastName:{
type: String
},
address:{
type: String
},
phone:{
type: String
},
age:{
type: Number
},
status:{
type:Boolean
},
createdAt:{
type:Date,
default:Date.now},
})

module.exports = mongoose.model('User',userSchema);