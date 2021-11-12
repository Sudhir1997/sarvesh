import mongoose from 'mongoose';

const User = mongoose.model('datadetails', mongoose.Schema({
  name:String,
  imageURL:String,
  mobileDetails:String,
  date:Date
}));


export User;
