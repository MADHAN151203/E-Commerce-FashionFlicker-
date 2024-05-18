import mongoose,{Schema} from "mongoose";
let ecomschema = new  Schema({
    email:{
        type:String,
    },
    password:{
        type:String,

    },
});
export default mongoose.model("loginecom",ecomschema)