// const mongoose=require('mongoose');

// const{Schema,Model}=mongoose;
//  const UserSchema = new Schema({
// username: {type: String, required:true, min:4, unique:true},
// password: {type: String, required:true}  
//  }
//  );


//  const UserModel=mongoose.model('User',UserSchema);

//  module.exports=UserModel;
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, minLength: 4, unique: true },
  password: { type: String, required: true }
});

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;
