import mongoose from "mongoose";


const holdingsSchema = new mongoose.Schema({
  name:{
    type:String,
    require:true
  },
  qty:{
    type:Number,
    require:true
  },
  avg:{
    type:Number
  },
  price:{
    type:Number
  },
  net:{
    type:String
  },
  day:{
    type:String
  }
});

const Holding = mongoose.model("Holding", holdingsSchema);

export default Holding