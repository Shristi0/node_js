const mongoose= require('mongoose');
//const{Schema}=mongoose;
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: {type:String},
    lastName: {type:String},
    Address :{type:String},
    Phone:{type:String},
    Age:{type:String},
    Status:{type:String},
    createdAt: {type:Date, default: Date.now},
});
module.exports = mongoose.model('User',UserSchema);